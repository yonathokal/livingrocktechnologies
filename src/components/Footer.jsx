export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="footer-main">
          © {new Date().getFullYear()} Living Rock Technologies
        </p>
        <p className="footer-sub">
          Reliable • Secure • Scalable Technology
        </p>
      </div>
    </footer>
  );
}
