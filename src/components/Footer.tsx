import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      className="p-8 bg-background text-foreground transition-colors duration-300"
      aria-labelledby="footer-heading"
    >
      {/* Footer Title */}
      <h2 id="footer-heading" className="sr-only">
        Flomad Labs Footer
      </h2>

      {/* Footer Navigation */}
      <ul className="flex justify-center gap-8 mb-6">
        <li>
          <Link
            href="/"
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label="Navigate to Home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label="About Us"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mb-6">
        <a
          href="https://www.linkedin.com/company/flomad-labs-r-d"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300"
          aria-label="Visit LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <Link
          href="/contact"
          className="p-3 rounded-full bg-gray-800 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300"
          aria-label="Contact Us"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Link>
      </div>

      {/* Back to Top */}
      <div className="text-center">
        <a
          href="#"
          className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
