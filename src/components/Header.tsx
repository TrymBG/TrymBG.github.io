interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export default function Header({
  name,
  title,
  email,
  phone,
  location,
  linkedin,
  github,
  website,
}: HeaderProps) {
  return (
    <header className="cv-header">
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <div className="contact-info">
        <span>{email}</span>
        {phone && <span>{phone}</span>}
        {location && <span>{location}</span>}
      </div>
      <div className="social-links">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}
      </div>
    </header>
  );
}
