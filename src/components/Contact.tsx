interface ContactProps {
  email: string;
  message?: string;
}

export default function Contact({ email, message }: ContactProps) {
  return (
    <section className="cv-section contact">
      <h2>Get In Touch</h2>
      {message && <p>{message}</p>}
      <a href={`mailto:${email}`} className="contact-button">
        Contact Me
      </a>
    </section>
  );
}
