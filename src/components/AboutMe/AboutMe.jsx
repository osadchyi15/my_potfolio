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
import s from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={s.aboutMe}>
      <div className={s.aboutMeLeft}>
        <div className={s.aboutMeHi}>
          <p className={s.aboutMeLeftIAm}>Hy! I am</p>
          <div className={s.aboutMeLeftIO}>
            <p>Ievgen </p>
            <p> Osadchyi.</p>
          </div>
        </div>
        <div className={s.aboutMeLeftExperience}>
          <p className={s.aboutMeLeftNumber}>01</p>
          <div className={s.aboutMeLeftYears}>
            <p>year</p>
            <p>experience</p>
          </div>
        </div>
      </div>
      <div className={s.aboutMeCenter}>Сhangeable components</div>
      <div className={s.aboutMeRight}>
        <div className={s.aboutMeRightText}>
          <p>I design beautifully simple things,</p>
          <p>and I love what I do.</p>
        </div>
        <div className={s.aboutMeRightSkills}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            title="JavaScript"
          >
            <RiJavascriptLine className={s.aboutMeRightSkillsOrange} />
          </a>

          <a
            href=" https://www.typescriptlang.org/"
            target="_blank"
            title="TypeScript"
          >
            <TbBrandTypescript className={s.aboutMeRightSkillsBlue} />
          </a>

          <a href="https://react.dev/" target="_blank" title="React">
            <RiReactjsLine className={s.aboutMeRightSkillsOrange} />
          </a>

          <a href="https://nodejs.org " target="_blank" title="Node.JS">
            <RiNodejsLine className={s.aboutMeRightSkillsBlue} />
          </a>

          <a
            href="https://lenguajehtml.com/html/"
            target="_blank"
            title="HTML5"
          >
            <RiHtml5Line className={s.aboutMeRightSkillsBlue} />
          </a>

          <a
            href="EQCLfvbkTrdUJ1wfyNI9uOdcK30z1wbWWX060mrXBNwp2Tse "
            target="_blank"
            title="CSS3"
          >
            <RiCss3Fill className={s.aboutMeRightSkillsOrange} />
          </a>

          <a
            href="https://www.mongodb.com/docs/"
            target="_blank"
            title="MongoDB"
          >
            <TbBrandMongodb className={s.aboutMeRightSkillsBlue} />
          </a>

          <a href="https://redux.js.org/ " target="_blank" title="Redux">
            <TbBrandRedux className={s.aboutMeRightSkillsOrange} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
