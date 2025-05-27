
const achievements = [
  {
    place: "1st Position",
    event: "Winner at Ramadan Quiz Competition",
    org: "Staff Asia Ltd",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Achievements</h2>
    <div className="flex flex-col gap-5 md:flex-row md:gap-8">
      {achievements.map((a, idx) => (
        <div
          key={a.event + idx}
          className="flex flex-col bg-card p-6 rounded-lg shadow-md min-w-[250px]"
        >
          <span className="font-semibold text-accent mb-1">{a.place}</span>
          <span className="mb-1">{a.event}</span>
          <span className="text-sm text-muted-foreground">{a.org}</span>
        </div>
      ))}
    </div>
  </section>
);

export default AchievementsSection;
