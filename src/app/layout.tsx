import { Bebas_Neue, Rethink_Sans } from "next/font/google";
import "@/styles/globals.css";
import { getMetaData, getViewPort } from "@/utils/helpers";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
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
        className={`${bebasNeue.variable} ${rethinkSans.variable} antialiased font-rethink-sans bg-black text-white text-base`}
      >
        {children}
      </body>
    </html>
  );
}
