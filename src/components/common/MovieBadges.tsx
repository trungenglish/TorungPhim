

interface MovieBadgeProps {
    type: string;
    subtitleEp?: number;
    dubbedEp?: number;
    voicedEp?: number;
}

const MovieBadges = ({ type, subtitleEp, dubbedEp, voicedEp }: MovieBadgeProps) => {
    return (
        <>
            { type === 'SERIES' ? (
                <div className="absolute bottom-0 left-4 flex rounded-t-sm overflow-hidden z-10">       
                    {subtitleEp !== undefined && subtitleEp > 0 && (
                        <div className="bg-[#5e6070] px-2 py-1 text-xs font-normal text-white">
                            <span>PĐ.</span>
                            <strong>{subtitleEp}</strong>
                        </div>
                    )}     
                    {voicedEp !== undefined && voicedEp > 0 && (
                        <div className="bg-blue-500 px-2 py-1 text-xs font-normal text-white">
                            <span>LT.</span>
                            <strong>{voicedEp}</strong>
                        </div>
                    )}
                    {dubbedEp !== undefined && dubbedEp > 0 && (
                        <div className="bg-[#2ca35d] px-2 py-1 text-xs font-normal text-white">
                            <span>TM.</span>
                            <strong>{dubbedEp}</strong>
                        </div>
                    )}
                </div>   
            ) : (
                <div className="absolute bottom-0 left-4 flex rounded-t-sm overflow-hidden z-10">                
                    <div className="bg-[#5e6070] px-2 py-1 text-xs font-normal text-white">
                        <span>P.Đề</span>
                    </div>
                    <div className="bg-blue-500 px-2 py-1 text-xs font-normal text-white">
                        <span>L.Tiếng</span>
                    </div>
                    <div className="bg-[#2ca35d] px-2 py-1 text-xs font-normal text-white">
                        <span>T.Minh</span>
                    </div>
                </div>   
            )} 
        </>
    )
}

export default MovieBadges;