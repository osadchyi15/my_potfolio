import s from "./AboutMe.module.css";
import myPhotoUrl from "../../img/photo.png";

const AboutMe = () => {
  return (
    <div>
      <div className={s.outerCircle}>
        <img
          className={s.mainPhoto}
          src={myPhotoUrl}
          alt="Ievgen Osadchyi photo"
          width="400px"
        />
      </div>
    </div>
  );
};

export default AboutMe;
