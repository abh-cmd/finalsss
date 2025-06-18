https://finalsss-wgoe-jog9zrz8k.vercel.app/import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "SRI SAI INTERIORS | Luxury Interior Design",
  description: "Transform your space with SRI SAI INTERIORS - Premier interior design services for residential and commercial spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-amber-50/95 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
