import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AuthModal from "@/features/auth/components/AuthModal";

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
          <main className="pt-16 max-w-[1900px] mx-auto">
              {children}
          </main>
          <Footer/>
        </div>
        
        <AuthModal/>

      </body>
    </html>
  );
}