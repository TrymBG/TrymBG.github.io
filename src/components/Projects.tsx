interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="cv-section projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
