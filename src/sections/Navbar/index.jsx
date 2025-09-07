import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Certificate", sectionId: "Certificate-section" },
]

const Navbar = ({ navBarItems, currentSection }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }

  return (
  <div className='hidden lg:flex flex-col font-semibold mt-7'>
      {
        navBarItems.map((e, i) => (
          <div
            key={`nav-${e.sectionId}-${i}`}
            onClick={() => handleClick(e.sectionId)}
            onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
            onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
            className="cursor-pointer flex py-2"
          >
            <div>
              {
                (currentSection === e.sectionId || isMouseEnter[e.title]) ? (
                  <FontAwesomeIcon 
                    className={`new-arrow ${currentSection === e.sectionId ? "text-primaryTitle" : ""}`} icon={faArrowRight}
                  />
                ) : null
              }
            </div>
            <div className={`${currentSection === e.sectionId || isMouseEnter[e.title] ? "translate-x-3" : ""} duration-500 ease-out ml-2`}>{e.title}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Navbar;