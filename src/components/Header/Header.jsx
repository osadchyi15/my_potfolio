import s from "./Header.module.css";
// import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <>
      <header className={s.pageHeader}>
        <a className={s.logoLink} href="#">
          {/* <Logo /> */}
        </a>

        {/* Header navigation */}
        <nav className={s.navigation}>
          <ul className={s.navigationList}>
            <li className={s.navigationItem}>
              <a className={s.navigationLink} href="#">
                Home
              </a>
            </li>
            <li className={s.navigationItem}>
              <a className={s.navigationLink} href="#">
                About me
              </a>
            </li>
            <li className={s.navigationItem}>
              <a className={s.navigationLink} href="#">
                Projects
              </a>
            </li>
            <li className={s.navigationItem}>
              <a className={s.navigationLink} href="#">
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        {/* CV downloading button */}
        <a className={s.downloadCvBtn} download href="">
          Download CV
        </a>
      </header>
    </>
  );
};

export default Header;
