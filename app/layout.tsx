import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // This will be created next by create-next-app default
import Navbar from "@/app/components/layout/Navbar"; // Adjusted path
import Footer from "@/app/components/layout/Footer"; // Adjusted path
import PageTransitionWrapper from "@/app/components/layout/PageTransitionWrapper"; // Import the wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Animated Next.js Site",
  description: "A cool site built with Next.js and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        {/* This globals.css likely doesn't exist yet if create-next-app didn't put it in app/ */}
        {/* I will assume it's in the default location, or adjust if needed */}
        <Navbar />
        <PageTransitionWrapper>
          <div className="min-h-screen">
            {children}
          </div>
        </PageTransitionWrapper>
        <Footer />
      </body>
    </html>
  );
}
