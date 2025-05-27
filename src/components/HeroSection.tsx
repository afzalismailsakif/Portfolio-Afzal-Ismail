
const HeroSection = () => (
  <section id="hero" className="flex flex-col items-center justify-center min-h-[65vh] text-center animate-fade-in">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
      Md. Afzal Ismail
    </h1>
    <h2 className="text-xl md:text-2xl text-accent mb-4">Ed-Tech Professional | Corporate Sales | Business Development</h2>
    <p className="max-w-2xl text-lg text-muted-foreground mb-6">
      I help businesses to grow. Welcome to my portfolio!
    </p>
    <a
      href="#projects"
      className="inline-block px-6 py-2 mt-2 bg-accent text-primary rounded-lg font-semibold hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200"
    >
      View My Work
    </a>
  </section>
);

export default HeroSection;
