"use client";

type InfoChipsProps = {
  imdb: string;
  age: string;
  release: string;
  part: string | number;
  episode: string | number;
};

const InfoChips = ({ imdb, age, release, part, episode }: InfoChipsProps) => {
  return (
    <div className="flex items-center justify-start flex-wrap gap-[0.6rem] mb-3">
      <div className="inline-flex items-center bg-transparent border border-solid border-yellow-300 text-white text-xs leading-6 font-medium px-[0.4rem] py-0 rounded-[0.33rem] shrink-0 relative before:content-['IMDb'] before:text-[#f0d25c] before:font-medium before:pr-1 before:text-[10px] before:leading-none">
        <span>{imdb}</span>
      </div>

      <div className="flex items-center text-xs bg-white font-medium overflow-hidden text-black rounded-[0.33rem] leading-[26px] py-0 px-2 shrink-0">
        <span>
          <strong>{age}</strong>
        </span>
      </div>

      <div className="inline-flex items-center border border-solid border-white bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white rounded-[0.33rem] text-xs">
        <span>{release}</span>
      </div>

      <div className="inline-flex items-center border border-solid border-white bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white rounded-[0.33rem] text-xs">
        <span>{part}</span>
      </div>

      <div className="inline-flex items-center border border-solid border-white bg-[#ffffff10] h-[26px] py-0 px-[0.4rem] text-white rounded-[0.33rem] text-xs">
        <span>{episode}</span>
      </div>
    </div>
  );
};

export default InfoChips;


