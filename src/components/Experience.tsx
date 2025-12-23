interface Job {
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface ExperienceProps {
  jobs: Job[];
}

export default function Experience({ jobs }: ExperienceProps) {
  return (
    <section className="cv-section experience">
      <h2>Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <div>
              <h3>{job.position}</h3>
              <p className="company">{job.company}</p>
            </div>
            <div className="job-meta">
              <p className="date">
                {job.startDate} - {job.endDate}
              </p>
              {job.location && <p className="location">{job.location}</p>}
            </div>
          </div>
          <ul className="job-description">
            {job.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
