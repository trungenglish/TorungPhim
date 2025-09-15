'use client'

import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary-glow transition-colors">
        <span className="text-primary-foreground font-bold text-xl">T</span>
      </div>
      <div className="flex flex-col">
        <span className="text-balance font-bold text-foreground">TorungPhim</span>
        <span className="text-xs text-muted-foreground">Phim hay có đây</span>
      </div>
    </Link>
  )
}

export default Logo
