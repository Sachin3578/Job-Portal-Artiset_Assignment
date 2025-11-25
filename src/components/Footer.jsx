import "./Footer.css";

export default function Footer() {

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-section">
          <h3>JobBridge</h3>
          <p>
            Your trusted platform to explore opportunities and grow your career.  
            Find the job that matches your passion and skills.
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("jobs")}>Jobs</li>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@jobbridge.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Pune, Maharashtra</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 JobBridge. All Rights Reserved.</p>
      </div>

    </footer>
  );
}
