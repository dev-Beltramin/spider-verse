import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Components/header/header";
import './Globals.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aranha verso",
  description: "projeto do aranha-verso utilizando next-js , sass , fremer-motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        
        {children}

      </body>
    </html>
  );
}
