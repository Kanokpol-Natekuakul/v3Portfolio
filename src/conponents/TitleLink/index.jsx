import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ isHighLight, title, link }) => {

    if (!link) {
        return <div className={`text-primaryContent ${isHighLight ? "text-primaryTitle" : ""} break-words overflow-hidden`}>{title}</div>
    }

    return (
        <div className={`text-primaryContent ${isHighLight ? "text-primaryTitle" : ""} break-words overflow-hidden`}>
            <a href={link} target="_blank" className="break-words">
                {title}
                <FontAwesomeIcon className={`text-xs -rotate-45 duration-300 ease-out ${isHighLight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
    )
}

export default TitleLink;