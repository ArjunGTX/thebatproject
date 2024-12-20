import { Bebas_Neue, Inter } from "next/font/google";
import "@/styles/globals.css";
import { getMetaData, getViewPort } from "@/utils/helpers";
import { ServiceWorker } from "@/components/ServiceWorker";

const rethinkSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

export const metadata = getMetaData();

export const viewport = getViewPort();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-24 snap-y snap-mandatory">
      <body
        className={`${bebasNeue.variable} ${rethinkSans.variable} antialiased font-inter bg-surface text-primary text-base`}
      >
        {children}
        <ServiceWorker />
      </body>
    </html>
  );
}
