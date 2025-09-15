'use client'

import Logo from './Logo'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import UserSection from './UserSection'
import MobileButtons from './MobileButtons'

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-nav-background/95 backdrop-blur-md border-b border-border">
      <div className="container-fluid flex items-center justify-between h-16 px-6">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <MobileButtons />
          <Logo />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 pl-3">
          <Navigation />
          <SearchBar />
          <UserSection />
        </div>
      </div>
    </header>
  )
}

export default Header