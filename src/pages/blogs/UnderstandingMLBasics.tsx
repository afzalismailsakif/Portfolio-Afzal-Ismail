import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const UnderstandingMLBasics = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-10 animate-fade-in-up max-w-2xl mx-auto">
      <Link to="/#blog" className="text-accent hover:underline text-sm">
        &larr; Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2">
        Understanding Machine Learning Basics
      </h1>
      <div className="text-sm text-muted-foreground mb-6">2024-04-18</div>

      <article className="prose prose-neutral max-w-none">
        <p>
          Machine Learning (ML) is a field of artificial intelligence that enables systems
          to learn from data and improve over time without explicit programming. In this
          article, we explore the fundamental concepts every ML beginner should understand
          before jumping into advanced topics.
        </p>

        <h2>What is Machine Learning?</h2>
        <p>
          Machine Learning allows computers to find hidden insights without being
          explicitly programmed where to look. It uses algorithms that iteratively learn
          from data.
        </p>

        <h2>Types of Machine Learning</h2>
        <ul>
          <li>
            <strong>Supervised Learning</strong> – The algorithm learns from labeled data
            and makes predictions based on that data.
          </li>
          <li>
            <strong>Unsupervised Learning</strong> – The system tries to find patterns and
            relationships in unlabeled data.
          </li>
          <li>
            <strong>Reinforcement Learning</strong> – Algorithms learn by trial and error
            and receive feedback from actions.
          </li>
        </ul>

        <h2>Popular Algorithms</h2>
        <ul>
          <li>Linear Regression</li>
          <li>Decision Trees</li>
          <li>Support Vector Machines</li>
          <li>Neural Networks</li>
        </ul>

        <h2>Why Learn the Basics?</h2>
        <p>
          Understanding the basic concepts helps you select the right models, preprocess
          data appropriately, and interpret results. Once equipped with the basics, you can
          confidently advance to more complex ML topics!
        </p>

        <blockquote>
          <p>
            “The greatest enemy of knowledge is not ignorance, it is the illusion of
            knowledge.” — Stephen Hawking
          </p>
        </blockquote>
      </article>
    </div>
  );
};

export default UnderstandingMLBasics;
