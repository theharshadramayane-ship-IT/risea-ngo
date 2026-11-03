import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google"; // <--- Yahan change kiya
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif" }); // <--- Yeh naya add kiya

export const metadata: Metadata = {
  title: "Risea | Making a Difference",
  description: "Join us in our mission to create sustainable solutions for communities in need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}