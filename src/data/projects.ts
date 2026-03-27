export interface Project {
  image?: string;
  images?: string[];
  title: string;
  description: string;
  links: Array<{ label: string; url: string }>;
}

export const projectsData: Project[] = [
  {
    images: ["/Superpod list.png", "/Superpod graph.png"],
    title: "Superpods",
    description:
      "Research project at the University of Bergen. A brief description of this project — what it does and what technologies were used.",
    links: [
      { label: "GitHub (Private)", url: "https://github.com/TrymBG" },
    ],
  },
  {
    image: "",
    title: "HVL Fire",
    description:
      "Another project description. Explain the key features and your role in developing this project.",
    links: [{ label: "GitHub", url: "https://github.com/TrymBG" }],
  },
  {
    image: "",
    title: "Story Game",
    description:
      "A simple story-driven VR game made in Unity. Created as a school exam project for DAT259 at Western University of Applied Sciences.",
    links: [
      { label: "GitHub", url: "https://github.com/TrymBG/Dat259Project" },
      { label: "Walkthrough", url: "/StorygameWalkthrough.mp4" },
    ],
  },
  {
    image: "/Oblig 2 dat253 last shader picture.png",
    title: "Shader Project",
    description:
      "Graphics programming project — shader development and rendering techniques.",
    links: [{ label: "GitHub", url: "https://github.com/TrymBG" }],
  },
];
