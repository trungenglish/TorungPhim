import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faChevronRight} from "@fortawesome/free-solid-svg-icons";

interface TopicSectionProps {
    topics: {
        id: string;
        name: string;
        bgColor: string;
    }[];
}

const TopicSection = ({topics}: TopicSectionProps) => {
  return (
      <section className="px-5 text-foreground">
          <div className="mb-5">
              <h3 className="text-3xl font-bold ">Bạn đang quan tâm gì?</h3>
          </div>
          <div className="xs:grid xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-4  flex overflow-x-auto no-scrollbar">
            {topics.map((topic) => (
                <div 
                    key={topic.id} 
                    className="xl:pl-6 xl:pr-10 rounded-xl p-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                    style={{ backgroundColor: topic.bgColor }}
                >
                  <div className="flex flex-col justify-between h-full">
                      <div className="font-bold text-2xl">
                          {topic.name}
                      </div>
                      <div className="font-medium items-center text-sm hidden sm:flex">
                          <span>Xem chủ đề</span>
                          <FontAwesomeIcon icon={faAngleRight}/>
                      </div>
                  </div>
              </div>
            ))}
            <div className="bg-gray-600 xl:pl-6 xl:pr-10 rounded-xl p-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <div className="flex flex-col justify-between h-full">
                      <div className="font-bold text-2xl">
                          +4 chủ đề
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default TopicSection
