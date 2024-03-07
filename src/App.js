import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Experience from "./pages/Experience.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import ProjectDisplay from "./pages/ProjectDisplay.js";
import Events from "./pages/Events.js";
import EventDisplay from "./pages/EventDisplay.js";
import Interests from "./pages/Interests.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/event/:id" element={<EventDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/events" element={<Events />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
