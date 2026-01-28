import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Light Project | Contemporary Greek Art by Maria-Efimia Dimoka",
  description: "Nine original handmade acrylic paintings exploring light and shadow in Greek architecture. Contemporary Mediterranean art by Maria-Efimia Dimoka. Available for purchase.",
  keywords: ["contemporary Greek artist", "original handmade paintings", "acrylic paintings on canvas", "light and shadow art", "contemporary art from Greece", "fine art paintings for sale", "modern Mediterranean art"],
  authors: [{ name: "Maria-Efimia Dimoka" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "The Light Project | Contemporary Greek Art by Maria-Efimia Dimoka",
    description: "Nine original handmade acrylic paintings exploring light and shadow in Greek architecture. Contemporary Mediterranean art available for purchase.",
    url: "https://thelightproject.art",
    siteName: "The Light Project",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Light Project | Contemporary Greek Art",
    description: "Nine original handmade acrylic paintings exploring light and shadow in Greek architecture.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
