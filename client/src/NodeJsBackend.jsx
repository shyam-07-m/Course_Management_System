import "./styles.css";
import { useNavigate } from "react-router-dom";

const NodeJsBackend = () => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    alert("You have successfully enrolled in Node.js Backend Development!");
    navigate("/courses");
  };

  return (
    <div className="course-container">
      <h1>Node.js Backend Development</h1>
      <p><strong>Overview:</strong> Learn to build REST APIs with Node.js and Express.js.</p>

      <h2>What You Will Learn</h2>
      <ul className="course-list">
        <li>Setting up Node.js projects</li>
        <li>Working with Express.js</li>
        <li>Database integration using MySQL and MongoDB</li>
      </ul>

      <h2>Enrollment Information</h2>
      <p>Duration: 8 weeks | Online | Live mentorship sessions available.</p>

      <button className="enroll-btn" onClick={handleEnroll}>Enroll Now</button>
    </div>
  );
};

export default NodeJsBackend;