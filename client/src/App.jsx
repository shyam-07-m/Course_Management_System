import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Courses from "./Courses";
import ReactBasics from "./ReactBasics";
import AdvancedJavaScript from "./AdvancedJavaScript";
import NodeJsBackend from "./NodeJsBackend";


<Routes>
<Route path="/" element={<Courses />} />
        

</Routes>
function App() {
  
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>   

      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/ReactBasics" element={<ReactBasics />} />
        <Route path="/AdvancedJavaScript" element={<AdvancedJavaScript />} />
        <Route path="/NodeJsBackend" element={<NodeJsBackend />} />
      </Routes>
    </Router>
  );
}

export default App;