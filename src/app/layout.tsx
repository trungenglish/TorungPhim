import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="pt-16 max-w-screen-2xl mx-auto">
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}