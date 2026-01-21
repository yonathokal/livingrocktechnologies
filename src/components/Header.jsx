export default function Header() {
  return (
    <header className="site-header" data-aos="fade-down" data-aos-duration="1200">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">

          <a className="navbar-brand font1 fw-bold" href="#home">
            <span className="d-lg-none">L-R Technologies</span>
            <span className="d-none d-lg-inline">Living Rock Technologies</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

              <li className="nav-item">
                <a className="nav-link font2" href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link font2" href="#services">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link font2" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="btn btn-header-cta font2 ms-lg-3" href="#contact">
                  Contact
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
