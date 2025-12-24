import { useState } from 'react';

interface Project {
  image?: string;
  images?: string[];
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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.images && project.images.length > 1 ? (
              <div className="project-images-grid">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    onClick={() => setLightboxImage(img)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
            ) : (
              <img
                src={project.image || project.images?.[0] || ''}
                alt={project.title}
                onClick={() => setLightboxImage(project.image || project.images?.[0] || '')}
                style={{ cursor: 'pointer' }}
              />
            )}
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

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
              ✕
            </button>
            <img src={lightboxImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
}
