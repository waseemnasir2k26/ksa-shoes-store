import { Inter, Tajawal } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  weight: ['300', '400', '500', '700'],
  variable: "--font-tajawal",
  subsets: ["arabic"],
});

export const metadata = {
  title: "Al-Zaytoun | Premium Arabic Footwear",
  description: "Shop the finest collection of Men's Arabic Sandals and premium footwear in Saudi Arabia. Fast delivery and exclusive designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} ${inter.className} ${tajawal.variable}`}>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
