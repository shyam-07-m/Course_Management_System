import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./styles.css"; 

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Initialize navigation function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/v1/auth/login", formData)
      .then(response => {
        alert("Login successful!");
        navigate("/courses"); // Redirect user to Courses page
      })
      .catch(error => console.error("Login Error:", error));
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />

        <button type="submit">Login</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={() => navigate("/register")}>Register</button>
      </form>
    </>
  );
};

export default Login;