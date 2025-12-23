import "./App.css";
import Home from "./components/Home";

function App() {
  // Replace this data with your own information
  const homeData = {
    name: "Your Name",
    about:
      "Passionate software developer with experience in web development and a love for creating elegant solutions to complex problems. Skilled in modern technologies and always eager to learn new things.",
    githubUrl: "https://github.com/yourusername",
    linkedinUrl: "https://linkedin.com/in/yourprofile",
    email: "your.email@gmail.com",
    // profileImage: "/path-to-your-image.jpg", // Optional: add your profile picture here
  };

  return <Home {...homeData} />;
}

export default App;
