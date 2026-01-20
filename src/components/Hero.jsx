import HeroLogo from "../assets/images/HeroLogo.png";
import { useEffect } from "react";

export default function Hero() {

  useEffect(() => {
    const app = document.getElementById("typewriter");

    if (!app || !window.Typewriter) return;

    const typewriter = new window.Typewriter(app, {
      loop: true,
    });

    typewriter
      .typeString("<strong>Website Devlopment</strong>")
      .pauseFor(1000)
      .deleteAll()
      .typeString("<strong>UI/UX Design</strong>")
      .pauseFor(1000)
      .deleteAll()
      .typeString("<strong>Social Media Mangament</strong>")
      .pauseFor(1000)
      .deleteAll()
      .typeString("<strong>Graphic Design</strong>")
      .pauseFor(1000)
      .start();

  }, []);

  return (
    <section id="home" className="hero-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-7 text-center text-lg-start">

            
            <h1 className="font2">Engineering Reliability</h1>
            <h1 className="font2 pb-3">Into Technology</h1>
            {/* TYPEWRITER HEADING */}
            <h1 className="hero-title font2 fw-bold mb-3">
              We Develop{" "}
              <span className="font1"
                id="typewriter"
                style={{ color: "var(--sky-cyan)" }}
              ></span>
            </h1>

            {/* <h2 className="d-inline-block mb-3">
              Engineering Reliability Into Technology
            </h2> */}

            <p className="hero-subtitle font3 mb-4">
              We deliver enterprise-grade solutions in Website Development,
              IT Operations, Networking, Automation, UI/UX, Cybersecurity,
              and Digital Transformation.
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
          <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
            <img data-aos="fade-up" data-aos-duration="2000"
              src={HeroLogo}
              alt="Living Rock Technology Illustration"
              className="img-fluid hero-image"
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
