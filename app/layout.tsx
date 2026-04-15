import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/ui/home/navbar";


export const metadata: Metadata = {
  title: "Kick Net Store ",
  description: "Professional cleaning services for homes and offices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Navbar at the top */}
        <header>
          <Navbar />
        </header>

        {/* Main content grows to fill available space */}
        <main className="flex-1 w-full py-8">
          {children}
        </main>

        {/* Optional footer */}
        <footer className="bg-gray-100 text-gray-700 text-center py-4 mt-auto">
          &copy; {new Date().getFullYear()} Sparkle Cleaning Services. All rights reserved.
        </footer>
      </body>
    </html>
  );
}