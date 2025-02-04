import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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

  const router = useRouter(); // For current route detection

  // Dynamically add shadow to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 10) {
        if (header) {
          header.classList.add("shadow-lg");
        }
      } else {
        if (header) {
          header.classList.remove("shadow-lg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background text-foreground sticky top-0 z-50 shadow-md transition-shadow duration-300">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" aria-label="Navigate to Home">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 hover:text-blue-400">
            <Image
              src="/images/flomadlogo.png"
              alt="Flomad Labs Logo"
              width={60}
              height={40}
              priority
            />
            <span className="text-xl font-bold">Flomad</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-6">
          {["Home", "About", "Services", "Contact", "Careers"].map((item) => {
            const linkPath = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
            return (
              <li key={item}>
                {router.pathname === linkPath ? (
                  <span
                    aria-current="page"
                    className="text-lg text-blue-400 font-semibold border-b-2 border-blue-400"
                  >
                    {item}
                  </span>
                ) : (
                  <Link
                    href={linkPath}
                    className="text-lg hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition-all duration-300"
                  >
                    {item}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 text-2xl hover:text-blue-400 transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-foreground text-2xl"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/50 z-30"
            aria-hidden="true"
          ></div>
          <nav
            aria-label="Mobile Menu"
            className={`sm:hidden bg-background text-foreground p-4 absolute w-full top-full left-0 z-40 shadow-lg transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col gap-4">
              {["Home", "About", "Services", "Contact", "Careers"].map((item) => {
                const linkPath = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
                return (
                  <li key={item}>
                    {router.pathname === linkPath ? (
                      <span
                        aria-current="page"
                        className="text-lg text-blue-400 font-semibold"
                      >
                        {item}
                      </span>
                    ) : (
                      <Link
                        href={linkPath}
                        className="text-lg hover:text-blue-400 transition-all duration-300"
                        onClick={closeMenu}
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
