import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/careers-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
        <div className="relative z-10 text-center text-white px-4 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3AB6EC] mb-4">
            Remote Jobs & Onsite Work
          </h1>
          <p className="text-lg sm:text-xl">
            Join Flomad Labs and shape the future of AI and innovation.
          </p>
        </div>
      </section>

      {/* Career Information */}
      <section className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          {[
            {
              title: "Career Advancement",
              content:
                "As a growing company, we take pride in working with people who want to grow and develop along with us. There is always room for advancement and potential to capitalize on new opportunities within Flomad Labs.",
            },
            {
              title: "Training and Support",
              content:
                "We provide training and extensive support to make sure you can be as successful as possible as a team member at Flomad Labs.",
            },
            {
              title: "Work with People from All Around the World",
              content:
                "You will be working with a talented international team. Expand your network, meet new people, and experience new cultures on a daily basis.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="p-[2px] rounded-lg bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] transition-all duration-300 mb-6"
            >
              <div className="h-80 p-6 rounded-lg bg-white dark:bg-black/90 shadow-lg border border-gray-200 dark:border-gray-800 transition-transform transform hover:scale-105">
                <h2 className="text-3xl sm:text-4xl font-medium text-[#3AB6EC] mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-800 dark:text-gray-300">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intern Roles */}
      <section className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] transition-all duration-300">
            <div className="p-6 rounded-lg bg-white dark:bg-black/90 shadow-lg border border-gray-200 dark:border-gray-800 transition-transform transform hover:scale-105">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-primary text-3xl mb-4"
              />

              <h2 className="text-3xl sm:text-4xl font-medium text-[#3AB6EC] mb-4">
                Current Open Intern Roles
              </h2>
              <p className="text-lg mb-6 text-gray-800 dark:text-gray-300">
                Please visit our{" "}
                <a
                  href="https://flomad.international/internships-programs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3AB6EC] hover:underline hover:text-blue-500"
                >
                  Flomad International
                </a>{" "}
                website to view our current open roles.
              </p>
              <a
                href="https://flomad.international/internships/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-transform transform hover:scale-105"
                aria-label="View internships on Flomad International website"
              >
                View Internships
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
