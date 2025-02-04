import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/example123", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Details */}
        <div className="p-[4px] rounded-lg bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6]">
          <div className="bg-white dark:bg-black/90 px-6 py-6 rounded-lg shadow-lg border-[2px] border-gray-200 dark:border-gray-800 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium text-[#3AB6EC] mb-4">
                Contact Details
              </h3>
              <p className="text-foreground mb-4">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:John@flomadlabs.com"
                  className="text-[#3AB6EC] hover:underline"
                >
                  John@flomadlabs.com
                </a>
              </p>
              <p className="text-foreground mb-4">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+15127201253"
                  className="text-[#3AB6EC] hover:underline"
                >
                  +1 512-720-1253
                </a>
              </p>
              <p className="text-foreground">
                Follow us on LinkedIn for updates and insights:
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/company/flomad-labs-r-d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Flomad Labs LinkedIn page"
                className="text-[#3AB6EC] hover:text-blue-500 text-2xl flex items-center"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-[4px] rounded-lg bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] transition-all duration-300">
          <div className="bg-white dark:bg-black/90 px-6 py-6 rounded-lg shadow-lg border-[2px] border-gray-200 dark:border-gray-800 transition-colors duration-300 h-full">
            <h3 className="text-xl font-medium text-[#3AB6EC] mb-4">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="sr-only">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    placeholder="First Name"
                    className="p-3 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-gray-200 border-[2px] border-gray-200 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-[#3AB6EC] focus:outline-none placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    placeholder="Last Name"
                    className="p-3 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-gray-200 border-[2px] border-gray-200 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-[#3AB6EC] focus:outline-none placeholder-gray-500"
                    required
                  />
                </div>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                className="p-3 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-gray-200 border-[2px] border-gray-200 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-[#3AB6EC] focus:outline-none placeholder-gray-500"
                required
              />
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                className="p-3 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-gray-200 border-[2px] border-gray-200 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-[#3AB6EC] focus:outline-none placeholder-gray-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] text-white font-semibold rounded-md hover:opacity-90 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3AB6EC]"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              {status === "success" && (
                <p className="text-green-500 text-center mt-4 animate-fadeIn">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center mt-4 animate-fadeIn">
                  Oops! Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
