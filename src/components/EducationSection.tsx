
const education = [
  {
    school: "Jahangirnagar University",
    degree: "M.Sc in Computer Science",
    period: "GPA: 3.85 / 4.00",
  },
  {
    school: "Daffodil International University",
    degree: "B.Sc in Software Engineering",
    period: "GPA: 3.54 / 4.00",
  },
  {
    school: "BAF Shaheen College Shamshernagar",
    degree: "Higher Secondary School Certificate (HSC), Science",
    period: "GPA: 4.83 / 5.00",
  },
  {
    school: "Kamalgonj Govt. Model High School",
    degree: "Secondary School Certificate (SSC), Science",
    period: "GPA: 5.00 / 5.00",
  },
];

const EducationSection = () => (
  <section id="education" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Education</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {education.map((ed) => (
        <div key={ed.school} className="bg-card p-6 rounded-lg shadow-lg">
          <div className="text-lg font-semibold text-primary mb-2">{ed.school}</div>
          <div className="mb-1">{ed.degree}</div>
          <div className="text-xs text-muted-foreground">{ed.period}</div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
