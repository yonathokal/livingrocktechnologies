import HeroLogo from "../assets/images/HeroLogo.png";
// import LogoSVG from "./LogoSVG";
import { useEffect } from "react";

export default function Hero() {

  useEffect(() => {
    const el = document.getElementById("typewriter");
    if (!el || !window.Typewriter) return;

    const typewriter = new window.Typewriter(el, { loop: true });

    typewriter
      .typeString("Website Development")
      .pauseFor(1000)
      .deleteAll()
      .typeString("UI / UX Design")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Social Media Management")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Graphic Design")
      .pauseFor(1000)
      .start();
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* LEFT */}
          <div className="col-12 col-lg-7 text-center text-lg-start"
               data-aos="fade-up" data-aos-duration="1000">

            <h1 className="display-5 fw-bold font2 mb-2">
              Engineering Reliability
            </h1>
            <h1 className="display-5 fw-bold font2 mb-3">
              Into Technology
            </h1>

            <h2 className=" font2 mb-3">
              We Develop{" "}
              <span id="typewriter" className=" font1 fw-bold text-dark"></span>
            </h2>

            <p className="hero-subtitle font3 mb-4">
              Enterprise-grade technology solutions for scalable, secure,
              and future-ready businesses.
            </p>

            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
              <a href="#contact" className="btn btn-primary-cta font3">
                Get In Touch
              </a>
              <a href="#services" className="btn btn-outline-cta font3">
                View Services
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5 d-none d-lg-flex justify-content-center"
               data-aos="fade-up" data-aos-duration="2000">
            <img
              src={HeroLogo}
              alt="Technology Illustration"
              className="img-fluid hero-image logo-hover"
              loading="eager"
            />
            {/* <LogoSVG /> */}
          </div>

        </div>
      </div>
    </section>
  );
}
