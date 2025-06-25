
const RESUME_PDF_LINK = "https://drive.google.com/uc?export=download&id=1107Gk-Nus4mgREKPADpzIZ-LDhU_A5q5";

const Resume = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
    <h2 className="text-3xl font-bold mb-4">Resume</h2>
    <p className="mb-6 text-muted-foreground">Download my latest resume (PDF):</p>
    {RESUME_PDF_LINK ? (
      <a
        href={RESUME_PDF_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="px-7 py-3 bg-accent text-primary font-semibold rounded-lg shadow hover:scale-105 active:scale-95 transition-all duration-200"
        download
      >
        Download Resume
      </a>
    ) : (
      <div className="p-6 bg-card rounded shadow text-center text-muted-foreground">
        Please provide your resume PDF link to enable download.
      </div>
    )}
  </section>
);

export default Resume;
