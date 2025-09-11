import Footer from "@/components/blocks/footer";
import Header from "@/components/blocks/header";
import BodyClass from "@/components/ui/body-class";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { getCalryEnv } from "@/lib/env";
import { PageProvider } from "@/lib/page-context";
import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "brand - Premium Property Management",
  description: "Discover exceptional properties and experiences with brand. Your trusted partner in premium property management and curated experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { TENANT_PUBLIC_URL } = getCalryEnv();
  const tenantBase = TENANT_PUBLIC_URL || "";
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <PageProvider>
          <BodyClass />
          <Header tenantBase={tenantBase} />
          <ErrorBoundary>{children}</ErrorBoundary>
          <Footer />
        </PageProvider>
      </body>
    </html>
  );
}
