
const skills = [
  "Business Development", "Corporate Sales & Strategy", "Lead Generation", "Email Campaign & Automation", "Procurement Process", "e-Tender", "Programming Language: C", "Java", ".Net", "Python", ".Net Core", "Basic JS",
  "SQL Server", "MySql", "Git", "MS Office" , "Basic Photoshop" , "Basic Latex" , "GoHighLevel CRM" , "CRM Integration & Management"
];

const SkillsSection = () => (
  <section id="skills" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {skills.map(skill => (
        <span key={skill} className="px-4 py-2 rounded-full bg-secondary text-accent-foreground font-medium shadow hover:scale-105 transition-transform duration-200">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default SkillsSection;
