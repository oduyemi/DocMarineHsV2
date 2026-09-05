import { Footer } from "@/navigation/footer";
import { Header } from "@/navigation/header";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lato = localFont({
  src: [
    {
      path: "./fonts/Lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://docmarinehs.com";

const siteName = "DocMarine Health Services";

const siteDescription =
  "DocMarine Health Services supplies reliable medical equipment and healthcare products for hospitals, clinics, offshore operations, marine companies, industrial facilities and corporate organizations across Nigeria.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Medical Equipment Supplier in Nigeria | DocMarine Health Services",
    template: "%s | DocMarine Health Services",
  },

  description: siteDescription,

  applicationName: siteName,

  authors: [
    {
      name: siteName,
      url: siteUrl,
    },
  ],

  creator: siteName,
  publisher: siteName,
  category: "Medical Equipment & Healthcare",

  keywords: [
    "DocMarine Health Services",
    "DocMarine HS",
    "medical equipment supplier Nigeria",
    "medical equipment Nigeria",
    "medical supplies Nigeria",
    "healthcare equipment Nigeria",
    "hospital equipment supplier Nigeria",
    "clinical equipment Nigeria",
    "emergency medical equipment Nigeria",
    "offshore medical equipment",
    "marine medical equipment",
    "industrial medical supplies",
    "occupational health equipment",
    "medical equipment supplier Lagos",
    "medical equipment procurement Nigeria",
    "medical equipment for oil and gas",
    "emergency response equipment Nigeria",
    "medical consumables Nigeria",
  ],

  alternates: {
    canonical: "/",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",

    locale: "en_NG",

    url: siteUrl,

    siteName,

    title:
      "Medical Equipment Supplier in Nigeria | DocMarine Health Services",

    description: siteDescription,

    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "DocMarine Health Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Medical Equipment Supplier in Nigeria | DocMarine Health Services",

    description: siteDescription,

    images: [
      {
        url: "/logo512.png",
        alt: "DocMarine Health Services",
      },
    ],
  },

  icons: {
    icon: [
      {
        url: "/favicon16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.png",

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020618",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${siteUrl}/#organization`,

  name: "DocMarine Health Services Ltd",

  alternateName: "DocMarine HS",

  url: siteUrl,

  logo: `${siteUrl}/logo512.png`,

  description: siteDescription,

  foundingDate: "2020",

  email: "info@docmarinehs.com",

  telephone: "+2348034048799",

  contactPoint: [
    {
      "@type": "ContactPoint",

      telephone: "+2348034048799",

      contactType: "customer service",

      email: "info@docmarinehs.com",

      areaServed: "NG",

      availableLanguage: ["English"],
    },
  ],

  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },

  knowsAbout: [
    "Medical Equipment Supply",
    "Medical Equipment Procurement",
    "Emergency Medical Equipment",
    "Offshore Medical Equipment",
    "Marine Medical Equipment",
    "Industrial Medical Equipment",
    "Healthcare Equipment",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": `${siteUrl}/#website`,

  url: siteUrl,

  name: siteName,

  description: siteDescription,

  publisher: {
    "@id": `${siteUrl}/#organization`,
  },

  inLanguage: "en-NG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      className={`${lato.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-white font-sans text-black"
        suppressHydrationWarning
      >
        <Header />

        <main>{children}</main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </body>
    </html>
  );
}