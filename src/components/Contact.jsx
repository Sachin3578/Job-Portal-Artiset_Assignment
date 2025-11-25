import "./Contact.css";
import { IoIosCall, IoIosTime } from "react-icons/io";
import { CiLocationOn, CiMail } from "react-icons/ci";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      {/* Title */}
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>You Will Grow, You Will Succeed. We Promise That</h2>
          <p className="contact-desc">
            We are committed to supporting your career growth by offering guidance,
            opportunities, and resources that help you achieve success.  
            Feel free to reach out — we're here to help you every step of the way.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <IoIosCall className="icon" />
              <div>
                <h4>Call for Inquiry</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-card">
              <CiMail className="icon" />
              <div>
                <h4>Send us Email</h4>
                <p>support@jobbridge.com</p>
              </div>
            </div>

            <div className="info-card">
              <IoIosTime className="icon" />
              <div>
                <h4>Opening Hours</h4>
                <p>Mon - Fri: 10AM – 10PM</p>
              </div>
            </div>

            <div className="info-card">
              <CiLocationOn className="icon" />
              <div>
                <h4>Office</h4>
                <p>VIIT College, Pune, Maharashtra</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h3>Contact Info</h3>

          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Message" rows="5" required></textarea>

            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* MAP */}
      <div className="map-container">
        <iframe
          title="JobBridge Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2664920417073!2d73.85067597478645!3d18.56278808253801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10edf3c10c3%3A0x10c8ab3c18e3d790!2sVishwakarma%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
}
