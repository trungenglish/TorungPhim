import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface TopicSectionProps {
    topics: {
        id: string;
        name: string;
        bgColor: string;
    }[];
}

const TopicSection = ({topics}: TopicSectionProps) => {
  return (
    //   <section className="px-5 text-foreground">
    //       <div className="flex mb-5">
    //           <h3 className="text-3xl font-bold ">Bạn đang quan tâm gì?</h3>
    //       </div>
    //       <div className="xs:grid xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-4  flex overflow-x-auto no-scrollbar">
    //         {topics.map((topic) => (
    //             <div 
    //                 key={topic.id} 
    //                 className="xl:pl-6 xl:pr-10 rounded-xl p-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
    //                 style={{ backgroundColor: topic.bgColor }}
    //             >
    //               <div className="flex flex-col justify-between h-full">
    //                   <div className="font-bold text-2xl">
    //                       {topic.name}
    //                   </div>
    //                   <div className="font-medium items-center text-sm hidden sm:flex">
    //                       <span>Xem chủ đề</span>
    //                       <FontAwesomeIcon icon={faAngleRight}/>
    //                   </div>
    //               </div>
    //           </div>
    //         ))}
    //         <div className="bg-gray-600 xl:pl-6 xl:pr-10 rounded-xl p-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
    //               <div className="flex flex-col justify-between h-full">
    //                   <div className="font-bold text-2xl">
    //                       +4 chủ đề
    //                   </div>
    //               </div>
    //           </div>
    //       </div>
    //   </section>
    <section className="relative px-5 py-0 w-full my-0 mx-auto max-w-[1900px] ">
        <div className="relative flex items-center justify-start gap-4 min-h-11 mb-[1.2rem]">
            <h3 className="max-[1599px]:text-[1.8em] leading-[1.4] font-semibold m-0 text-white ">
                Bạn đang quan tâm gì
            </h3>
        </div>
        <div className="grid max-[1599px]:grid-cols-6 max-[1599px]:gap-4 justify-between items-stretch mt-0">
        {topics.map((topic) => (
            <Link href="/" key={topic.id}
                className="relative flex bg-[#282b3a] top-0 py-[1.2rem] pl-6 pr-10 rounded-xl overflow-hidden justify-between">
                <div style={{backgroundColor: topic.bgColor}} 
                    className="absolute inset-0 z-[1] before:content-[''] before:absolute before:inset-0 
                        before:bg-[linear-gradient(-40deg,rgba(255,255,255,0.2),rgba(255,255,255,0)_430%,rgba(255,255,255,0)_0,rgba(255,255,255,0.2))] 
                        before:pointer-events-none after:content-[''] 
                        after:absolute after:inset-0
                        after:[mask-image:linear-gradient(-45deg,black,transparent_40%)]
                        after:bg-[url(https://www.rophim.mx/images/wave.png)]
                        after:bg-no-repeat
                        after:bg-[length:200px_140px]
                        after:bg-[position:100%_100%]
                        after:opacity-30">
                </div>
                <div className="relative z-[3] flex flex-col items-start justify-end shrink-0 max-[1919px]:min-h-[110px] p-0 w-full h-full gap-[0.7rem] ">
                    <div className="max-[1919px]:text-[1.6em] max-[1919px]:leading-[1.3] font-bold text-white line-clamp-2 mb-0">{topic.name}</div>
                    <div>
                        <div className="text-sm p-0 border-none bg-transparent text-white gap-[0.4rem] rounded-[0.3rem] min-h-[30px]
                            font-medium inline-flex items-center justify-center opacity-100 ">
                            <span className="text-sm whitespace-nowrap">Xem chủ đề</span>
                            <FontAwesomeIcon icon={faAngleRight} size="sm"/>
                        </div>
                    </div>
                </div>
            </Link>
            ))}
            <Link href="/" 
                className="relative flex bg-[#282b3a] top-0 rounded-xl overflow-hidden justify-between items-center gap-4 p-4">
                <div style={{backgroundColor: "rgb(46, 50, 69)"}} 
                    className="absolute inset-0 z-[1] before:content-[''] before:absolute before:inset-0 
                        before:bg-[linear-gradient(-40deg,rgba(255,255,255,0.2),rgba(255,255,255,0)_430%,rgba(255,255,255,0)_0,rgba(255,255,255,0.2))] 
                        before:pointer-events-none after:content-[''] 
                        after:absolute after:inset-0
                        after:[mask-image:linear-gradient(-45deg,black,transparent_40%)]
                        after:bg-[url(https://www.rophim.mx/images/wave.png)]
                        after:bg-no-repeat
                        after:bg-[length:200px_140px]
                        after:bg-[position:100%_100%]
                        after:opacity-30">
                </div>
                <div className="p-0 w-full h-full gap-[0.7rem] flex flex-col min-h-auto shrink-0 relative z-[3] items-center justify-center">
                    <div className="font-bold text-white text-lg leading-[1.8] mb-0">
                        +4 chủ đề
                    </div>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default TopicSection
