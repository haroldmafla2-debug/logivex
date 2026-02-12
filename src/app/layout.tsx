import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logivex S.A.S — Transporte Vehicular en Colombia",
  description:
    "Transporte seguro y eficiente de vehículos en toda Colombia. Servicio de niñera y grúa para concesionarios y dueños de vehículos. Cotice ahora.",
  keywords: [
    "transporte de vehículos",
    "niñera de carros",
    "transporte automotriz Colombia",
    "grúa para vehículos",
    "Logivex",
    "logística automotriz",
    "transporte de autos Colombia",
  ],
  openGraph: {
    title: "Logivex S.A.S — La Niñera de sus Vehículos",
    description:
      "Transporte seguro, eficiente y al precio justo para concesionarios y dueños de vehículos en todo Colombia.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
