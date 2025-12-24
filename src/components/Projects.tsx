interface Project {
  image: string;
  title: string;
  description: string;
  links: Array<{
    label: string;
    url: string;
  }>;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
