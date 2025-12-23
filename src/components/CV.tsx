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
}

export default function CV({
  name,
  title,
  email,
  phone,
  location,
  githubUrl,
  linkedinUrl,
  about,
  experience,
  education,
  skills,
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

      {/* About Section */}
      <div className="cv-section">
        <h2>About</h2>
        <p>{about}</p>
      </div>

      {/* Experience Section */}
      <div className="cv-section">
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
      <div className="cv-section">
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

      {/* Skills Section */}
      <div className="cv-section">
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
