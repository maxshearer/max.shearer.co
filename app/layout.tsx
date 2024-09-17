import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interDisplay = localFont({
  src: [
    {
      path: "./fonts/InterDisplay-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/InterDisplay-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/InterDisplay-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Max Shearer - Designer and full(ish)-stack developer",
  description:
    "Professional web tinkerer for over 15 years. Having fun with React Native, Go, Supabase and all the other general AI goodies that are in vogue at the moment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interDisplay.variable}`}>{children}</body>
    </html>
  );
}
