import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    const isCurrentlyDark = !htmlElement.classList.contains("dark");
    htmlElement.classList.toggle("dark");
    localStorage.setItem("theme", isCurrentlyDark ? "dark" : "light");
    setIsDarkMode(isCurrentlyDark);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background text-foreground sticky top-0 z-50">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link href="/" aria-label="Navigate to Home">
          <Image
            src="/images/flomadlogo.png"
            alt="Flomad Labs Logo"
            width={60}
            height={40}
            priority
          />Flomad
        </Link>

        <ul className="hidden sm:flex gap-6">
          <li>
            <Link href="/" className="hover:text-[#3AB6EC]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#3AB6EC]">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-[#3AB6EC]">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#3AB6EC]">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-[#3AB6EC]">
              Careers
            </Link>
          </li>
        </ul>

        <button
          onClick={toggleDarkMode}
          className="ml-4 text-2xl sm:text-lg hover:text-blue-400 transition-transform duration-200"
          aria-label="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-foreground text-2xl"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {isMenuOpen && (
        <nav
          aria-label="Mobile Menu"
          className="sm:hidden bg-background text-foreground p-4 absolute w-full top-full left-0 z-40 shadow-lg"
        >
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" className="hover:text-[#3AB6EC]" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#3AB6EC]" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/understanding-ai" className="hover:text-[#3AB6EC]" onClick={closeMenu}>
                Understanding AI
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#3AB6EC]" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#3AB6EC]" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-[#3AB6EC]" onClick={closeMenu}>
                Careers
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

