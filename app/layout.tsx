import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aligned Life Purpose",
    template: "%s | Aligned Life Purpose",
  },
  description:
    "Coaching, reflection, and practical guidance for living with clarity, alignment, and intention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
