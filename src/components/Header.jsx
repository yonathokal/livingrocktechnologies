export default function Header() {
  return (
    <header className="site-header header" data-aos="fade-up" data-aos-duration="1500">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <a className="navbar-brand fs-md-3" href="#home">
            <span className="d-md-none font1">L-R Technologies</span> 
            <span className="d-none d-md-block font1">Living Rock Technologies </span>
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
            <ul className="navbar-nav ms-auto align-items-lg-center">
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
                <a className="btn btn-header-cta font2" href="#contact">
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
