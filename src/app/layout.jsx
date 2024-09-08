import { Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitch from "@/components/themeSwitch";

const rubik = Rubik({ subsets: ["arabic"] })

export const metadata = {
  title: "TelePort",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={`${rubik.className} bg-[#FBFBFB] dark:bg-black h-[2000px] overflow-x-hidden `}>
        <Providers>  
        {children}
        </Providers>
      </body>
    </html>
  );
}
