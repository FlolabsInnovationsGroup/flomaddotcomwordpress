import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section id="about" className="relative p-8 bg-black text-white">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/movingaielementsvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3AB6EC] mb-6">
            About Flomad
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Shaping the future through AI innovation, travel solutions, and global connectivity.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center text-[#3AB6EC] mb-8">
            Who We Are
          </h2>
          <p className="text-lg text-center mb-6">
            Flomad is a global leader in innovation, offering a unique blend of AI-driven solutions, travel services, and international collaboration.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {[
              {
                title: "Innovation",
                description: "Driving creative solutions to transform challenges into opportunities.",
                icon: "brain",
              },
              {
                title: "Global Impact",
                description: "Connecting people, businesses, and cultures through technology and travel.",
                icon: "globe",
              },
              {
                title: "Exploration",
                description: "Empowering global travelers with cutting-edge solutions.",
                icon: "plane",
              },
              {
                title: "Collaboration",
                description: "Building partnerships to push the boundaries of innovation.",
                icon: "users",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white dark:bg-black/90 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
                title={value.description}
              >
                <i className={`fas fa-${value.icon} text-5xl text-[#3AB6EC] mb-4`}></i>
                <h3 className="text-lg font-medium">{value.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem of Flomad */}
      <section className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center text-[#3AB6EC] mb-8">
            The Flomad Ecosystem
          </h2>
          <p className="text-lg text-center mb-6">
            At Flomad, we operate as an interconnected network of innovative businesses and solutions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                src: "/images/flomad-labs.png",
                alt: "Flomad Labs",
                title: "Flomad Labs",
                description:
                  "Our hub for AI research and development, creating transformative solutions for modern challenges.",
              },
              {
                src: "/images/flomad-travel.png",
                alt: "Flomad Travel",
                title: "Flomad Travel",
                description: "Simplifying global exploration with advanced travel tools and services.",
              },
              {
                src: "/images/flomad-international.png",
                alt: "Flomad International",
                title: "Flomad International",
                description: "Facilitating partnerships and global initiatives to foster innovation.",
              },
              {
                src: "/images/caipo.png",
                alt: "CAIPO",
                title: "CAIPO",
                description:
                  "Our flagship AI platform, streamlining business processes and enhancing productivity.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={150}
                  height={150}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-[#3AB6EC]">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#3AB6EC] mb-8">
            Our Vision for the Future
          </h2>
          <p className="text-lg mb-6">
            At Flomad, we envision a world where technology and innovation drive sustainable growth, empower individuals, and connect communities.
          </p>
          <p className="text-lg">
            Whether it&#39;s redefining travel, pioneering AI solutions, or fostering global partnerships, Flomad is dedicated to transforming industries and enhancing lives.
          </p>
        </div>
      </section>

      {/* John Section */}
      <section
        id="john-hazlewood"
        className="p-8 bg-background text-foreground transition-colors duration-300"
        aria-labelledby="john-hazlewood-heading"
      >
        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-[#3AB6EC] mb-8">
          Flomad&#39;s Founder
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/John-Hazlewood.jpg"
            alt="John Hazlewood"
            width={300}
            height={300}
            className="mx-auto mb-4 border-4 border-[#3AB6EC] shadow-lg"
            priority
          />
          <h3
            id="john-hazlewood-heading"
            className="text-3xl font-bold mb-2 text-[#3AB6EC]"
          >
            John Hazlewood
          </h3>
          <p className="text-gray-400 font-semibold mb-4">CEO & Founder</p>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-[#3AB6EC] hover:text-blue-500 text-xl flex items-center justify-center gap-2 mb-6"
            aria-label="Visit John Hazlewood&#39;s LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </Link>
          <div className="text-left text-gray-300 space-y-4">
            <h4 className="text-2xl text-[#3AB6EC] mb-2">Early Achievements</h4>
            <p>
              Launched the first web-based flights reservation system in 1995. Founded an online travel company and its low-cost development subsidiary in Sofia, Bulgaria.
            </p>
            <h4 className="text-2xl text-[#3AB6EC] mb-2">Business Ventures</h4>
            <p>
              In 1998, started a Y2K Services and IT staffing initiative and grew the company to more than 100 employees. Owned and operated several leisure travel agencies, a sports agency representing professional athletes and teams, a semi-pro soccer team, a lawn maintenance and landscaping company, and an import-export business.
            </p>
            <h4 className="text-2xl text-[#3AB6EC] mb-2">Vision for Flomad Labs</h4>
            <p>
              John Hazlewood continues to innovate at the intersection of technology and business, leading Flomad Labs toward a future powered by ethical AI and groundbreaking innovation. </p> </div> </div> </section> </> ); }
