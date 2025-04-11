"use client";
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration. Features include product listings, cart functionality, user authentication, and payment processing.",
    technologies: ["Next.js", "React", "Stripe", "Tailwind CSS", "MongoDB"],
    github: "#",
    external: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates. Users can create projects, assign tasks, track progress, and communicate with team members.",
    technologies: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    external: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Personal Finance Dashboard",
    description:
      "An interactive dashboard for tracking personal finances, including income, expenses, investments, and financial goals. Includes data visualization and budget planning tools.",
    technologies: ["React", "Chart.js", "Firebase", "Material UI"],
    github: "#",
    external: "#",
    image: "/placeholder.svg",
  },
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 py-16">
        <h2
          className={`section-title flex items-center gap-4 ${
            isVisible ? "opacity-100 animate-slideUp" : "opacity-0"
          }`}
        >
          <span className="text-teal-500 font-mono text-xl">02.</span>
          Featured Projects
        </h2>
        <div className="space-y-20 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-12 gap-8 ${
                isVisible ? "opacity-100 animate-slideUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    fill
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="outline"
                      className="text-black border-white hover:bg-white/20"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? "md:order-1 md:text-right" : ""
                }`}
              >
                <p className="text-teal-500 font-mono mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">
                  {project.title}
                </h3>
                <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md mb-4">
                  <p className="text-slate-500">{project.description}</p>
                </div>
                <div
                  className={`flex flex-wrap gap-2 mb-6 ${
                    index % 2 === 1 ? "justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-mono text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    className="text-slate hover:text-teal-500 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.external}
                    className="text-slate hover:text-teal-500 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`flex justify-center mt-16 ${
            isVisible ? "opacity-100 animate-fadeIn delay-5" : "opacity-0"
          }`}
        >
          <Button className="group">
            View All Projects
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
