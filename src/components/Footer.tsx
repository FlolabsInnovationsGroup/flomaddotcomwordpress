import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      className="p-6 bg-background text-foreground transition-colors duration-300"
      aria-labelledby="footer-heading"
    >
      {/* Footer Title */}
      <h2 id="footer-heading" className="sr-only">
        Flomad Labs Footer
      </h2>

      {/* Copyright */}
      <p className="text-gray-400">A Flomad Labs Company</p>

      {/* Footer Navigation */}
      <ul className="flex justify-center gap-6 mt-4 footer-nav">
        <li>
          <a
            href="/"
            className="text-[#3AB6EC] hover:underline transition-colors duration-300"
            aria-label="Navigate to Home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-[#3AB6EC] hover:underline transition-colors duration-300"
            aria-label="About Us"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-[#3AB6EC] hover:underline transition-colors duration-300"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div>
        <a
          href="https://www.linkedin.com/company/flomad-labs-r-d"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 text-[#3AB6EC] hover:bg-[#3AB6EC] hover:text-gray-900 transition-all duration-300"
          aria-label="Visit LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="/contact"
          className="p-2 rounded-full bg-gray-800 text-[#3AB6EC] hover:bg-[#3AB6EC] hover:text-gray-900 transition-all duration-300"
          aria-label="Contact Us"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      {/* Back to Top */}
      <a
        href="#"
        className="mt-6 inline-block text-[#3AB6EC] hover:underline"
        aria-label="Back to top"
      >
        Back to Top
      </a>
    </footer>
  );
};

export default Footer;

  