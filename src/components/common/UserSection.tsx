'use client'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserSection = () => {
  return (
    <div className="hidden min-[1360px]:flex items-center gap-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src="#" />
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">Tài ứng dụng</span>
        <span className="text-sm font-medium text-foreground">ToPhim</span>
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        className="rounded-full p-4 bg-white text-black"
      >
        <FontAwesomeIcon icon={faUser} className="h-4 w-4 mr-1" />
        Thành viên
      </Button>
    </div>
  )
}

export default UserSection
