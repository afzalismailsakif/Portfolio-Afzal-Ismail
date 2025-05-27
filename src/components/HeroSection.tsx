const HeroSection = () => (
  <section
    id="hero"
    className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4 animate-fade-in"
  >
    {/* Profile Image with Status Dot */}
    <div className="relative mb-6 group transition-transform duration-300 hover:scale-105">
      {/* Gradient Border */}
      <div className="rounded-full p-1 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 shadow-lg">
        <img
          src="/image.jpg" // Replace with actual image path
          alt="Md. Afzal Ismail"
          className="w-36 h-36 rounded-full object-cover border-4 border-background transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Status Dot (Pulsing + Static) */}
      <span className="absolute bottom-2 right-2 block w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-ping-slow"></span>
      <span className="absolute bottom-2 right-2 block w-4 h-4 bg-green-500 border-2 border-white rounded-full z-10"></span>

      {/* Optional “Open to Work” Label */}
      <span className="absolute bottom-[-1.5rem] right-0 text-xs text-green-600 font-semibold">
        Open to Work
      </span>
    </div>

    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
      Md. Afzal Ismail
    </h1>

    <h2 className="text-xl md:text-2xl text-accent mb-4">
      Ed-Tech Professional | Corporate Sales | Business Development
    </h2>

    <p className="max-w-2xl text-lg text-muted-foreground mb-6">
      I help businesses to grow. Welcome to my portfolio!
    </p>

    <a
      href="#experience"
      className="inline-block px-6 py-2 mt-2 bg-accent text-primary rounded-lg font-semibold hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200"
    >
      View My Work Experience
    </a>
  </section>
);

export default HeroSection;
