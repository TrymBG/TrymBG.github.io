interface CVData {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  experience: Array<{
    title: string;
    company: string;
    date: string;
    location: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    date: string;
    achievements: string[];
  }>;
  achievements?: Array<{
    title: string;
    url?: string;
  }>;
}

export default function CV({
  name,
  title,
  email,
  phone,
  location,
  githubUrl,
  linkedinUrl,
  experience,
  education,
  achievements,
}: CVData) {
  return (
    <div className="cv-container">

      <div className="cv-header">
        <h1>{name}</h1>
        <p className="cv-title">{title}</p>
        <div className="cv-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </div>
      </div>

      <section className="cv-section">
        <h2>Experience</h2>
        <div className="cv-list">
          {experience.map((job, i) => (
            <div key={i} className="cv-item">
              <div className="cv-item-header">
                <div>
                  <h3>{job.title}</h3>
                  <span className="cv-org">{job.company}</span>
                </div>
                <div className="cv-item-meta">
                  <span className="cv-date">{job.date}</span>
                  <span className="cv-location">{job.location}</span>
                </div>
              </div>
              {job.description.length > 0 && (
                <div className="cv-item-body">
                  {job.description.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-list">
          {education.map((edu, i) => (
            <div key={i} className="cv-item">
              <div className="cv-item-header">
                <div>
                  <h3>{edu.degree}</h3>
                  <span className="cv-org">{edu.school}</span>
                </div>
                <span className="cv-date">{edu.date}</span>
              </div>
              {edu.achievements.length > 0 && (
                <div className="cv-item-body">
                  {edu.achievements.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {achievements && achievements.length > 0 && (
        <section className="cv-section">
          <h2>Achievements</h2>
          <div className="cv-list">
            {achievements.map((a, i) => (
              <div key={i} className="cv-item cv-achievement">
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a>
                ) : (
                  <span>{a.title}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
