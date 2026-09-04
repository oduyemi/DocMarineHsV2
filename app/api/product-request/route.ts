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
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !product || !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide your name, email address, product, and message.",
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

    if (name.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 }
      );
    }

    if (product.length > 250) {
      return NextResponse.json(
        {
          success: false,
          message: "Product name is too long.",
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
        "Product request API: Missing Microsoft/Azure environment variables."
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

        <!-- Header -->
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
            Product Information Request
          </h2>
        </div>

        <!-- Body -->
        <div
          style="
            padding: 32px;
            border: 1px solid #e2e8f0;
            border-top: none;
          "
        >

          <!-- Product -->
          <div
            style="
              margin-bottom: 28px;
              padding: 20px;
              background: #f0f9ff;
              border: 1px solid #bae6fd;
              border-radius: 12px;
            "
          >
            <div
              style="
                margin-bottom: 6px;
                font-size: 11px;
                font-weight: 700;
                color: #0369a1;
                text-transform: uppercase;
                letter-spacing: 1px;
              "
            >
              Product Requested
            </div>

            <div
              style="
                font-size: 19px;
                font-weight: 700;
                line-height: 1.4;
                color: #0f172a;
              "
            >
              ${escapeHtml(product)}
            </div>
          </div>

          <!-- Customer Information -->
          <div
            style="
              margin-bottom: 28px;
              font-size: 14px;
            "
          >

            <div
              style="
                padding: 11px 0;
                border-bottom: 1px solid #e2e8f0;
              "
            >
              <strong style="color: #64748b;">
                Name
              </strong>

              <div
                style="
                  margin-top: 4px;
                  color: #0f172a;
                  font-weight: 600;
                "
              >
                ${escapeHtml(name)}
              </div>
            </div>

            <div
              style="
                padding: 11px 0;
                border-bottom: 1px solid #e2e8f0;
              "
            >
              <strong style="color: #64748b;">
                Email
              </strong>

              <div style="margin-top: 4px;">
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
              </div>
            </div>

            <div
              style="
                padding: 11px 0;
                border-bottom: 1px solid #e2e8f0;
              "
            >
              <strong style="color: #64748b;">
                Phone
              </strong>

              <div
                style="
                  margin-top: 4px;
                  color: #0f172a;
                "
              >
                ${escapeHtml(safePhone)}
              </div>
            </div>

            <div
              style="
                padding: 11px 0;
              "
            >
              <strong style="color: #64748b;">
                Company / Organization
              </strong>

              <div
                style="
                  margin-top: 4px;
                  color: #0f172a;
                "
              >
                ${escapeHtml(safeCompany)}
              </div>
            </div>

          </div>

          <!-- Message -->
          <div>
            <div
              style="
                margin-bottom: 10px;
                font-size: 13px;
                font-weight: 700;
                color: #0f172a;
              "
            >
              Customer Request
            </div>

            <div
              style="
                padding: 18px;
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 10px;
                line-height: 1.7;
                white-space: pre-wrap;
                color: #334155;
              "
            >
              ${escapeHtml(message)}
            </div>
          </div>

          <!-- Footer -->
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
            This product enquiry was submitted through the
            DocMarine Health Services website.
          </p>

        </div>
      </div>
    `;

    await graphClient
      .api(`/users/${encodeURIComponent(senderEmail)}/sendMail`)
      .post({
        message: {
          subject: `Product Information Request — ${product} — ${name}`,

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
        "Your product information request has been sent successfully.",
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