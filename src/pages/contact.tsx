
import React from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <>
      <section className="p-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col justify-center items-start bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-medium text-[#3AB6EC] mb-4">Contact Details</h3>
            <p className="text-foreground mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:John@flomadlabs.com" className="text-[#3AB6EC] hover:underline">
                John@flomadlabs.com
              </a>
            </p>
            <p className="text-foreground mb-4">
              <strong>Phone:</strong>{" "}
              <a href="tel:+15127201253" className="text-[#3AB6EC] hover:underline">
                +1 512-720-1253
              </a>
            </p>
            <p className="text-foreground">
              Follow us on LinkedIn for updates and insights:
            </p>
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

          <div className="bg-white dark:bg-black/90 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <h3 className="text-xl font-medium text-[#3AB6EC] mb-4">Send Us a Message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="sr-only">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    className="p-3 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-[#3AB6EC]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                    className="p-3 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-[#3AB6EC]"
                    required
                  />
                </div>
              </div>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="p-3 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-[#3AB6EC]"
                required
              />
              <textarea
                id="message"
                rows={5}
                placeholder="Your Message"
                className="p-3 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-[#3AB6EC]"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#3AB6EC] text-white rounded-md hover:bg-blue-500 transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
