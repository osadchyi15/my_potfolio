import s from "./Projects.module.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = () => {
  return (
    <div className={s.totalCard}>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Scrollbar,
          A11y,
          Keyboard,
          Autoplay,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        mousewheel
        centeredSlides={true}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className={s.card}>
            <div className={s.cardImage}>
              <iframe
                src="https://osadchyi15.github.io/portfolio/"
                title="FullStack Developer Portfolio"
                className={s.iframe}
              ></iframe>
            </div>
            <div className={s.cardInfo}>
              <div className={s.cardAbout}>
                <div className={s.cardAboutTitle}>
                  <p>FullStack Developer Portfolio</p>
                  <a
                    href="https://osadchyi15.github.io/portfolio/"
                    target="_blank"
                    title="Developer portfolio"
                  >
                    Link
                  </a>
                </div>
                <p className={s.cardAboutText}>
                  Creating a portfolio prototype that will allow the developer
                  to easily and effectively present their achievements,
                  projects, and skills to their future employer.
                </p>
              </div>
              <div className={s.cardDetails}>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Year</p>
                  <p>2024</p>
                </div>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Set of technologies</p>
                  <p>HTML5, CSS3, JavaScript</p>
                </div>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Role</p>
                  <p>Developer of sections: about me, projects</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.card}>
            <div className={s.cardImage}>
              <iframe
                src="https://goit-react-hw-04-nine-lac.vercel.app/"
                title="Image Finder"
                className={s.iframe}
              ></iframe>
            </div>
            <div className={s.cardInfo}>
              <div className={s.cardAbout}>
                <div className={s.cardAboutTitle}>
                  <p>Image Finder</p>
                  <a
                    href="https://goit-react-hw-04-nine-lac.vercel.app/"
                    target="_blank"
                    title="Image Finder"
                  >
                    Link
                  </a>
                </div>
                <p className={s.cardAboutText}>
                  Our website offers an easy way to search for high-quality
                  images for any need, from personal projects to professional
                  design. Our platform helps you quickly find the best image.
                </p>
              </div>
              <div className={s.cardDetails}>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Year</p>
                  <p>2024</p>
                </div>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Set of technologies</p>
                  <p>HTML5, CSS3, JavaScript, React</p>
                </div>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Role</p>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.card}>
            <div className={s.cardImage}>
              <iframe
                src="https://natatulichka.github.io/DDT/"
                title="WatchCharm"
                className={s.iframe}
              ></iframe>
            </div>
            <div className={s.cardInfo}>
              <div className={s.cardAbout}>
                <div className={s.cardAboutTitle}>
                  <p>WatchCharm</p>
                  <a
                    href="https://natatulichka.github.io/DDT/"
                    title="WatchCharm"
                    target="_blank"
                  >
                    Link
                  </a>
                </div>
                <p className={s.cardAboutText}>
                  Our store offers a wide range of watches from world-renowned
                  brands, combining style, quality, and reliability. Here, you
                  will find models for any occasion.
                </p>
              </div>
              <div className={s.cardDetails}>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Year</p>
                  <p>2024</p>
                </div>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Set of technologies</p>
                  <p>HTML5, CSS3</p>
                </div>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Role</p>
                  <p>Developer of sections: footer, sale</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.card}>
            <div className={s.cardImage}>
              <iframe
                src="https://goit-react-hw-05-azure-sigma.vercel.app"
                title="The Best Movies"
                className={s.iframe}
              ></iframe>
            </div>
            <div className={s.cardInfo}>
              <div className={s.cardAbout}>
                <div className={s.cardAboutTitle}>
                  <p>The Best Movies</p>
                  <a
                    href="https://goit-react-hw-05-azure-sigma.vercel.app"
                    title="The Best Movies"
                    target="_blank"
                  >
                    Link
                  </a>
                </div>
                <p className={s.cardAboutText}>
                  Our website offers an easy way to search for movies. You can
                  find information about the film, its rating, and cast. This
                  will help you make the best choice for your viewing.
                </p>
              </div>
              <div className={s.cardDetails}>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Year</p>
                  <p>2024</p>
                </div>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Set of technologies</p>
                  <p>HTML5, CSS3, JavaScript, React</p>
                </div>
                <div className={s.cardDetailsInfo}>
                  <p className={s.cardAboutDiv}>Role</p>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
