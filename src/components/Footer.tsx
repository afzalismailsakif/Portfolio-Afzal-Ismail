
import { Github, Linkedin, Youtube } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, url: "https://github.com/afzalismailsakif" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/md-afzal-ismail-9b1266151/" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@sakifschannel" },
];

const Footer = () => (
  <footer className="w-full border-t border-border bg-background/90 mt-12 pb-0">
    <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0 text-xs text-muted-foreground">© {new Date().getFullYear()} Md. Afzal Ismail • 2025</div>
      <div className="flex gap-5">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors"
            aria-label={s.name}
          >
            <s.icon size={24} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
