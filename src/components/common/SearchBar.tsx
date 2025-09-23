'use client'

import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className="hidden min-[1360px]:block flex-shrink">
      <div className="relative w-[clamp(160px,20vw,270px)]">
        <FontAwesomeIcon 
          icon={faSearch} 
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" 
        />
        <Input
          type="search"
          placeholder="Tìm kiếm phim, diễn viên"
          className="w-full pl-10 pr-4 h-11 bg-secondary/50 border-secondary hover:bg-secondary/70 focus:bg-secondary transition-all duration-200"
        />
      </div>
    </div>
  )
}

export default SearchBar
