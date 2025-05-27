
const publications = [
  {
    title:
      "Study on the Analysis and Prediction of Drug Addiction among University Students of Bangladesh Using Machine Learning",
    authors: "Md. Afzal Ismail, Ashraful Islam",
    venue:
      "Proceedings of the 2nd International Conference on Big Data, IoT and Machine Learning",
    year: "2023",
  },
  {
    title:
      "An Automated Detection System of Cross Site Request Forgery (CSRF) Vulnerability in Web Applications",
    authors: "Md. Afzal Ismail, Md. Maruf Hassan",
    venue: "IJISRT, Volume 6 - 2021, Issue 10 October",
    year: "2021",
  },
];

const PublicationsSection = () => (
  <section id="publications" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Publications</h2>
    <div className="space-y-6">
      {publications.map((pub, i) => (
        <div
          key={pub.title}
          className="bg-card p-6 rounded-lg shadow-md flex flex-col gap-1"
        >
          <div className="font-semibold text-accent">{pub.title}</div>
          <div className="text-sm font-medium">{pub.authors}</div>
          <div className="text-sm text-muted-foreground">{pub.venue}</div>
          <div className="text-xs text-muted-foreground">{pub.year}</div>
        </div>
      ))}
    </div>
  </section>
);

export default PublicationsSection;
