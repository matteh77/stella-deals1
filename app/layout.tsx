import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Stella Deals", description: "Curated Amazon product ideas and practical buying guides." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
