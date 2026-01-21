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
    <section id="services" className="section bg-soft py-5">
      <div className="container">

        <div className="text-center" data-aos="fade-up">
          <h2 className="section-title font1 ">
            Our Services
          </h2>
          <h4 className="section-subtitle mb-3 font2">
            Technology solutions designed to help you scale
          </h4>
        </div>

        <div className="row g-4">
          {services.map((item, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}
                 data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="service-card h-100">
                <h5 className="font2">{item}</h5>
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
