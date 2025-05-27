import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "AI in Lead Generation",
    date: "2025-05-27",
    summary:
      "Learn about the facts how AI can help professionals with lead generation process",
    link: "/blogs/ai-in-lead-generation",
  },
  {
    title: "Understanding Machine Learning Basics",
    date: "2024-04-18",
    summary:
      "This article covers the fundamental concepts that every ML beginner should understand before jumping into advanced topics.",
    link: "/blogs/understanding-ml-basics",
  },
  {
    title: "Importance of CyberSecurity",
    date: "2024-05-26",
    summary:
      "This article covers why cybersecurity is important in this digital era",
    link: "/blogs/cybersecurity-importance",
  },
];

const BlogSection = () => (
  <section id="blog" className="container animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-8">Blog</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {blogs.map((blog, idx) => {
        const isFunctionalBlog =
          blog.title === "Understanding Machine Learning Basics" &&
          blog.link.startsWith("/");

        const CardContent = (
          <div className="group block rounded-lg overflow-hidden bg-card shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent p-5 flex flex-col h-full">
            <div className="text-lg font-semibold mb-1 text-accent group-hover:underline">
              {blog.title}
            </div>
            <div className="text-xs text-muted-foreground mb-2">
              {blog.date}
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              {blog.summary}
            </p>
            <span className="mt-auto text-accent text-xs group-hover:underline">
              Read more →
            </span>
          </div>
        );

        return isFunctionalBlog ? (
          <Link to={blog.link} key={idx}>
            {CardContent}
          </Link>
        ) : (
          <a href={blog.link} key={idx}>
            {CardContent}
          </a>
        );
      })}
    </div>
  </section>
);

export default BlogSection;
