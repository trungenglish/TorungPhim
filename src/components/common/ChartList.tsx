import { faArrowTrendDown, faArrowTrendUp, faFolderPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { genreColors } from "@/constants/genreColors";

interface ChartListProps {
    type: 'movie' | 'genre';
    data: {
        id: string;
        name: string;
        image?: string;  
        trend: "up" | "down" | "minus";
    }[]
}
const ChartList = ({type, data}: ChartListProps) => {
    return (
        <div className="flex flex-col">
            {data.map((item, index) => (
                <div key={item.id} className="flex items-center h-[50px] gap-4">
                    {/* Position */}
                    <div className="w-4 text-[1.2em] font-semibold opacity-30">
                        {index + 1}.
                    </div>

                    {/* Trend */}
                    {item.trend === "up" ? (
                        <div className="w-4 text-center text-[#bedc33]">
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                        </div>
                    ): item.trend === "down" ? (
                        <div className="w-4 text-center text-[#dc328c]">
                            <FontAwesomeIcon icon={faArrowTrendDown} />
                        </div>
                    ) : (
                        <div className="w-4 text-center text-[#fff3]">
                            <FontAwesomeIcon icon={faMinus} />
                        </div>
                    )}
                    {type === "genre" ? (
                        <div className={`py-0 px-3 h-7 text-[13px] flex items-center rounded-4xl text-white ${
                            genreColors[item.name] || "bg-gray-500"
                          }`}>
                           <Link title={item.name} href="/" >{item.name}</Link>
                        </div>
                    ) : ( 
                        <> 
                            {/* Thumbnail */}
                            <div className="relative w-[25px] pb-9 rounded-xs overflow-hidden">
                                <img src={item.image} 
                                alt={item.name} className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover" loading="lazy"/>
                            </div>

                            {/* Name */}
                            <h4 className="m-0 text-[1em] font-normal grow text-white hover:text-yellow-300 transition-colors">
                                <Link title={item.name} href="/" className="font-normal">
                                    {item.name}
                                </Link>
                            </h4>
                        </>
                    )}
                   
                    
                </div>
            ))}
             <div className="mt-2">
                 <Link href="/" className="text-[#fff5] text-sm hover:text-yellow-300 transition-colors">
                     Xem thêm
                 </Link>
             </div>
        </div>
    )
}

export default ChartList;