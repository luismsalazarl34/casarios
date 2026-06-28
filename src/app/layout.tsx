import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import CartSidebar from "@/components/CartSidebar";

export const metadata: Metadata = {
  title: {
    default: "Casa Rios — Café de Especialidad",
    template: "%s | Casa Rios",
  },
  description: "Café de especialidad seleccionado con pasión. Desde el origen hasta tu taza.",
  keywords: ["café", "coffee", "especialidad", "specialty coffee", "Casa Rios"],
  openGraph: {
    title: "Casa Rios — Café de Especialidad",
    description: "Café de especialidad seleccionado con pasión. Desde el origen hasta tu taza.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col bg-[#FEFCF9] text-[#2E1B0E]">
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
