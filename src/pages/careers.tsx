import React from "react";


const Careers = () => {
  return (
    <>
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/careers-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-[#3AB6EC] mb-4">
            Remote Jobs & Onsite Work
          </h1>
          <p className="text-lg sm:text-xl">
            Join Flomad Labs and shape the future of AI and innovation.
          </p>
        </div>
      </section>

      <section className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-blue-600 dark:text-[#3AB6EC] mb-6">
            Career Advancement
          </h2>
          <p className="text-lg mb-4">
            As a growing company, we take pride in working with people who want
            to grow and develop along with us. There is always room for
            advancement and potential to capitalize on new opportunities within
            Flomad Labs.
          </p>

          <h2 className="text-3xl sm:text-4xl font-medium text-blue-600 dark:text-[#3AB6EC] mb-6">
            Training and Support
          </h2>
          <p className="text-lg mb-4">
            We provide training and extensive support to make sure you can be
            as successful as possible as a team member at Flomad Labs.
          </p>

          <h2 className="text-3xl sm:text-4xl font-medium text-blue-600 dark:text-[#3AB6EC] mb-6">
            Work with People from All Around the World
          </h2>
          <p className="text-lg mb-4">
            You will be working with a talented international team. Expand your
            network, meet new people, and experience new cultures on a daily
            basis.
          </p>
        </div>
      </section>

      <section className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-blue-600 dark:text-[#3AB6EC] mb-6">
            Current Open Intern Roles
          </h2>
          <p className="text-lg mb-4">
            Please visit our <a href="https://flomad.international/internships-programs/" target="_blank" rel="noopener noreferrer">Flomad International</a> website to view our current open roles.
          </p>
          </div>
          </section>



    </>
  );
};

export default Careers;