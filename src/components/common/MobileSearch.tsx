'use client'

import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const MobileSearch = () => {
  return (
    <div className="max-[1359px]:flex cursor-pointer w-10 h-10 items-center justify-center rounded-lg shrink-0 text-[16px]">
        <div className="relative w-5 h-5 leading-5 text-center">
            <span className="absolute w-full h-0.5 bg-white top-0 left-0 opacity-0"></span>
            <span className="absolute top-[18px] w-full h-0.5 bg-white left-0 opacity-0"></span>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />
        </div>
    </div>
  )
}

export default MobileSearch
