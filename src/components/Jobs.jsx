import "./Jobs.css";
import jobLogo from "../assets/logo.png";

import { FaRupeeSign } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

const jobsData = [
  {
    id: 1,
    time: "10 min ago",
    title: "Forward Security Director",
    company: "Facebook",
    category: "Engineering",
    type: "Full time",
    salary: "$40000–$42000",
    location: "Pune",
  },
  {
    id: 2,
    time: "12 min ago",
    title: "Full Stack MERN Developer",
    company: "Artiset pvt ltd",
    category: "Engineer",
    type: "Part time",
    salary: "$28000–$32000",
    location: "Delhi",
  },
  {
    id: 3,
    time: "15 min ago",
    title: "Full Stack MEAN Developer",
    company: "Artiset pvt ltd",
    category: "Testing",
    type: "Full time",
    salary: "$48000–$50000",
    location: "Mumbai",
  },
  {
    id: 4,
    time: "24 min ago",
    title: "Data Analyst Internship",
    company: "Artiset pvt ltd",
    category: "Commerce",
    type: "Full time",
    salary: "$42000–$48000",
    location: "Chennai",
  },
  {
    id: 5,
    time: "26 min ago",
    title: "Cyber Security Developer",
    company: "Artiset pvt ltd",
    category: "Commerce",
    type: "Full time",
    salary: "$38000–$40000",
    location: "Delhi",
  },
];

export default function Jobs() {
  return (
    <section className="jobs-section" id="jobs">
      
      {/* Header */}
      <div className="jobs-header">
        <h2>Recent Jobs Available</h2>
        <a href="#" className="view-all">View all</a>
      </div>

      <p className="subtitle">
        Here are the recent job openings. Click on Apply Now to grab the opportunity!
      </p>

      {/* Job List */}
      <div className="jobs-list">
        {jobsData.map((job) => (
          <div className="job-card" key={job.id}>
            
            <div className="job-left">
              <span className="time-tag">{job.time}</span>

              <div className="job-header">
                <img 
                  src={jobLogo}
                  alt="company logo"
                  className="job-logo"
                />
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <p className="company">{job.company}</p>
                </div>
              </div>

              {/* Job details icons */}
              <div className="job-details">
                <span><BiSolidCategory className="job-icon" /> {job.category}</span>
                <span><IoIosTime className="job-icon" /> {job.type}</span>
                <span><FaRupeeSign className="job-icon" /> {job.salary}</span>
                <span><FaLocationDot className="job-icon" /> {job.location}</span>
              </div>
            </div>

            <div className="job-right">
              <button className="details-btn">Apply Now</button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
