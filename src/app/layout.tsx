import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { getMetaData, getViewPort } from "@/utils/helpers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
        className={`${montserrat.variable} antialiased font-montserrat bg-black text-white text-base`}
      >
        {children}
      </body>
    </html>
  );
}
