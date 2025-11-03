import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css"; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/auth/register")
      .then(response => setFormData(response.data))
      .catch(error => console.error("Error fetching user:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/v1/auth/register", formData)
      .then(response => alert("Registration successful!"))
      .catch(error => console.error("Registration Error:", error));
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;