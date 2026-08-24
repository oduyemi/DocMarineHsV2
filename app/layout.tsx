import { Footer } from "@/navigation/footer";
import { Header } from "@/navigation/header";
import type { Metadata } from "next";
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


export const metadata: Metadata = {
  metadataBase: new URL("https://docmarinehs.com"),

  title: {
    default: "DocMarine Health Services | ",
    template: "%s | DocMarine Health Services",
  },

  description:
    "DocMarine Health Services is a ",

    keywords: [
      "DocMarine HS",
      "DocMarine Health Services",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
  ],

  authors: [
    {
      name: "DocMarine Health Services | ",
    },
  ],

  creator: "DocMarine Health Services | ",

  category: "Healthcare",

  applicationName: "DocMarine Health Services | ",

  publisher: "DocMarine Health Services",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "DocMarine Health Services | ",
    description:
      "DocMarine Health Services is a ",
    url: "https://globalcrossfirechurch.org",
    siteName: "DocMarine Health Services | ",
    locale: "en_GB",
    type: "website",

    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "DocMarine Health Services | ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DocMarine Health Services | ",
    description:
      "DocMarine Health Services is a ",
    images: ["/logo512.png"],
  },

  manifest: "/site.webmanifest",

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
    ],

    shortcut: ["/favicon.png"],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    
    other: [
      {
        rel: "icon",
        url: "/logo192.png",
      },
      {
        rel: "icon",
        url: "/logo512.png",
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
  
      "max-video-preview": -1,
  
      "max-snippet": -1,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-screen font-sans bg-white text-black" 
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}