import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cv' | 'projects'>('home');

  // Replace this data with your own information
  const homeData = {
    name: "Trym Birkelund Gallefoss",
    about:
      "Currently studying software development at the University of Bergen and working as a research assistant.",
    githubUrl: "https://github.com/TrymBG",
    linkedinUrl: "https://www.linkedin.com/in/trym-birkelund-gallefoss-3b627816a/",
    email: "trymgall@gmail.com",
    profileImage: "/Cv-Test.jpg",
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
        title: "Research Assistant",
        company: "University of Bergen",
        date: "August 2025 - Present",
        location: "Bergen, Norway",
        description: [
          "Working on Superpods"
          
        ]
      },

      {
        title: "Research Assistant",
        company: "Western university of Applied Sciences",
        date: "August 2024 - December 2024",
        location: "Bergen, Norway",
        description: [
          "VR development and research"
          
        ]
      },

      

      {
        title: "School Supervisor",
        company: "Western university of Applied Sciences",
        date: "August 2022 - June 2024",
        location: "Bergen, Norway",
        description: [
          "Simple maintenance at school premises"
          
        ]
      },

      {
        title: "Ski Instructor",
        company: "Skimore",
        date: "December 2020 - May 2021",
        location: "Oslo, Norway",
        description: [
          "Helping people of all ages and skill levels improve their skiing abilities (Mostly children)"

          
        ]
      },

      {
        title: "Compulsory military service - Weapons technician",
        company: "Norwegian Armed Forces - Coastguard Vessel KV Nordkapp",
        date: "January 2019 - June 2020",
        location: "Ramsund, Norway",
        description: [
          "Maintained and operated weapon systems on board the Coastguard Vessel KV Nordkapp",
          "Side roles included Smoke diver, Flight deck crew and lookout"
          
        ]
      },


    ],
    education: [

      {
        degree: "Master's Degree in Software Development",
        school: "Western university of Applied Sciences/University of Bergen",
        date: "January 2025 - present (Finished by June 2026)",
        achievements: [
          
          
        ]
      },


      {
        degree: "Bachelor's Degree in computer engineering",
        school: "Western university of Applied Sciences",
        date: "2021 - 2024",
        achievements: [
          "Focus on web development and software engineering",
          
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

  const projectsData = [
    {
      images: [
        "/Superpod list.png",
        "/Superpod graph.png"
      ],
      title: "Superpods",
      description: "A brief description of this project. This is where you explain what the project does and what technologies were used.",
      links: [
        { label: "GitHub Private", url: "https://github.com/TrymBG" },
        { label: "Live Demo", url: "#" }
      ]
    },
    {
      image: "https://via.placeholder.com/600x400/2563eb/ffffff?text=Project+2",
      title: "HVL Fire",
      description: "Another project description. Explain the key features and your role in developing this project.",
      links: [
        { label: "GitHub", url: "https://github.com/TrymBG" }
      ]
    },
    {
      image: "https://via.placeholder.com/600x400/2563eb/ffffff?text=Project+3",
      title: "Story Game",
      description: "A simple story driven VR game made in Unity. The game is made as a school project for DAT253 at Western University of Applied Sciences.",
      links: [
        { label: "GitHub", url: "https://github.com/TrymBG/Dat259Project" },
        { label: "Live Demo", url: "/StorygameWalkthrough.mp4" }
      ]
    },
    {
      image: "/Oblig 2 dat253 last shader picture.png",
      title: "Shader Project",
      description: "Fourth project description. Describe the problem it solves and the impact it has.",
      links: [
        { label: "Github", url: "https://github.com/TrymBG" }
      ]
    }
  ];

  return (
    <>
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'home' ? (
        <Home {...homeData} />
      ) : currentPage === 'cv' ? (
        <CV {...cvData} />
      ) : (
        <Projects projects={projectsData} />
      )}
    </>
  );
}

export default App;
