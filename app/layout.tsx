import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainContainer from "../components/MainContainer"

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Spotify clone",
  description: "Created By NextJs, Supabase, Stripe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MainContainer>
        {children}
        </MainContainer>
      </body>
    </html>
  );
}
