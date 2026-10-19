import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just Workin",
  description: "An empty Three.js scene built with Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
