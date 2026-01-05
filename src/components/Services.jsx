const services = [
  "Website Development",
  "Technical Support & IT Operations",
  "Automation & System Integration",
  "Networking & Infrastructure",
  "Network Security & Hardening",
  "UI / UX Design",
  "Graphic Designing",
  "Social Media Management",
];

export default function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>

      <div className="card-grid">
        {services.map((item,i) => (
          <div className="card" key={i}>
            <h3>{item}</h3>
            <p>
              Professional and reliable enterprise solutions tailored for businesses and startups.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
