import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="/Strada Logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            {["Home", "About", "Projects", "Services"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 dark:text-gray-300 px-3 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-2"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 shadow-lg z-50 p-4"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
              {["Home", "About", "Projects", "Services"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 dark:text-gray-300 px-3 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
