import React from "react";

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/careers-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
        <div className="relative z-10 text-center text-white px-4">
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
              className="p-6 mb-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/90 hover:shadow-lg hover:border-transparent hover:bg-gradient-to-r hover:from-[#1e3a8a] hover:via-[#2563eb] hover:to-[#3b82f6] transition-all duration-300"
            >
              <h2 className="text-3xl sm:text-4xl font-medium text-[#3AB6EC] mb-4">
                {section.title}
              </h2>
              <p className="text-lg">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intern Roles */}
      <section className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <div
            className="p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/90 hover:shadow-lg hover:border-transparent hover:bg-gradient-to-r hover:from-[#1e3a8a] hover:via-[#2563eb] hover:to-[#3b82f6] transition-all duration-300"
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-[#3AB6EC] mb-4">
              Current Open Intern Roles
            </h2>
            <p className="text-lg mb-6">
              Please visit our{" "}
              <a
                href="https://flomad.international/internships-programs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3AB6EC] hover:underline"
              >
                Flomad International
              </a>{" "}
              website to view our current open roles.
            </p>
            <a
              href="https://flomad.international/internships-programs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#3AB6EC] text-white rounded-lg shadow-md hover:bg-[#2563eb] transition-all duration-300"
            >
              View Internships
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
