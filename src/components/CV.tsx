interface CVData {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  about: string;
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
  skills: Record<string, string[]>;
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
  skills,
  achievements,
}: CVData) {
  return (
    <div className="cv-container">
      {/* Header Section */}
      <div className="cv-header">
        <h1>{name}</h1>
        <p className="title">{title}</p>
        <div className="contact-info">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
        </div>
        <div className="social-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* Quick Navigation */}
      <nav className="cv-quick-nav">
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#achievements">Achievements</a>
        <a href="#skills">Skills</a>
      </nav>

      {/* Experience Section */}
      <div id="experience" className="cv-section">
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="job">
            <div className="job-header">
              <div>
                <h3 className="job-title">{job.title}</h3>
                <p className="company">{job.company}</p>
              </div>
              <div className="job-meta">
                <span className="date">{job.date}</span>
                <span className="location">{job.location}</span>
              </div>
            </div>
            <ul className="job-description">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div id="education" className="cv-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="degree">
            <div className="degree-header">
              <div>
                <h3 className="degree-title">{edu.degree}</h3>
                <p className="school">{edu.school}</p>
              </div>
              <span className="date">{edu.date}</span>
            </div>
            {edu.achievements.length > 0 && (
              <ul className="achievements">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/*Achievements Section */}
      {achievements && achievements.length > 0 && (
        <div id="achievements" className="cv-section">
          <h2>Achievements</h2>
          <ul className="achievements">
            {achievements.map((achievement, index) => (
              <li key={index}>
                {achievement.url ? (
                  <a href={achievement.url} target="_blank" rel="noopener noreferrer">
                    {achievement.title}
                  </a>
                ) : (
                  achievement.title
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills Section */}
      <div id="skills" className="cv-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {skillList.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
