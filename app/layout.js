// app/layout.js

import { Noto_Sans_Devanagari, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "NFIW - National Federation of Indian Women | भारतीय महिला फेडरेशन",
  description:
    "National Federation of Indian Women (NFIW) - Fighting for women's rights, justice, and equality. Denial of Justice, is Violence. भारतीय महिला फेडरेशन - महिलाओं के अधिकार, न्याय और समानता के लिए संघर्षरत।",
  keywords:
    "NFIW, National Federation of Indian Women, भारतीय महिला फेडरेशन, women's rights, महिला अधिकार, women empowerment, gender justice",
  authors: [{ name: "NFIW" }],
  creator: "National Federation of Indian Women",
  publisher: "NFIW",
  openGraph: {
    title: "NFIW - National Federation of Indian Women",
    description: "Fighting for women's rights, justice, and equality",
    type: "website",
    locale: "hi_IN",
    alternateLocale: ["en_US", "pa_IN"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body
        className={`${notoSansDevanagari.variable} ${inter.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
