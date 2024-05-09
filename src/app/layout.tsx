import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "@/context/scrollContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "appstatis: Web Software Development Services",
  description:
    "Transform your business with expert web development. Custom solutions, seamless integration. Start your project today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProvider>
          <div className="lg:px-0 px-5">{children}</div>
        </ScrollProvider>
      </body>
    </html>
  );
}
