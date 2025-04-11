"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Simulate form submission

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding  bg-gradient-to-br from-black to-teal-700  text-gray-100 dark:text-white p-16"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`section-title flex items-center justify-center gap-4 ${
              isVisible ? "opacity-100 animate-slideUp" : "opacity-0"
            }`}
          >
            <span className="text-teal-500 font-mono text-xl">03.</span>
            Get In Touch
          </h2>
          <p
            className={`text-slate text-lg max-w-2xl mx-auto ${
              isVisible ? "opacity-100 animate-slideUp delay-1" : "opacity-0"
            }`}
          >
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll do my best to get back to
            you!
          </p>
        </div>

        <div
          className={`bg-white dark:bg-navy-light rounded-lg p-8 shadow-lg ${
            isVisible ? "opacity-100 animate-slideUp delay-2" : "opacity-0"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your message here..."
                required
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-teal-600 text-navy hover:bg-teal-900 hover:cursor-pointer transition duration-300 ease-in-out"
                size="lg"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
