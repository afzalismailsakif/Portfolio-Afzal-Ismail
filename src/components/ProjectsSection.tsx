
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal website built with React and Tailwind CSS.",
    link: "#",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "E-commerce Dashboard",
    description: "Full featured e-commerce dashboard with analytics and admin UI.",
    link: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "AI Chatbot",
    description: "Conversational AI chatbot for support and engagement.",
    link: "#",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
  }
];

const ProjectsSection = () => (
  <section id="projects" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map(project => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-lg overflow-hidden bg-card shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-44 object-cover object-center"
          />
          <div className="p-5">
            <div className="text-lg font-semibold mb-1 text-accent group-hover:underline">{project.title}</div>
            <p className="text-muted-foreground text-sm">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
