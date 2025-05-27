
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 left-0 w-full z-30 bg-background/80 backdrop-blur border-b border-border">
      <nav className="container flex justify-between items-center py-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-accent hover:text-primary transition-colors">My Portfolio</Link>
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className={
                  "hover:text-accent transition-colors text-sm font-semibold" +
                  (pathname === link.href ? " text-accent underline underline-offset-4" : "")
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex md:hidden">
          {/* (Optional) Add mobile menu here */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
