import "./AboutUs.css";
import aboutImg from "../assets/aboutus.jpeg"; 

export default function AboutUs() {
  return (
<section className="about-section" id="about">
  <h2 className="about-title">About Us</h2>
  <div className="about-top">
    <div className="left-text">
      <h2>Your Career Journey Starts Here</h2>
    </div>
    <div className="right-text">
      <p>
        We are committed to connecting talented individuals with the right 
        opportunities. Our platform helps job seekers explore thousands 
        of openings, apply with ease, and build successful careers.
      </p>
      <p>
        Whether you're a fresher or an experienced professional, we aim to make 
        your job search simple, fast, and effective. Your dream job is just a 
        click away — and we're here to guide you every step of the way.
      </p>
    </div>
  </div>
  <div className="about-image">
    <img src={aboutImg} alt="About section" />
  </div>
  <div className="howworks">
    <h2>How it works</h2>
    <p className="subtitle">
      Our process is simple. Follow these four steps and start your career journey today.
    </p>

    <div className="work-cards">

      <div className="work-card">
        <span className="icon">👤</span>
        <h3>Create Account</h3>
        <p>
          Create your free account to get started. It only takes a few seconds.
        </p>
      </div>

      <div className="work-card">
        <span className="icon">📄</span>
        <h3>Upload Resume</h3>
        <p>
          Upload your resume so employers can easily find and shortlist you.
        </p>
      </div>

      <div className="work-card">
        <span className="icon">💼</span>
        <h3>Find Jobs</h3>
        <p>
          Browse thousands of verified job openings across various industries.
        </p>
      </div>

      <div className="work-card">
        <span className="icon">✔️</span>
        <h3>Apply Job</h3>
        <p>
          Apply instantly and get closer to landing your dream career.
        </p>
      </div>

    </div>
  </div>

</section>

  );
}
