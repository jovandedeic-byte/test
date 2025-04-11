"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white flex items-center"
          >
            <span className="text-teal-500">&lt;</span>
            <span className="text-white">JD</span>
            <span className="text-teal-500">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div>
            <ul className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-100 hover:text-teal-500 hover:underline hover:underline-offset-4 transition-all duration-300"
                  >
                    <span className="text-teal-500 text-md">0{index + 1}.</span>{" "}
                    {link.name}
                  </Link>
                </li>
              ))}
              <Button className="bg-transparent hover:bg-teal-500/10 hover:cursor-pointer text-teal-500 border border-teal-500 hover:text-white transition-all duration-300">
                Resume
              </Button>
            </ul>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button
            className="md:hidden absolute right-4 z-30"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="md:hidden text-white" size={24} />
            ) : (
              <Menu className="md:hidden text-white" size={24} />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-10 bg-black">
            <div className="flex flex-col items-center justify-center h-full">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-4 text-xl font-semibold text-white hover:text-teal-500"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-teal-500">0{index + 1}.</span>{" "}
                  {link.name}
                </a>
              ))}
              <Button
                className="mt-6 bg-transparent text-teal-500 border border-teal hover:bg-teal/10"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
