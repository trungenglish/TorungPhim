'use client'

import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Badge } from "@/components/ui/badge"

const Navigation = () => {
  return (
    <nav className="hidden min-[1360px]:flex shrink-0 items-center gap-5">
      <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
        Chủ Đề
      </Link>
      <div className="flex items-center gap-1 cursor-pointer group">
        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
          Thể loại
        </span>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" 
        />
      </div>
      <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
        Phim Lẻ
      </Link>
      <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
        Phim Bộ
      </Link>
      <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
        Xem Chung
      </Link>
      <div className="flex items-center gap-1 cursor-pointer group">
        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
          Quốc gia
        </span>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" 
        />
      </div>
      <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
        Diễn Viên
      </Link>
      <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
        Lịch chiếu
      </Link>
      <div className="flex items-center gap-1 cursor-pointer group">
        <Badge className="bg-red-500 text-black">NEW</Badge>
        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
          Rổ bóng
        </span>
      </div>
    </nav>
  )
}

export default Navigation
