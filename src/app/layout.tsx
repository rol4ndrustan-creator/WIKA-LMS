import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wikasatrian — Leadership Begins With A Journey",
  description:
    "An immersive journey through Wikasatrian's leadership development ecosystem — explore the Pendopo, our programs, and begin your organization's transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased grain`}
    >
      <body className="min-h-full flex flex-col bg-ink text-warm-white">
        {children}
      </body>
    </html>
  );
}
