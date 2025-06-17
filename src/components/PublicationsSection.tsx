const publications = [
  {
    title:
      "Study on the Analysis and Prediction of Drug Addiction among University Students of Bangladesh Using Machine Learning",
    authors: "Md. Afzal Ismail, Ashraful Islam",
    venue:
      "Proceedings of the 2nd International Conference on Big Data, IoT and Machine Learning",
    year: "2023",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-8937-9_13", // Replace with actual paper link
  },
  {
    title:
      "An Automated Detection System of Cross Site Request Forgery (CSRF) Vulnerability in Web Applications",
    authors: "Md. Afzal Ismail, Md. Maruf Hassan",
    venue: "IJISRT, Volume 6 - 2021, Issue 10 October",
    year: "2021",
    link: "https://ijisrt.com/an-automated-detection-system-of-cross-site-request-forgerycsrf-vulnerability-in-web-applications", // Replace with actual paper link
  },
];

const PublicationsSection = () => (
  <section id="publications" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Publications</h2>
    <div className="space-y-6">
      {publications.map((pub) => (
        <div
          key={pub.title}
          className="bg-card p-6 rounded-lg shadow-md flex flex-col gap-1"
        >
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:underline"
          >
            {pub.title}
          </a>
          <div className="text-sm font-medium">{pub.authors}</div>
          <div className="text-sm text-muted-foreground">{pub.venue}</div>
          <div className="text-xs text-muted-foreground">{pub.year}</div>
        </div>
      ))}
    </div>
  </section>
);

export default PublicationsSection;
