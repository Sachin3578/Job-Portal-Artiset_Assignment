import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Find Your Dream Job Today!</h1>
      <p>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
      {/* Search box */}
      <div className="search-box">
        <input type="text" placeholder="Job Title or Company" />
        <select>
          <option value="">Select Location</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
          <option value="chennai">Chennai</option>
        </select>
        <select>
          <option value="">Select Category</option>
          <option value="accounting">Accounting</option>
          <option value="engineering">Engineering</option>
          <option value="pharma">Pharma</option>
          <option value="teaching">Teaching</option>
        </select>
        <button className="search-btn">Search Job</button>
        </div>
      <div className="stats">
        <div className="stat-card">
          <span className="value">25,850</span>
          <span className="label">Jobs</span>
        </div>
        <div className="stat-card">
          <span className="value">10,250</span>
          <span className="label">Candidates</span>
        </div>
        <div className="stat-card">
          <span className="value">18,400</span>
          <span className="label">Companies</span>
        </div>
      </div>
    </section>
  );
}
