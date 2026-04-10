import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteMeta } from "@/lib/content";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://graceiitdelhi.vercel.app"),
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/assets/dice/meta/dice-fan-social.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/assets/dice/meta/dice-fan-social.png"]
  },
  icons: {
    icon: [
      { url: "/assets/dice/meta/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/dice/meta/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/assets/dice/meta/android-icon-192x192.png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
