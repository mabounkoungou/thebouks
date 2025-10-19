import {
  faFigma,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faGithub, link: "https://github.com/mabounkoungou" },
  { icon: faFigma, link: "https://www.figma.com/files/team/1452585497457174406/" },
  { icon: faWhatsapp, link: "https://wa.link/68szvp" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/muhammed-al-jabbar-08b089238" },

];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
