import { Link } from "react-router-dom";
import "./styles.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Platform!</h1>
      <p>Your one-stop destination for learning and growth. Join us today to explore courses, connect with like-minded individuals, and enhance your skills.</p>

      <nav className="nav-links">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </nav>

      <footer>
        <p>Made with ❤️ by Our Team</p>
      </footer>
    </div>
  );
};

export default Home;