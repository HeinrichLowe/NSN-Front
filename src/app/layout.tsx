import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MiddleLayout } from "./middleLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NSN",
  description: "New Social Network",
  icons: "/images/miniLogo.ico",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen overflow-y-hidden`}>
        <MiddleLayout>
          {children}
        </MiddleLayout>
      </body>
    </html>
  );
}