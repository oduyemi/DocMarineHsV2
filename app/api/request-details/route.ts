import { NextRequest, NextResponse } from "next/server";
import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";
import { escapeHtml } from "@/utils/escapeHtml";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim().toLowerCase();
    const phone = formData.get("phone")?.toString().trim();
    const company = formData.get("company")?.toString().trim();
    const product = formData.get("product")?.toString().trim();
    const source = formData.get("source")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide your name, email address, and message.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Basic field limits
    if (name.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 }
      );
    }

    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const senderEmail = process.env.SENDER_EMAIL;
    const recipientEmail =
      process.env.MAIL_TO || "info@docmarinehs.com";

    if (
      !tenantId ||
      !clientId ||
      !clientSecret ||
      !senderEmail ||
      !recipientEmail
    ) {
      console.error(
        "Request details API: Missing Microsoft/Azure environment variables."
      );

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not properly configured.",
        },
        { status: 500 }
      );
    }

    const credential = new ClientSecretCredential(
      tenantId,
      clientId,
      clientSecret
    );

    const graphClient = Client.initWithMiddleware({
      authProvider: {
        getAccessToken: async () => {
          const token = await credential.getToken(
            "https://graph.microsoft.com/.default"
          );

          if (!token?.token) {
            throw new Error(
              "Unable to obtain Microsoft Graph access token."
            );
          }

          return token.token;
        },
      },
    });

    const safePhone = phone || "Not provided";
    const safeCompany = company || "Not provided";
    const safeProduct = product || "General product inquiry";

    const sourceLabel =
      source === "product_modal"
        ? "Product Information Dialog"
        : source === "hero"
        ? "Homepage Hero"
        : source === "footer"
        ? "Website Footer"
        : "Website";

    // Email body
    const emailBody = `
      <div
        style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 720px;
          margin: 0 auto;
          background: #ffffff;
          color: #334155;
        "
      >
        <div
          style="
            padding: 28px 32px;
            background: #020617;
            border-bottom: 4px solid #06b6d4;
            color: #ffffff;
          "
        >
          <div
            style="
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              color: #67e8f9;
              margin-bottom: 8px;
            "
          >
            DocMarine Health Services
          </div>

          <h2
            style="
              margin: 0;
              font-size: 24px;
              line-height: 1.3;
              font-weight: 700;
            "
          >
            New Information Request
          </h2>
        </div>

        <div
          style="
            padding: 32px;
            border: 1px solid #e2e8f0;
            border-top: none;
          "
        >
          <div
            style="
              padding: 18px 20px;
              margin-bottom: 28px;
              background: #f0f9ff;
              border: 1px solid #bae6fd;
              border-radius: 10px;
            "
          >
            <div
              style="
                margin-bottom: 5px;
                font-size: 12px;
                font-weight: 700;
                color: #0369a1;
                text-transform: uppercase;
                letter-spacing: 0.8px;
              "
            >
              Product
            </div>

            <div
              style="
                font-size: 18px;
                font-weight: 700;
                color: #0f172a;
              "
            >
              ${escapeHtml(safeProduct)}
            </div>
          </div>

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              width: 100%;
              border-collapse: collapse;
              font-size: 14px;
            "
          >
            <tr>
              <td
                style="
                  width: 150px;
                  padding: 10px 0;
                  color: #64748b;
                  vertical-align: top;
                "
              >
                Name
              </td>

              <td
                style="
                  padding: 10px 0;
                  font-weight: 600;
                  color: #0f172a;
                "
              >
                ${escapeHtml(name)}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 10px 0;
                  color: #64748b;
                  vertical-align: top;
                "
              >
                Email
              </td>

              <td style="padding: 10px 0;">
                <a
                  href="mailto:${escapeHtml(email)}"
                  style="
                    color: #0284c7;
                    text-decoration: none;
                    font-weight: 600;
                  "
                >
                  ${escapeHtml(email)}
                </a>
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 10px 0;
                  color: #64748b;
                  vertical-align: top;
                "
              >
                Phone
              </td>

              <td
                style="
                  padding: 10px 0;
                  color: #0f172a;
                "
              >
                ${escapeHtml(safePhone)}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 10px 0;
                  color: #64748b;
                  vertical-align: top;
                "
              >
                Company
              </td>

              <td
                style="
                  padding: 10px 0;
                  color: #0f172a;
                "
              >
                ${escapeHtml(safeCompany)}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 10px 0;
                  color: #64748b;
                  vertical-align: top;
                "
              >
                Source
              </td>

              <td
                style="
                  padding: 10px 0;
                  color: #0f172a;
                "
              >
                ${escapeHtml(sourceLabel)}
              </td>
            </tr>
          </table>

          <div style="margin-top: 28px;">
            <div
              style="
                margin-bottom: 10px;
                font-size: 13px;
                font-weight: 700;
                color: #0f172a;
              "
            >
              Requested Information
            </div>

            <div
              style="
                padding: 18px;
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 10px;
                line-height: 1.7;
                color: #334155;
                white-space: pre-wrap;
              "
            >${escapeHtml(message)}</div>
          </div>

          <hr
            style="
              margin: 30px 0 20px;
              border: none;
              border-top: 1px solid #e2e8f0;
            "
          />

          <p
            style="
              margin: 0;
              font-size: 12px;
              line-height: 1.6;
              color: #94a3b8;
            "
          >
            This request was submitted through the DocMarine Health
            Services website.
          </p>
        </div>
      </div>
    `;

    // Send email
    await graphClient
      .api(`/users/${encodeURIComponent(senderEmail)}/sendMail`)
      .post({
        message: {
          subject: `Product Information Request — ${safeProduct} — ${name}`,

          body: {
            contentType: "HTML",
            content: emailBody,
          },

          toRecipients: [
            {
              emailAddress: {
                address: recipientEmail,
              },
            },
          ],

          replyTo: [
            {
              emailAddress: {
                address: email,
                name,
              },
            },
          ],
        },

        saveToSentItems: true,
      });

    return NextResponse.json({
      success: true,
      message:
        "Your request has been sent successfully. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Product request email error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your request at this time. Please try again.",
      },
      { status: 500 }
    );
  }
}