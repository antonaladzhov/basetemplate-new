import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { themeVars } from "@/lib/theme";
import PromoBar from "@/components/blocks/promo-bar";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";
import { PageProvider } from "@/lib/page-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brand",
  description: "Property management website template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
        style={themeVars()}
      >
        <PageProvider>
          <PromoBar />
          <Header />
          <main className="surface-bg text-on-bg">
            {children}
          </main>
          <Footer />
        </PageProvider>
      </body>
    </html>
  );
}
