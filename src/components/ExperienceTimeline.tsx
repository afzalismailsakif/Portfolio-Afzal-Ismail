
const experiences = [
  {
    company: "Staff Asia Ltd (B2B Team)",
    title: "Trainee Team Lead - B2B",
    period: "05/2024 - Present",
    description:
      "Leading and mentoring the B2B team to enhance performance and deliver results. Location: Sylhet, Bangladesh.",
  },
  {
    company: "Staff Asia Ltd (B2B Team)",
    title: "Business Data Analyst",
    period: "09/2023 - 04/2024",
    description:
      "Analyzed business data to support strategy and decision-making for the B2B team. Location: Sylhet, Bangladesh.",
  },
];

const ExperienceTimeline = () => (
  <section id="experience" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
    <ol className="relative border-l-2 border-accent/25">
      {experiences.map((exp, i) => (
        <li key={exp.company + exp.title} className="mb-12 ml-4">
          <div className="absolute w-3 h-3 bg-accent rounded-full -left-1.5 mt-2.5"></div>
          <div className="p-6 bg-card rounded-lg shadow-md">
            <div className="flex justify-between items-center flex-wrap gap-1 mb-2">
              <span className="font-semibold text-primary">{exp.title}</span>
              <span className="text-xs text-muted-foreground">{exp.period}</span>
            </div>
            <div className="text-accent mb-1">{exp.company}</div>
            <div className="text-sm text-muted-foreground">{exp.description}</div>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default ExperienceTimeline;
