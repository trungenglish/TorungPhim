"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SearchBar = {
  placeholder?: string;
  className?: string;
};

const SearchBar = ({ placeholder = "Tìm kiếm phim, diễn viên", className = "" }: SearchBar) => {
  return (
    <search className={`relative w-full max-w-[23rem] ${className}`}>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] p-[3px]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          id="search"
          className="w-full h-[2.8rem] leading-8 px-12 py-[0.4rem] bg-white/10 text-white text-sm rounded-[0.4rem] border border-solid !border-transparent !outline-none !shadow-none"
          placeholder={placeholder}
          type="search"
          autoComplete="off"
        />
      </div>
    </search>
  );
};

export default SearchBar;


