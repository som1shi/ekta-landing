import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekta - Unify XR Development",
  description: "The next-generation IDE for building apps on AR/VR/XR headsets. Develop once, deploy everywhere across all XR platforms.",
  keywords: ["XR", "AR", "VR", "IDE", "development", "augmented reality", "virtual reality", "mixed reality"],
  authors: [{ name: "Ekta" }],
  openGraph: {
    title: "Ekta - Unify XR Development",
    description: "The next-generation IDE for building apps on AR/VR/XR headsets. Develop once, deploy everywhere across all XR platforms.",
    type: "website",
    url: "https://ekta.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ekta XR IDE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekta - Unify XR Development",
    description: "The next-generation IDE for building apps on AR/VR/XR headsets.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased gradient-bg`}
      >
        {children}
      </body>
    </html>
  );
}
