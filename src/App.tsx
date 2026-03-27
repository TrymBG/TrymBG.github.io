import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import { homeData, cvData } from "./data/cv";
import { projectsData } from "./data/projects";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home {...homeData} />} />
        <Route path="/cv" element={<CV {...cvData} />} />
        <Route path="/projects" element={<Projects projects={projectsData} />} />
        <Route path="*" element={<Home {...homeData} />} />
      </Routes>
    </>
  );
}

export default App;
