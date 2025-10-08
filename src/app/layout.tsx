import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AuthModal from "@/features/auth/components/AuthModal";
import { Providers } from '@/store/Provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div id="app">
            <Header/>
              {children}
            <Footer/>
          </div>
          
          <AuthModal/>
        </Providers>
      </body>
    </html>
  );
}