import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Github from "@/components/github";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robin Lanfranchi | Portfolio",
  description: "Robin Lanfranchi's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <Github />
        {children}
        </body>
    </html>
  );
}
