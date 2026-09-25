import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dr. Simranjit Singh — Associate Professor, ECE | PEC Chandigarh",
  description:
    "Portfolio of Dr. Simranjit Singh — Top 2% globally cited scientist (Stanford/Elsevier), Fellow IETE, Senior Member IEEE. Expert in optical fiber communication, photonics, MIMO antennas, and 5G/6G research. PEC Chandigarh.",
  keywords: [
    "Simranjit Singh",
    "optical fiber communication",
    "photonics",
    "5G 6G research",
    "MIMO antenna",
    "PEC Chandigarh",
    "IEEE Senior Member",
    "IETE Fellow",
    "academic portfolio",
  ],
  authors: [{ name: "Dr. Simranjit Singh" }],
  openGraph: {
    title: "Dr. Simranjit Singh — Academic Portfolio",
    description:
      "Associate Professor, ECE · PEC Chandigarh · Top 2% Most-Cited Scientists (Stanford, 2025)",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-outfit, 'Outfit', system-ui, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
