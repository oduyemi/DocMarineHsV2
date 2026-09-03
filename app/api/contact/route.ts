import { NextRequest, NextResponse } from "next/server";
import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";
import { escapeHtml } from "@/utils/escapeHtml";

const VALID_ENQUIRY_TYPES = [
  // Homepage
  "product-information",
  "quotation",
  "procurement",

  // Contact page
  "medical-equipment-supplies",
  "offshore-medical-services",
  "occupational-health-services",
  "general-medical-services",
  "emergency-preparedness-response",
  "medical-equipment-maintenance",
  "corporate-healthcare",

  // Shared
  "general-enquiry",
] as const;

type EnquiryType = (typeof VALID_ENQUIRY_TYPES)[number];

const enquiryLabels: Record<EnquiryType, string> = {
  "product-information": "Medical Product Information",
  quotation: "Request a Quotation",
  procurement: "Procurement & Supply",

  "medical-equipment-supplies": "Medical Equipment & Supplies",
  "offshore-medical-services": "Offshore Medical Services",
  "occupational-health-services": "Occupational Health Services",
  "general-medical-services": "General Medical Services",
  "emergency-preparedness-response":
    "Emergency Preparedness & Response",
  "medical-equipment-maintenance":
    "Medical Equipment Maintenance",
  "corporate-healthcare": "Corporate Healthcare",

  "general-enquiry": "General Enquiry",
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim().toLowerCase();
    const organization = formData.get("organization") ?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const enquiry = formData.get("enquiry")?.toString().trim();
    const industry = formData.get("industry")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide your name, email address, and message.",
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

    if (
      !enquiry ||
      !VALID_ENQUIRY_TYPES.includes(enquiry as EnquiryType)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a valid enquiry type.",
        },
        { status: 400 }
      );
    }

    const enquiryType = enquiry as EnquiryType;
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
        "Missing Microsoft/Azure environment variables."
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

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeOrganization = escapeHtml(
      organization || "Not provided"
    );

    const safePhone = escapeHtml(
      phone || "Not provided"
    );

    const safeIndustry = escapeHtml(
      industry || "Not provided"
    );

    const safeMessage = escapeHtml(message);

    const safeEnquiry = escapeHtml(
      enquiryLabels[enquiryType]
    );

    /*
     * -----------------------------------------
     * Email body
     * -----------------------------------------
     */

    const emailBody = `
      <div
        style="
          font-family: Arial, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          color: #334155;
        "
      >

        <div
          style="
            padding: 24px;
            background: #0284c7;
            color: white;
          "
        >
          <p
            style="
              margin: 0 0 8px;
              font-size: 12px;
              font-weight: bold;
              letter-spacing: 2px;
              text-transform: uppercase;
              opacity: 0.8;
            "
          >
            DocMarine Health Services
          </p>

          <h2 style="margin: 0;">
            New Website Enquiry
          </h2>
        </div>

        <div
          style="
            padding: 28px;
            border: 1px solid #e2e8f0;
            border-top: none;
          "
        >

          <!-- Enquiry Type -->

          <div
            style="
              margin-bottom: 24px;
              padding: 14px 16px;
              background: #f0f9ff;
              border: 1px solid #bae6fd;
              border-radius: 8px;
            "
          >
            <p
              style="
                margin: 0;
                font-size: 12px;
                color: #0369a1;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: bold;
              "
            >
              Enquiry Type
            </p>

            <p
              style="
                margin: 6px 0 0;
                font-size: 15px;
                font-weight: bold;
                color: #0f172a;
              "
            >
              ${safeEnquiry}
            </p>
          </div>

          <!-- Contact Details -->

          <table
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="border-collapse: collapse;"
          >
            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: bold;
                  width: 150px;
                  vertical-align: top;
                "
              >
                Name
              </td>

              <td style="padding: 8px 0;">
                ${safeName}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: bold;
                  vertical-align: top;
                "
              >
                Email
              </td>

              <td style="padding: 8px 0;">
                <a
                  href="mailto:${safeEmail}"
                  style="color: #0284c7;"
                >
                  ${safeEmail}
                </a>
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: bold;
                  vertical-align: top;
                "
              >
                Phone
              </td>

              <td style="padding: 8px 0;">
                ${safePhone}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: bold;
                  vertical-align: top;
                "
              >
                Organization
              </td>

              <td style="padding: 8px 0;">
                ${safeOrganization}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  font-weight: bold;
                  vertical-align: top;
                "
              >
                Industry
              </td>

              <td style="padding: 8px 0;">
                ${safeIndustry}
              </td>
            </tr>
          </table>

          <!-- Message -->

          <div style="margin-top: 24px;">
            <strong>Message:</strong>

            <div
              style="
                margin-top: 10px;
                padding: 16px;
                background: #f8fafc;
                border-radius: 8px;
                white-space: pre-wrap;
                line-height: 1.7;
              "
            >
              ${safeMessage}
            </div>
          </div>

          <hr
            style="
              margin: 28px 0;
              border: none;
              border-top: 1px solid #e2e8f0;
            "
          />

          <p
            style="
              margin: 0;
              font-size: 13px;
              color: #64748b;
              line-height: 1.6;
            "
          >
            This enquiry was submitted through the
            DocMarine Health Services website.
          </p>

        </div>
      </div>
    `;

    await graphClient
      .api(`/users/${senderEmail}/sendMail`)
      .post({
        message: {
          subject: `Website Enquiry — ${
            enquiryLabels[enquiryType]
          } — ${name}`,

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

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been sent successfully. Our team will be in touch shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Contact form email error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your enquiry at this time. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}