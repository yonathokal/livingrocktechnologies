const services = [
  "Website Development",
  "IT Support & Operations",
  "Automation & Integration",
  "Networking & Infrastructure",
  "Cybersecurity Solutions",
  "UI / UX Design",
  "Graphic Designing",
  "Social Media Management",
];

export default function Services() {
  return (
    <section id="services" className="section bg-soft">
      <div className="container">

        <div className="section-head text-center">
          <h2 className="hero-title fs-1 font1"> Our Services </h2>
          <p className="section-subtitle">
            Technology solutions designed to help you scale
          </p>
        </div>

        <div className="row g-4 mt-4">
          {services.map((item, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="service-card">
                <h5>{item}</h5>
                <p>
                  Reliable and secure enterprise-level solutions
                  designed for long-term growth.
                </p>
                <a href="#contact" className="btn-card">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
