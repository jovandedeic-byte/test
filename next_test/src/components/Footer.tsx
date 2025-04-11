import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black dark:bg-navy text-center text-slate-400 flex justify-center items-center">
      <div className="container">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-slate-400 hover:text-teal-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-teal-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-teal-500 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:contact@jovandedeic.com"
            className="text-slate-400 hover:text-teal-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        <p className="font-mono text-sm">Designed & Built by Jovan Dedeic</p>
        <p className="text-sm mt-2">© {currentYear} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
