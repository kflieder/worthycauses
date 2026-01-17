import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "Worthy Causes",
  description:
    "Worthy Causes is a non-profit that is making a tangible difference. Through education, humanitarian aid, and targeted outreach, we are empowering communities and creating real change that can be felt one person at a time.",

  openGraph: {
    title: "Worthy Causes",
    description:
      "Worthy Causes is a non-profit that is making a tangible difference.",
    images: [
      {
        url: "/metaPic.png", // must be in /public
        width: 1200,
        height: 630,
        alt: "Worthy Causes – Empowering Communities",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Worthy Causes",
    description:
      "Worthy Causes is a non-profit that is making a tangible difference.",
    images: ["/metaPic.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
