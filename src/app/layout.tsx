import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AuthModal from "@/features/auth/components/AuthModal";
import HeroSection from "@/features/home/components/HeroSection";
import { AnimeData } from "@/features/home/constants/anime";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="app">
          <Header/>
            {children}
          <Footer/>
        </div>
        
        <AuthModal/>

      </body>
    </html>
  );
}