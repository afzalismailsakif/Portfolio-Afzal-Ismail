
const projects = [
  {
    title: "Online Exam Portal",
    period: "10/2020 - 4/2021",
    details:
      "System built in .Net core MVC allowing teachers to input questions by difficulty. Helps faculties generate exam sets efficiently while maintaining balanced difficulties.",
  },
  {
    title: "Encrypher - An Encryption Decryption Tool",
    period: "1/2019 - 6/2019",
    details:
      "A tool built using .Net that combines several encryption-decryption algorithms in one place to simplify the process.",
  },
  {
    title: "DIU-RE: A Routine Explorer",
    period: "5/2018 - 9/2018",
    details:
      "Android group project for generating student class routines from messy Excel files based on section and batch.",
  },
];

const AcademicProjectsSection = () => (
  <section id="academic-projects" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Academic Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((p) => (
        <div
          key={p.title}
          className="bg-card p-6 rounded-lg shadow-md flex flex-col"
        >
          <span className="font-semibold text-accent mb-1">{p.title}</span>
          <span className="text-xs text-muted-foreground mb-2">{p.period}</span>
          <p className="text-sm text-muted-foreground">{p.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AcademicProjectsSection;
