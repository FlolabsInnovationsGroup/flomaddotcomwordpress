import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      className="p-8 bg-background text-foreground transition-colors duration-300 border-t border-gray-800 dark:border-gray-600"
      aria-labelledby="footer-heading"
    >
      {/* Footer   Title (Accessible) */}
      <h2 id="footer-heading" className="sr-only">
        Flomad Labs Footer
      </h2>

      {/* Footer Navigation Links */}
      <ul className="flex justify-center gap-8 mb-6">
        {["Home", "About", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={{item === "Home"}? "/":`/${item.toLowerCase()}`}
              className="text-lg font-medium text-primary hover:text-blue-400 transition-colors duration-300"
              aria-label={`Navigate to ${item}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.linkedin.com/company/flomad-labs-r-d"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 text-primary hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white transition-all duration-300"
          aria-label="Visit our LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <Link
          href="/contact"
          className="p-3 rounded-full bg-gray-800 text-primary hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white transition-all duration-300"
          aria-label="Send us an email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Link>
      </div>

      {/* Back to Top */}
      <div className="text-center">
        <a
          href="#"
          className="inline-flex items-center text-primary font-medium hover:text-blue-400 transition-colors duration-300"
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
