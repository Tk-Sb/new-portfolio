import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${inter.className} bg-[#FBFBFB] h-[2000px]`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
