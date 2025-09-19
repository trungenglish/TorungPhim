'use client'

import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MobileButtons = () => {
  return (
    <div className="hidden max-[1359px]:flex cursor-pointer w-10 h-10 items-center justify-center rounded-lg text-[16px] shrink-0">
      <div className="relative w-5 h-5 py-[3px]">
        <span className="w-full h-0.5 bg-white block"></span>
        <span className="mt-1 w-[70%] h-0.5 bg-white block"></span>
        <span className="mt-1 w-full h-0.5 bg-white block"></span>
      </div>
    </div>
  )
}

export default MobileButtons
