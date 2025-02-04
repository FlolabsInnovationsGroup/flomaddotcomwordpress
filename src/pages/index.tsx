import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
{/* Flomad Hero Section */}
<section className="relative h-[60vh] overflow-hidden bg-black">
  <div
    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/starspic.png')",
    }}
  ></div>
  <div
    className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black"
    aria-hidden="true"
  ></div>
  <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex flex-col items-center justify-center text-white p-4">
    {/* Beehiv Embed Section */}
    <div className="p-[4px] rounded-lg bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] max-w-2xl w-full shadow-lg">
      <div className="bg-black p-6 rounded-lg text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#3AB6EC]">
          Join the Flomad Labs Movement
        </h1>
        <iframe
          src="https://embeds.beehiiv.com/53c7ac00-2964-4f87-ba7d-c7b87146ad90"
          data-test-id="beehiiv-embed"
          width="100%"
          height="240"
          frameBorder="0"
          scrolling="no"
          style={{
            borderRadius: "8px",
            border: "none",
            backgroundColor: "transparent",
          }}
        ></iframe>
      </div>
    </div>
  </div>
</section>



      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/futuristicbackground.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-3xl p-6 bg-white/90 dark:bg-black/90 rounded-lg shadow-lg">
          <h2 className="text-4xl sm:text-5xl font-medium mb-4 text-[#3AB6EC] leading-snug">
            Flomad Labs: Navigating the AI Revolution Together
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-800 dark:text-gray-200">
            We are at the start of another productivity revolution – Generative
            AI. Unlock the infinite potential of Artificial Intelligence.
          </p>
          <a
            href="#about"
            className="inline-block bg-[#3AB6EC] text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Guardians of Tomorrow Section */}
      <section
        id="guardians"
        className="p-8 bg-background text-foreground transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#3AB6EC] mb-8">
            Guardians of Tomorrow: How Flomad Labs Resurrects the Spirit of Talos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/talos.png"
                alt="Mythical Guardian Talos"
                width={500}
                height={500}
                className="rounded-lg mx-auto shadow-lg"
                priority
              />
            </div>
            <div>
              <p className="mb-6 leading-relaxed">
                In ancient times, the island of Crete was watched over by a mighty
                guardian: Talos, the first robot known to mythology. A towering figure
                of bronze, Talos tirelessly patrolled the island, running its perimeter
                three times a day to protect its people from invaders.
              </p>
              <p className="mb-6 leading-relaxed">
                Thousands of years later, Flomad Labs carries on this spirit of ancient
                innovation with modern technology. Just as Talos stood as a guardian
                for Crete, Flomad&#39;s AI solutions stand guard over the digital and
                physical landscapes of our modern world.
              </p>
              <a
                href="https://caipo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Learn More About CAIPO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Flomad Advantage Section */}
      <section
  id="benefits"
  className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200"
  aria-labelledby="benefits-heading"
>
  <h2
    id="benefits-heading"
    className="text-3xl sm:text-4xl font-medium mb-6 text-center text-[#3AB6EC] leading-snug"
  >
    The Flomad Advantage
  </h2>
  <p className="text-center mb-8 text-lg max-w-2xl mx-auto">
    Unlock the potential of AI with benefits tailored to individuals and organizations alike.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Empowering Entrepreneurs",
        description:
          "Flomad Labs provides tools and strategies for solo entrepreneurs to leverage AI effectively, driving growth and innovation independently.",
      },
      {
        title: "Transforming Enterprises",
        description:
          "Large organizations achieve unprecedented efficiency with Flomad&#39;s AI-driven solutions, enhancing decision-making and optimizing operations.",
      },
      {
        title: "Driving Research",
        description:
          "Our dedicated research initiatives push the boundaries of AI, uncovering innovative solutions for today&#39;s most complex challenges.",
      },
      {
        title: "Personalized Solutions",
        description:
          "Tailor-made AI strategies designed to align with your business objectives and ensure maximum impact.",
      },
      {
        title: "Ethical AI Practices",
        description:
          "We prioritize responsible and ethical AI development to ensure fairness, transparency, and trust in all our solutions.",
      },
      {
        title: "Continuous Support",
        description:
          "Flomad Labs offers ongoing guidance and support to help businesses adapt to the rapidly changing AI landscape.",
      },
    ].map((benefit, index) => (
      <div
        key={index}
        className="group relative p-[2px] rounded-lg bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] hover:shadow-lg transition-all duration-300"
      >
        <div
          className="bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
          style={{
            minHeight: "250px", // Ensures consistent card height
          }}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#3AB6EC]">
            {benefit.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {benefit.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>




      {/* Collaborations Section */}
      <section
        id="collaborations"
        className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300"
        aria-labelledby="collaborations-heading"
      >
        <h2
          id="collaborations-heading"
          className="text-3xl sm:text-4xl font-medium mb-6 text-center text-[#3AB6EC]"
        >
          Collaborations
        </h2>
        <p className="text-center mb-8 text-lg max-w-3xl mx-auto">
          We thrive on collaboration. Whether it&#39;s academic research, corporate
          initiatives, or community-driven projects, we bring AI innovations to life.
        </p>
        <div className="bg-white dark:bg-black/90 p-6 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-300">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              {
                src: "/images/onlinecollab.png",
                alt: "Online Collaboration",
                caption: "Partner with Flomad Labs to bring cutting-edge AI solutions to life.",
              },
              {
                src: "/images/aiadvantage.png",
                alt: "AI Collaboration",
                caption: "Join our community of innovators to lead the AI revolution together.",
              },
            ].map((collab, index) => (
              <div
                key={index}
                className="group relative w-[350px] h-[250px] overflow-hidden rounded-lg shadow-lg bg-black/90 hover:shadow-xl"
              >
                <Image
                  src={collab.src}
                  alt={collab.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-center text-white text-lg px-4">{collab.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
