import "./styles.css";
import { useNavigate } from "react-router-dom"; // Import navigation
import axios from "axios"; // Import axios for API calls
const ReactBasics = () => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    axios.post("http://localhost:3000/api/v1/enrollment", {
      user_id: currentUser.id, // User ID from login
      course_id: 1, // Course ID for React Basics
    })
    .then(response => {
      alert(response.data.message);
      navigate("/courses"); // Redirect to courses
    })
    .catch(error => console.error("Enrollment error:", error));
  };
    
    
  

  return (
    <div className="course-container">
      <h1>React Basics</h1>
      <p className="course-overview">
        <strong>Overview:</strong> Learn the core concepts of React.js.
      </p>

      <h2>What You Will Learn</h2>
      <ul className="course-list">
        <li>Component-based architecture</li>
        <li>State management and props</li>
        <li>Building reusable UI components</li>
      </ul>

      <h2>Prerequisites</h2>
      <p>Basic knowledge of HTML, CSS, and JavaScript.</p>

      <h2>Enrollment Information</h2>
      <p>Duration: 4 weeks | Online | Instructor-led sessions available.</p>

      <button className="enroll-btn" onClick={() => {
    handleEnroll();
    }}>Enroll Now</button>
    </div>
  );
};

export default ReactBasics;