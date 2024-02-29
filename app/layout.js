import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";

import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Eventogy - Static",
  description: "",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <div className="flex justify-center py-5">
          <p>© 2023. All rights reserved</p>
        </div>
      </body>
    </html>
  );
}
