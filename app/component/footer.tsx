import { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showPopup, setShowPopup] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const popupContent = {
    terms: "These are the terms and conditions for using our service...",
    privacy: "This is our privacy policy...",
    disclaimer: "This is our disclaimer...",
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/Strada Logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="mr-2"
            />
            {/* <span className="font-bold text-xl text-indigo-600 dark:text-indigo-400">
              Strada Properties
            </span> */}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            One Kattameya, 215,
            <br />
            Maadi Kattameya
            <br />
            Ringroad - Cairo, Egypt
          </p>
          <p className="text-gray-600 dark:text-gray-300">+1 206-214-2298</p>
          <p className="text-gray-600 dark:text-gray-300">support@Strada.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Services"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
            Subscribe to our Newsletter
          </h3>
          <form onSubmit={handleSubscribe} className="mb-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow p-2 rounded-l-md border-t border-b border-l  text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </div>
          </form>
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
        <p>© 2023 Strada Properties - All rights reserved</p>
        <div className="mt-2 space-x-4">
          {["Terms and Conditions", "Privacy Policy", "Disclaimer"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setShowPopup(item.toLowerCase().split(" ")[0])}
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {showPopup}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {popupContent[showPopup as keyof typeof popupContent]}
              </p>
              <button
                onClick={() => setShowPopup(null)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
