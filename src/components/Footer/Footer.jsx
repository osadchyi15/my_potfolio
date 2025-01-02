import s from "./Footer.module.css";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={s.pageFooter}>
      <ul className={s.socialNetworksList}>
        <li className={s.socialNetworksItem}>
          <a
            className={s.socialNetworksLink}
            href="https://github.com/osadchyi15"
            target="_blank"
          >
            <FiGithub className={s.socialNetworksImage} />
          </a>
        </li>
        <li className={s.socialNetworksItem}>
          <a
            className={s.socialNetworksLink}
            href="https://www.linkedin.com/in/ievgen-osadchyi"
            target="_blank"
          >
            <FiLinkedin className={s.socialNetworksImage} />
          </a>
        </li>
        <li className={s.socialNetworksItem}>
          <a
            className={s.socialNetworksLink}
            href="mailto:osadchyi15@gmail.com"
            target="_blank"
          >
            <FiMail className={s.socialNetworksImage} />
          </a>
        </li>
      </ul>

      <div className={s.footerLogoDiv}>
        <p className={s.creative}>Creative</p>
        <p className={s.developer}>Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
