import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathusan Manivannan | Data Science Portfolio",
  description:
    "Personal portfolio of Mathusan Manivannan — data science student, ML enthusiast, and aspiring data engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-dark text-body antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
