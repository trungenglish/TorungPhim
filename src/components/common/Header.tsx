"use client";

import { useScrolled } from "@/hooks/useScrolled";
import MobileButtons from "./MobileButtons";
import MobileSearch from "./MobileSearch";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import AppDownloadCTA from "./AppDownloadCTA";
import MemberButton from "./MemberButton";

const Header = () => {
  const isScrolled = useScrolled(0);

  return (
    // <header className="fixed top-0 w-full z-50 bg-nav-background/95 backdrop-blur-md border-b border-border">
    //   <div className="container-fluid flex items-center justify-between h-16 px-6">
    //     {/* Left Section */}
    //     <div className="flex items-center gap-3">
    //       <MobileButtons />
    //       <Logo />
    //     </div>

    //     {/* Right Section */}
    //     <div className="flex items-center gap-6 pl-3">
    //       <Navigation />
    //       <SearchBar />
    //       <UserSection />
    //     </div>
    //   </div>
    // </header>

    <header
      className={`block fixed top-0 right-0 left-0 z-30 transition-[background-color,backdrop-filter] duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className={`px-5 gap-6 flex items-center justify-between ${isScrolled ? "h-[70px]" : "h-[90px]"}`}>
        {/* Mobile Buttons */}
        <MobileButtons />
        <MobileSearch />

        {/* Logo */}
        <Link href="/" className="shrink-0 relative z-[3]">
          <Image
            src="https://www.rophim.mx/images/logo.svg"
            alt="TorungPhim Logo"
            width={160}
            height={40}
            className="w-auto h-10"
            unoptimized
          />
        </Link>

        {/* Search Bar */}
        <SearchBar />

        <nav className="gap-[0.6rem] relative z-[3] flex grow items-center justify-between ">
          <NavBar />
          <div className="grow"></div>
          <AppDownloadCTA />
          <MemberButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
