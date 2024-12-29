import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

export default function UnderstandingAI() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ai-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3AB6EC] mb-4">
            Understanding AI, Generative AI, and LLMs
          </h1>
          <p className="text-lg sm:text-xl">
            Dive into the origins, functionality, and transformative potential
            of AI technologies.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#3AB6EC] mb-6">
            Introduction
          </h2>
          <p className="mb-6">
            The architecture behind many modern LLMs, like OpenAI's GPT series,
            is the Transformer architecture. This type of model has been very
            successful in various NLP tasks due to its ability to handle
            long-range dependencies and its scalable nature.
          </p>
          <Image
            src="/images/transformer.jpg"
            alt="Transformer Architecture"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-6 mb-6">
            NLP, or Natural Language Processing, is like teaching computers and
            machines how to understand our language—our jokes, our slang, our
            questions, everything. It's why tools like Siri or Google Assistant
            can answer when you ask, "What's the weather like today?" It's
            making computers better at chatting with us!
          </p>
        </div>
      </section>

      {/* AI in Business */}
      <section className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#3AB6EC] mb-6">
            AI in Business
          </h2>
          <p className="mb-6">
            In today's global business landscape, the adoption and
            understanding of Artificial Intelligence (AI) is no longer a
            luxury—it's a necessity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Image
              src="/images/business-ai.jpg"
              alt="AI in Business"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to empower professionals with the tools to integrate
              AI into their workspaces. From increasing employee productivity by
              30–40% to automating mundane tasks, AI holds the promise to
              revolutionize industries.
            </p>
          </div>
        </div>
      </section>

      {/* Generative AI */}
      <section className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#3AB6EC] mb-6">
            What is Generative AI?
          </h2>
          <p className="mb-6">
            Generative AI is a type of Artificial Intelligence that can create
            new content—images, music, or text—rather than simply analyzing
            existing data. It's like a robot artist capable of producing
            something new and original.
          </p>
          <div className="mt-4">
            <strong>Examples:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>
                AI: Siri or Google Assistant answers questions or recommends
                songs.
              </li>
              <li>
                Generative AI: ChatGPT writes a unique story or draws a picture
                based on your prompt.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#3AB6EC] mb-6">
            AI: A Statistical Insight
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              63% of U.S. job roles will benefit from AI integration, compared
              to only 7% being replaced. [Source: cnet.com]
            </li>
            <li>
              56% of people view AI-assisted surgery as a breakthrough. [Source:
              weforum.org]
            </li>
            <li>
              63% of business leaders plan to maintain or increase AI
              investments. [Source: insiderintelligence.com]
            </li>
          </ul>
        </div>
      </section>

      {/* Closing Thoughts */}
      <section className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#3AB6EC] mb-6">
            Transforming the Future with AI
          </h2>
          <p className="mb-6">
            The next industrial revolution is here. With generative AI and tools
            like ChatGPT leading the charge, we are reshaping industries and
            redefining productivity.
          </p>
          <p className="mb-6">
            At Flomad Labs, we help businesses and professionals harness AI's
            transformative potential through education, research, and
            collaboration.
          </p>
        </div>
      </section>
    </>
  );
}