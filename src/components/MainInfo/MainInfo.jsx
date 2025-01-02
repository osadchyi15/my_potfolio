import {
  RiHtml5Line,
  RiJavascriptLine,
  RiCss3Fill,
  RiReactjsLine,
  RiNodejsLine,
} from "react-icons/ri";
import {
  TbBrandRedux,
  TbBrandMongodb,
  TbBrandTypescript,
} from "react-icons/tb";
import s from "./MainInfo.module.css";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";

const MainInfo = () => {
  return (
    <div className={s.main}>
      <div className={s.mainLeft}>
        <div className={s.mainHi}>
          <p className={s.mainLeftIAm}>Hy! I am</p>
          <div className={s.mainLeftIO}>
            <p>Ievgen </p>
            <p> Osadchyi.</p>
          </div>
        </div>
        <div className={s.mainLeftExperience}>
          <p className={s.mainLeftNumber}>01</p>
          <div className={s.mainLeftYears}>
            <p>year</p>
            <p>experience</p>
          </div>
        </div>
      </div>
      <div className={s.mainCenter}>
        <Projects />
      </div>
      <div className={s.mainRight}>
        <div className={s.mainRightText}>
          <p>I design beautifully </p> <p>simple things,</p>
          <p>and I love what I do.</p>
        </div>
        <div className={s.mainRightSkills}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            title="JavaScript"
          >
            <RiJavascriptLine className={s.mainRightSkillsOrange} />
          </a>

          <a
            href=" https://www.typescriptlang.org/"
            target="_blank"
            title="TypeScript"
          >
            <TbBrandTypescript className={s.mainRightSkillsBlue} />
          </a>

          <a href="https://react.dev/" target="_blank" title="React">
            <RiReactjsLine className={s.mainRightSkillsOrange} />
          </a>

          <a href="https://nodejs.org " target="_blank" title="Node.JS">
            <RiNodejsLine className={s.mainRightSkillsBlue} />
          </a>

          <a
            href="https://lenguajehtml.com/html/"
            target="_blank"
            title="HTML5"
          >
            <RiHtml5Line className={s.mainRightSkillsBlue} />
          </a>

          <a
            href="EQCLfvbkTrdUJ1wfyNI9uOdcK30z1wbWWX060mrXBNwp2Tse "
            target="_blank"
            title="CSS3"
          >
            <RiCss3Fill className={s.mainRightSkillsOrange} />
          </a>

          <a
            href="https://www.mongodb.com/docs/"
            target="_blank"
            title="MongoDB"
          >
            <TbBrandMongodb className={s.mainRightSkillsBlue} />
          </a>

          <a href="https://redux.js.org/ " target="_blank" title="Redux">
            <TbBrandRedux className={s.mainRightSkillsOrange} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
