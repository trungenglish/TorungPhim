"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NAV_ITEMS } from "@/features/home/constants/navItems";

const NavBar = () => {
  return (
    <div className="max-[1919px]:gap-2 flex items-center">
      {NAV_ITEMS.map((item) => (
        <div key={item.label} className="max-[1919px]:py-0 max-[1919px]:px-2 text-[13px] leading-9 shrink-0 whitespace-nowrap text-white">
          <div className="relative">
            <Link href={item.href} className="flex items-center text-inherit">
              {item.badgeText ? (
                <span className='text-[10px] font-medium px-[2.5px] py-0.5 leading-none bg-[#ffd875] rounded-[3px] text-black mr-2 before:content-["NEW"]'></span>
              ) : null}
              {item.label}
              {item.hasDropdown ? <FontAwesomeIcon icon={faCaretDown} className="ml-2" size="sm" /> : null}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBar;


