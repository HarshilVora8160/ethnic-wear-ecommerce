import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { UIProvider } from "@/lib/context/UIContext";
import CartDrawer from "@/components/ui/CartDrawer";
import QuickViewModal from "@/components/ui/QuickViewModal";
import SearchModal from "@/components/ui/SearchModal";
import Toast from "@/components/ui/Toast";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AAVIRÁ | Royal Ethnic Couture & Bespoke Indian Wear",
  description:
    "Discover opulent handloom sarees, bespoke bridal lehengas, festive kurtis, and royal menswear crafted by master Indian artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF6F0] text-[#1A1215]">
        <UIProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <QuickViewModal />
          <SearchModal />
          <Toast />
        </UIProvider>
      </body>
    </html>
  );
}
