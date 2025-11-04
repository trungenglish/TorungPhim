"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

type ActionButtonsProps = {
  playHref?: string;
  infoHref?: string;
  favoriteHref?: string;
};

const ActionButtons = ({ playHref = "/", infoHref = "/", favoriteHref = "/" }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-8">
      <Link
        href={playHref}
        className="flex items-center justify-center w-[70px] h-[70px] rounded-full shrink-0 text-black opacity-95 bg-gradient-to-tr from-[#FECF59] to-[#FFF1CC] [box-shadow:0_5px_10px_5px_rgba(255,218,125,0.1)] transition-all duration-300 hover:[box-shadow:0_8px_20px_8px_rgba(255,218,125,0.4)]"
      >
        <FontAwesomeIcon icon={faPlay} size="xl" />
      </Link>

      <div className="inline-flex items-center border-2 border-solid border-[#ffffff10] rounded-4xl overflow-hidden transition-colors duration-300 hover:border-white">
        <Link
          href={favoriteHref}
          className="group relative gap-[0.3rem] pl-[0.4rem] h-[50px] min-w-[68px] flex justify-center items-center flex-col py-0 px-[0.2rem]"
        >
          <div className="w-5 h-5 shrink-0 leading-0 group-hover:text-yellow-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </div>
        </Link>
        <Link
          href={infoHref}
          className="group flex justify-center items-center flex-col py-0 px-[0.2rem] gap-[0.3rem] relative border-l-2 border-solid border-[#ffffff10] pr-[0.4rem] h-[50px] min-w-[68px]"
        >
          <div className="w-5 h-5 shrink-0 leading-0 group-hover:text-yellow-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtons;


