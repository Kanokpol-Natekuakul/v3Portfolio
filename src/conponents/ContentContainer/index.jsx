import { useEffect, useState } from "react";
import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
  onInitial,
  title: sectionTitle = "",
  data = [],
}) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const SECTION_ID = `${sectionTitle}-section`;

  useEffect(() => {
    onInitial(SECTION_ID);
  }, [])

  return (
    <div id={SECTION_ID} className="scroll-m-14">
      <div className='text-primaryAccent font-medium px-2'>{sectionTitle}</div>
      {
        data.map(({
          date = "",
          title = "",
          link = "",
          materials = [],
          descriptions = [],
          skills = [],
          picture = "",
        }, index) => (
          <div
            key={`${SECTION_ID}-${index}`}
            className={`grid grid-cols-1 gap-4 sm:grid-cols-[30%_70%] lg:grid-cols-[25%_75%] rounded-md px-2 py-6 transition-al ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBase" : ""}`}
            onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
            onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
          >
            <div className="sm:pr-4">
              <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
              <Picture picture={picture} title={title} />
            </div>

            <div className="grid gap-y-4 pr-2 sm:pr-4">
              <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
              {
                materials.length > 0 ?
                  < div className="flex flex-wrap gap-4 text-xl items-center">
                    {
                      materials.map((e, i) => (
                        <Material key={`material-${i}`} icon={e.type} link={e.link} />
                      ))
                    }
                  </div>
                  : null
              }
              {
                descriptions.map((e, i) => (
                  <Description key={`description-${i}`} description={e} />
                ))
              }
              {
                skills.map((e, i) => (
                  <div key={`skill-${i}`} className={"text-white "}>
                    <Tech isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div >
  )
}

export default ContentContainer;