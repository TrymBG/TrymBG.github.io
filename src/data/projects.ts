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
      "Segmented podcast search with list and graph visualization.",
    links: [
      { label: "GitHub (Private)", url: "https://github.com/TrymBG" },
    ],
  },
  {
    image: "",
    title: "HVL Fire",
    description:
      "VR fire evacuation simulation built in Unity.",
    links: [{ label: "GitHub", url: "https://github.com/TrymBG" }],
  },
  {
    image: "/Cabin.png",
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
