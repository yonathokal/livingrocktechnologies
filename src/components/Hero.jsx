export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container py-3 py-md-0">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-8 text-center text-lg-start">

            <span className="hero-badge">
              Living Rock Technology
            </span> 

            <h1 className="hero-title mt-3">
              Engineering Reliability <br /> Into Technology
            </h1>

            <p className="hero-subtitle">
              We deliver enterprise-grade solutions in Website Development, IT Operations, Networking, Automation, UI/UX, Cybersecurity, and Digital Transformation.
            </p>

            <div className="hero-actions mt-4 justify-content-center justify-content-lg-start">
              <a href="#contact" className="btn btn-primary-cta">
                Get In Touch
              </a>
              <a href="#services" className="btn btn-outline-cta">
                View Services
              </a>
            </div>

          </div>

          {/* RIGHT EMPTY COLUMN (for future image/illustration) */}
          <div className="col-lg-4 d-none d-lg-block">
            {/* Future illustration / graphic goes here */}
          </div>

        </div>
      </div>
    </section>
  );
}
