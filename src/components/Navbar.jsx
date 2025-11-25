import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JobBridge</div>
        <ul className="nav-links">
          <li onClick={() => {document.getElementById("home").scrollIntoView({behavior: "smooth",block: "start",});}}> Home </li>
          <li onClick={() => document.getElementById("jobs").scrollIntoView({ behavior: "smooth" })}> Jobs </li>
          <li onClick={() => {document.getElementById("about").scrollIntoView({ behavior: "smooth",block: "start"});}}>About Us</li>
          <li onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth",block: "start"})}>Contact Us</li>
        </ul>
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}
