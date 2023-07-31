import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "@/components/authprovider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VebShen",
  description: "Blogging site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
