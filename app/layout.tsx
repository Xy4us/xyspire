import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/src/components/ClientWrapper";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import PageTransition from "@/src/components/PageTransition";

export const metadata: Metadata = {
  title: "xyspire | Bold. Precise. Exceptional.",
  description: "We build high-performance websites that blend clarity, precision, and seamless user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientWrapper>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
