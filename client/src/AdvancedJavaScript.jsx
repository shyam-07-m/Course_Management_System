import "./styles.css";
import { useNavigate } from "react-router-dom";

const AdvancedJavaScript = () => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    alert("You have successfully enrolled in Advanced JavaScript!");
    navigate("/courses");
  };

  return (
    <div className="course-container">
      <h1>Advanced JavaScript</h1>
      <p><strong>Overview:</strong> Deep dive into JavaScript concepts.</p>

      <h2>What You Will Learn</h2>
      <ul className="course-list">
        <li>ES6+ Features</li>
        <li>Closures and lexical scoping</li>
        <li>Async/Await and Promises</li>
      </ul>

      <h2>Enrollment Information</h2>
      <p>Duration: 6 weeks | Online | Certification provided.</p>

      <button className="enroll-btn" onClick={handleEnroll}>Enroll Now</button>
    </div>
  );
};

export default AdvancedJavaScript;