interface Degree {
  school: string;
  degree: string;
  field: string;
  location?: string;
  startDate: string;
  endDate: string;
  achievements?: string[];
}

interface EducationProps {
  degrees: Degree[];
}

export default function Education({ degrees }: EducationProps) {
  return (
    <section className="cv-section education">
      <h2>Education</h2>
      {degrees.map((degree, index) => (
        <div key={index} className="degree">
          <div className="degree-header">
            <div>
              <h3>
                {degree.degree} in {degree.field}
              </h3>
              <p className="school">{degree.school}</p>
            </div>
            <div className="degree-meta">
              <p className="date">
                {degree.startDate} - {degree.endDate}
              </p>
              {degree.location && <p className="location">{degree.location}</p>}
            </div>
          </div>
          {degree.achievements && degree.achievements.length > 0 && (
            <ul className="achievements">
              {degree.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
