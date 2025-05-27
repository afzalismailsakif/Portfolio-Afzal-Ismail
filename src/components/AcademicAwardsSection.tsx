
const awards = [
  {
    title:
      "Talent Pool (2008) DPE Govt. Primary School Scholarship",
  },
  {
    title:
      "Chevron Scholarship (2012-2014) for brilliant result in Secondary School.",
  },
];

const AcademicAwardsSection = () => (
  <section id="academic-awards" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Academic Awards</h2>
    <ul className="list-disc ml-6 space-y-3 text-accent">
      {awards.map((award) => (
        <li key={award.title} className="bg-card rounded-lg p-3 shadow">
          <span>{award.title}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default AcademicAwardsSection;
