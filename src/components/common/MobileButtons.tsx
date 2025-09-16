'use client'

import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

const MobileButtons = () => {
  return (
    <>
      <Button variant="ghost" className="hidden max-[1360px]:flex hover:bg-secondary">
        <FontAwesomeIcon icon={faBars} className="h-8 w-8" />
      </Button>
      <Button variant="ghost" size="icon" className="hidden max-[1359px]:flex hover:bg-secondary">
        <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
      </Button>
    </>
  )
}

export default MobileButtons
