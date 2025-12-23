interface HomeProps {
  profileImage?: string;
  name: string;
  about: string;
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

export default function Home({
  profileImage,
  name,
  about,
  githubUrl,
  linkedinUrl,
  email,
}: HomeProps) {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-name">{name}</h1>

        <div className="profile-picture">
          {profileImage ? (
            <img src={profileImage} alt={name} />
          ) : (
            <div className="profile-placeholder">
              {name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
          )}
        </div>

        <div className="about-section">
          <p>{about}</p>
        </div>

        <div className="social-links-bottom">
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
          {email && (
            <a href={`mailto:${email}`}>
              {email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
