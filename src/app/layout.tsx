import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navBar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vakantie boeking",
  description: "Voel u thuis, ver weg van huis",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Navbar />
          <main className="container py-10">{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
