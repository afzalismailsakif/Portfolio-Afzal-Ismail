
const trainings = [
  {
    title: "Introduction to Cyber Security (CISCO)",
    period: "04/2020",
  },
  {
    title: "Graphics Design (LEDP)",
    period: "",
  },
];

const TrainingSection = () => (
  <section id="training" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Training</h2>
    <div className="flex flex-col gap-5 md:flex-row md:gap-8">
      {trainings.map((t) => (
        <div
          key={t.title}
          className="flex flex-col bg-card p-6 rounded-lg shadow-md min-w-[230px]"
        >
          <span className="font-semibold text-primary mb-1">{t.title}</span>
          <span className="text-sm text-muted-foreground">
            {t.period}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default TrainingSection;
