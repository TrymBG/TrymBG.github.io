interface AboutProps {
  summary: string;
}

export default function About({ summary }: AboutProps) {
  return (
    <section className="cv-section about">
      <h2>About Me</h2>
      <p>{summary}</p>
    </section>
  );
}
