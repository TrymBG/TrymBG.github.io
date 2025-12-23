import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import CV from "./components/CV";
import Navigation from "./components/Navigation";

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cv'>('home');

  // Replace this data with your own information
  const homeData = {
    name: "Trym Birkelund Gallefoss",
    about:
      "Currently studying software development at the University of Bergen and working as a research assistant.",
    githubUrl: "https://github.com/TrymBG",
    linkedinUrl: "https://www.linkedin.com/in/trym-birkelund-gallefoss-3b627816a/",
    email: "trymgall@gmail.com",
    // profileImage: "/path-to-your-image.jpg", // Optional: add your profile picture here
  };

  const cvData = {
    name: "Trym Birkelund Gallefoss",
    title: "Software Developer",
    email: "trymgall@gmail.com",
    phone: "+47 941 70 829",
    location: "Bergen, Norway",
    githubUrl: "https://github.com/TrymBG",
    linkedinUrl: "https://www.linkedin.com/in/trym-birkelund-gallefoss-3b627816a/",
    about: "Currently studying software development at the University of Bergen and working as a research assistant.",
    experience: [
      {
        title: "Research Assistant",
        company: "University of Bergen",
        date: "August 2025 - Present",
        location: "Bergen, Norway",
        description: [
          "Conducting research in software development and computer science",
          "Collaborating with professors and fellow researchers on various projects",
          "Contributing to academic publications and research papers"
        ]
      },
      {
        title: "Software Developer Intern",
        company: "Tech Company",
        date: "Summer 2022",
        location: "Oslo, Norway",
        description: [
          "Developed web applications using modern frameworks",
          "Worked in an agile development environment",
          "Participated in code reviews and team meetings"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor's Degree in computer engineering",
        school: "Western university of Applied Sciences",
        date: "2021 - 2024",
        achievements: [
          "Focus on web development and software engineering",
          "Strong academic performance",
          "Active participation in student projects"
        ]
      }
    ],
    skills: {
      "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java"],
      "Web Technologies": ["React", "HTML", "CSS", "Node.js"],
      "Tools & Platforms": ["Git", "GitHub", "VS Code", "Docker"],
      "Other Skills": ["Problem Solving", "Team Collaboration", "Agile Development"]
    }
  };

  return (
    <>
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'home' ? (
        <Home {...homeData} />
      ) : (
        <CV {...cvData} />
      )}
    </>
  );
}

export default App;
