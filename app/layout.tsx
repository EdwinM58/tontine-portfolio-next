import type { Metadata } from "next";
import { Header, Footer } from "./_components";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
