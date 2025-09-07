import { faFacebook, faGithub, faInstagram, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
    <div className='flex items-end gap-4 text-2xl'>
            <a href="https://github.com/Kanokpol-Natekuakul">
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} /></a>
            <a href="https://web.facebook.com/kanokpolpol">
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faFacebook} /></a>
            <a href="https://www.instagram.com/pol_knp_/">
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/kanokpol-natekuakul/">
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin} /></a>
        </div>
    )
}

export default Contact;