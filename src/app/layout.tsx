import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/features/home/components/HeroSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="pt-16">
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
