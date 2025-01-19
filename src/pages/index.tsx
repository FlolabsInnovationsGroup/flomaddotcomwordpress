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
          <div className="bg-black p-8 rounded-lg shadow-lg border border-gray-700 max-w-xlg text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#3AB6EC]">
              Join the Flomad Labs Movement
            </h1>
            <p className="text-lg mb-4">
              Get your AI dose of innovation and inspiration. Our newsletter is
              your go-to source for staying in sync with the AI universe.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-md border border-gray-300 text-gray-200 bg-gray-800 dark:border-gray-700"
                required
                aria-label="Enter your email"
              />
              <button
                type="submit"
                className="bg-[#3AB6EC] text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
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
      <section id="guardians" className="p-8 bg-background text-foreground transition-colors duration-300">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-medium text-[#3AB6EC] mb-8">
      Guardians of Tomorrow: How Flomad Labs Resurrects the Spirit of Talos
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      {/* Talos Image */}
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

      {/* Content */}
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
          for Crete, Flomad&#39;s AI and robotics solutions stand guard over the
          digital and physical landscapes of our modern world.
        </p>
        <p className="leading-relaxed">
          Our flagship project, &quot;Project CAIPO,&quot; is inspired by this ancient
          guardian, blending the ideals of innovation and protection into
          cutting-edge AI systems that empower humanity and transform industries.
        </p>
        <p className="leading-relaxed">
          Together, we create a new era of technological guardianship, inspired by
          mythology and powered by AI.
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
    Unlock the potential of AI with benefits tailored to individuals and organizations alike. Here&#39;s what we bring to the table:
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Benefit 1 */}
    <div
      className="bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
      role="article"
      aria-labelledby="benefit-1-title"
    >
      <h3
        id="benefit-1-title"
        className="text-2xl font-semibold mb-4 text-[#3AB6EC] text-center"
      >
        Empowering Entrepreneurs
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Flomad Labs provides tools and strategies for solo entrepreneurs to
        leverage AI effectively, driving growth and innovation independently.
      </p>
    </div>

    {/* Benefit 2 */}
    <div
      className="bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
      role="article"
      aria-labelledby="benefit-2-title"
    >
      <h3
        id="benefit-2-title"
        className="text-2xl font-semibold mb-4 text-[#3AB6EC] text-center"
      >
        Transforming Enterprises
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Large organizations achieve unprecedented efficiency with Flomad&#39;s AI-driven solutions, enhancing decision-making and optimizing operations.
      </p>
    </div>

    {/* Benefit 3 */}
    <div
      className="bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
      role="article"
      aria-labelledby="benefit-3-title"
    >
      <h3
        id="benefit-3-title"
        className="text-2xl font-semibold mb-4 text-[#3AB6EC] text-center"
      >
        Driving Research
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Our dedicated research initiatives push the boundaries of AI, uncovering
        innovative solutions for today&#39;s most complex challenges.
      </p>
    </div>

    {/* Benefit 4 */}
    <div
      className="bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
      role="article"
      aria-labelledby="benefit-4-title"
    >
      <h3
        id="benefit-4-title"
        className="text-2xl font-semibold mb-4 text-[#3AB6EC] text-center"
      >
        Personalized Solutions
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Tailor-made AI strategies designed to align with your business objectives and ensure maximum impact.
      </p>
    </div>

    {/* Benefit 5 */}
    <div
      className="bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
      role="article"
      aria-labelledby="benefit-5-title"
    >
      <h3
        id="benefit-5-title"
        className="text-2xl font-semibold mb-4 text-[#3AB6EC] text-center"
      >
        Ethical AI Practices
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        We prioritize responsible and ethical AI development to ensure fairness, transparency, and trust in all our solutions.
      </p>
    </div>

    {/* Benefit 6 */}
    <div
      className="bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
      role="article"
      aria-labelledby="benefit-6-title"
    >
      <h3
        id="benefit-6-title"
        className="text-2xl font-semibold mb-4 text-[#3AB6EC] text-center"
      >
        Continuous Support
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Flomad Labs offers ongoing guidance and support to help businesses adapt to the rapidly changing AI landscape.
      </p>
    </div>
  </div>

  {/* Call to Action */}
  <div className="text-center mt-8">
  <Link href="/services" legacyBehavior>
    <a className="bg-[#3AB6EC] text-white py-3 px-6 rounded-md hover:bg-blue-500 transition-transform transform hover:scale-105">
      Explore Our Services
    </a>
  </Link>
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
    className="text-3xl sm:text-4xl font-medium mb-6 text-center text-[#3AB6EC] leading-snug"
  >
    Collaborations
  </h2>
  <p className="text-center mb-8 text-lg max-w-3xl mx-auto">
    We thrive on collaboration. Whether it&#39;s academic research, corporate
    initiatives, or community-driven projects, we bring AI innovations to life.
  </p>

  <div className="bg-white dark:bg-black/90 p-6 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-300">
    <div className="flex flex-wrap justify-center items-center gap-8">
      {/* Collaboration 1 */}
      <div
        className="group relative w-[350px] h-[250px] overflow-hidden rounded-lg shadow-lg bg-black/90"
        role="article"
        aria-labelledby="collaboration-1-title"
      >
        <div className="relative w-[350px] h-[250px]">
          <Image
            src="/images/onlinecollab.png"
            alt="Online Collaboration"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p id="collaboration-1-title" className="text-center text-white text-lg px-4">
            Partner with Flomad Labs to bring cutting-edge AI solutions to life.
          </p>
        </div>
      </div>

      {/* Collaboration 2 */}
      <div
        className="group relative w-[350px] h-[250px] overflow-hidden rounded-lg shadow-lg bg-black/90"
        role="article"
        aria-labelledby="collaboration-2-title"
      >
        <Image
          src="/images/aiadvantage.png"
          alt="AI Collaboration"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p id="collaboration-2-title" className="text-center text-white text-lg px-4">
            Join our community of innovators to lead the AI revolution together.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
};
