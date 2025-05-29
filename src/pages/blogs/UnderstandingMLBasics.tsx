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
          Machine Learning (ML) is a rapidly growing field of artificial intelligence (AI)
          that focuses on building systems that can automatically learn from and adapt to
          data. Instead of being explicitly programmed to perform a task, ML systems use
          algorithms to detect patterns, make decisions, and improve performance over time.
          This article breaks down the fundamental concepts of ML to help beginners build
          a strong foundation before diving into more complex topics.
        </p>

        <h2>What is Machine Learning?</h2>
        <p>
          At its core, Machine Learning is about teaching machines to learn from experience.
          It involves feeding data into algorithms that analyze it and produce predictive or
          descriptive outcomes. Over time, as the system is exposed to more data, its
          predictions or classifications become more accurate—this is learning in action.
        </p>
        <p>
          Think of it as programming with examples: instead of writing rules manually, you
          provide the data and let the model figure out the logic.
        </p>

        <h2>Types of Machine Learning</h2>
        <ul>
          <li>
            <strong>Supervised Learning</strong> – The model is trained on a labeled dataset,
            meaning each input comes with a correct output. The goal is to learn a mapping
            from inputs to outputs to predict future outcomes. Common use cases include
            spam detection, fraud detection, and image classification.
          </li>
          <li>
            <strong>Unsupervised Learning</strong> – In this approach, the data has no labels.
            The system tries to group or organize the data in meaningful ways. This is
            especially useful for clustering customers or detecting patterns in behavior.
          </li>
          <li>
            <strong>Reinforcement Learning</strong> – The model learns by interacting with
            its environment and receiving rewards or penalties. It’s widely used in robotics,
            game playing, and autonomous systems like self-driving cars.
          </li>
        </ul>

        <h2>Popular Algorithms</h2>
        <ul>
          <li><strong>Linear Regression</strong> – A statistical method used to predict a continuous value based on the relationship between variables.</li>
          <li><strong>Decision Trees</strong> – Models that make decisions based on a series of branching choices, similar to a flowchart.</li>
          <li><strong>Support Vector Machines (SVMs)</strong> – Algorithms that find the best boundary to separate different classes of data.</li>
          <li><strong>Neural Networks</strong> – Inspired by the human brain, these models are particularly effective for image and speech recognition tasks.</li>
        </ul>

        <h2>Why Learn the Basics?</h2>
        <p>
          A solid understanding of Machine Learning fundamentals is crucial for anyone
          interested in AI or data science. These basics enable you to:
        </p>
        <ul>
          <li>Choose appropriate algorithms for different tasks.</li>
          <li>Understand how to prepare and clean data before feeding it to models.</li>
          <li>Interpret model results and evaluate performance.</li>
          <li>Build a pathway toward mastering deep learning, natural language processing, and more advanced techniques.</li>
        </ul>
        <p>
          Without grasping these core concepts, it's easy to misuse tools or misinterpret
          outcomes. That’s why the basics are not optional—they are essential.
        </p>

        <blockquote>
          <p>
            “The greatest enemy of knowledge is not ignorance, it is the illusion of
            knowledge.” — Stephen Hawking
          </p>
        </blockquote>

        <p>
          As Machine Learning becomes increasingly integrated into daily life—from recommendation
          engines to medical diagnostics—understanding its foundations can empower you to use,
          build, and critique these systems effectively. Start simple, stay curious, and keep learning.
        </p>
      </article>
    </div>
  );
};

export default UnderstandingMLBasics;
