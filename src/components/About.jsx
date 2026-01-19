export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="row py-3">
          <div className="col-12 text-center">
            <span className="hero-title">
              Who We Are
            </span> 
          </div>
        </div>

        {/* CONTENT */}
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h2 className="about-title">
              Building Reliable <br className="d-none d-lg-block" />
              Digital Foundations
            </h2>

            <p className="about-text">
              Living Rock Technologies delivers secure, scalable and
              performance-driven IT solutions for startups and enterprises.
              Our focus is on reliability, long-term value, and engineering excellence.
            </p>

            <a href="#contact" className="btn btn-primary-cta mt-3">
              Talk to Our Experts
            </a>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-12 col-lg-6">
            <div className="about-cards text-center text-md-start">
              <div className="about-card">
                10+
                <span>Technologies</span>
              </div>
              <div className="about-card">
                99.9%
                <span>Reliability</span>
              </div>
              <div className="about-card">
                Enterprise
                <span>Solutions</span>
              </div>
              <div className="about-card">
                Long-Term
                <span>Partnerships</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
