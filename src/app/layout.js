import { Barlow_Semi_Condensed as Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({ subsets: ["latin"], weight: ["500", "600"] });

export const metadata = {
  title: "Frontend Mentor | testimonials grid section",
  description: "by Anass GOUZGAR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
