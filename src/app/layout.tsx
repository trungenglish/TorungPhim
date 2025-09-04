import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TorungPhim - Movie Streaming Platform",
  description: "Your ultimate destination for movies and entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
