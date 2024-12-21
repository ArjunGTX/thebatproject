import { Bebas_Neue, Inter } from "next/font/google";
import "@/styles/globals.css";
import { getMetaData, getViewPort } from "@/utils/helpers";
import { ServiceWorker } from "@/components/ServiceWorker";
import { MotionConfig } from "framer-motion";

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
    <html lang="en" className="snap-y snap-mandatory">
      <body
        className={`${bebasNeue.variable} ${rethinkSans.variable} antialiased font-inter bg-surface text-primary text-base`}
      >
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <ServiceWorker />
      </body>
    </html>
  );
}
