import React from "react";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3AB6EC] mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl">
            Empowering your AI journey with bespoke solutions and expertise.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-medium text-center mb-8 text-[#3AB6EC]"
            id="services-heading"
          >
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Research",
                description:
                  "At Flomad Labs, we are active contributors to the AI evolution, offering bespoke research initiatives tailored to client needs.",
              },
              {
                title: "Education",
                description:
                  "We conduct thorough research to grasp the nuances of your operations and deliver custom learning experiences.",
              },
              {
                title: "Consulting",
                description:
                  "Transitioning to AI-driven operations isn't just an option; it's a necessity.",
              },
              {
                title: "AI Strategy Formulation",
                description:
                  "We craft strategic AI roadmaps that align with your business goals.",
              },
              {
                title: "Operational AI Integration",
                description:
                  "Embedding AI into the very fabric of your operations, driving efficiency.",
              },
              {
                title: "Risk Assessment & Management",
                description:
                  "Comprehensive risk assessment, ensuring compliance and security.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative group p-[4px] bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 h-full flex flex-col justify-center"
                  role="article"
                  aria-labelledby={`service-title-${index}`}
                >
                  <h3
                    id={`service-title-${index}`}
                    className="text-xl font-semibold mb-4 text-[#3AB6EC] text-center"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
