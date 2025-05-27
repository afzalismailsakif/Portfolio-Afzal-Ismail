
const highlights = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Service Client", value: "11" },
  { label: "Awards", value: "1" }
];

const HighlightsSection = () => (
  <section className="container animate-fade-in-up">
    <div className="flex flex-wrap justify-center gap-8">
      {highlights.map(item => (
        <div key={item.label} className="flex flex-col items-center bg-secondary px-7 py-5 rounded-lg shadow ring-1 ring-border min-w-[135px]">
          <span className="text-2xl md:text-3xl font-bold text-accent mb-1">{item.value}</span>
          <span className="text-sm text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default HighlightsSection;
