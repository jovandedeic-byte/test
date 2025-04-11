"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "HTML & CSS",
  "Tailwind CSS",
  "Material UI",
  "Shadcn UI",
  "Node.js",
  "React Native",
  "WordPress",
  "Redux",
  "GraphQL",
  "Responsive Design",
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className=" ">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-3/5">
            <h2
              className={`section-title text-white flex items-center gap-4 ${
                isVisible ? "opacity-100 animate-slideUp" : "opacity-0"
              }`}
            >
              <span className="text-teal-500 font-mono text-xl">01.</span>
              About Me
            </h2>
            <div
              className={`space-y-4 text-slate-100 ${
                isVisible ? "opacity-100 animate-slideUp delay-1 " : "opacity-0"
              }`}
            >
              <p>
                Hello! I&apos;m Jovan, a web developer with a passion for
                creating engaging and intuitive user interfaces. My journey in
                web development started with a curiosity about how websites
                work, which quickly evolved into a deep dive into front-end
                technologies.
              </p>
              <p>
                I specialize in developing responsive applications using React
                and Next.js, with a strong focus on performance optimization and
                clean, maintainable code. I enjoy the challenge of translating
                design concepts into functional, accessible web experiences.
              </p>
              <p>
                When I&apos;m not coding, you might find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="md:w-2/5">
            <div
              className={`bg-slate-800 rounded-lg p-6 shadow-md ${
                isVisible ? "opacity-100 animate-slideUp delay-2" : "opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                <span className="text-teal-500 mr-2">&lt;</span>
                Skills
                <span className="text-teal-500 ml-2">/&gt;</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center text-white">
                    <span className="w-2 h-2 bg-teal rounded-full mr-2"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 flex justify-center text-black w-full">
          <Link
            href="/about"
            className="flex items-center justify-center w-full max-w-xs px-4 py-2 text-2xl font-medium text-white bg-teal-500 border border-transparent rounded-md shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ease-in-out"
          >
            My Hobbies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
