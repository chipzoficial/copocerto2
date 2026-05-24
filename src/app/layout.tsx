import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/components/providers/cart-provider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "CopoCerto | Açaiteria digital",
  description: "MVP visual de pedidos online para açaiteria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${playfair.variable} min-h-full`}
    >
      <body className="min-h-screen bg-[var(--page-bg)] text-[var(--ink-strong)] antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
