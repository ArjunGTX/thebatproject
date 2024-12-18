import { Bebas_Neue, Inter } from "next/font/google";
import "@/styles/globals.css";
import { getMetaData, getViewPort } from "@/utils/helpers";
import { Header } from "@/components/Header";

const rethinkSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
});

export const metadata = getMetaData();

export const viewport = getViewPort();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${rethinkSans.variable} antialiased font-inter bg-black text-white text-base scroll-pt-24`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
