"use client";

import { useScrolled } from "@/hooks/useScrolled";
import MobileButtons from "./MobileButtons";
import MobileSearch from "./MobileSearch";
import Link from "next/link";
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
      className={`block fixed top-0 right-0 left-0 z-10 transition-[background-color,backdrop-filter] duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className={`max-[1919px]:px-5 max-[1919px]:gap-6 flex items-center justify-between ${isScrolled ? "h-[70px]" : "h-[90px]"}`}>
        {/* Mobile Buttons */}
        <MobileButtons />
        <MobileSearch />

        {/* Logo */}
        <Link href="/" className="shrink-0 relative z-[3]">
          <img
            src="https://www.rophim.mx/images/logo.svg"
            alt="logo"
            className="w-auto max-[1919px]:h-10"
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
