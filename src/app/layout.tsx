import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kavach — AI-Powered Income Protection for Delivery Workers",
  description:
    "Protect your delivery earnings from weather disruptions, pollution spikes, and platform outages. Automatic payouts. No claims. Weekly plans starting ₹49.",
  icons: {
    icon: "/Kavach-Logo.png",
    shortcut: "/Kavach-Logo.png",
    apple: "/Kavach-Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-surface-alt text-text-secondary" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
