"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MemberButton = () => {
  return (
    <div className="max-[1919px]:gap-2 flex items-center">
      <Link
        href="/"
        className="bg-white text-[1em] text-black max-[1919px]:min-w-[125px] px-[0.8rem] py-2 rounded-[3rem] border border-solid border-[rgb(255,255,255,0.5)] opacity-90 font-medium whitespace-nowrap text-center"
      >
        <div className="inline-flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="ml-1" size="sm"/>
          <span className="text-sm">Thành viên</span>
        </div>
      </Link>
    </div>
  );
};

export default MemberButton;


