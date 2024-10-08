import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Apppbar from "@/components/Appbar";
import Providers from "./Providers";
import { Toaster } from 'sonner'
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airdrop SOLANA",
  description: "airdrop and transfer SOL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Apppbar/>
        <Toaster richColors position="top-left"/>
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  );
}
