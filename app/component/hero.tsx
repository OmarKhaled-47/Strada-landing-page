import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/hero (1).jpg",
    "/hero (2).jpg",
    "/hero (3).jpg",
    "/hero (4).jpg",
  ];

  const developers = [
    { name: "CRED", logo: "/CRED.png" },
    { name: "Hassan Allam", logo: "/Hassan Allam.png" },
    { name: "IL CAZAR", logo: "/IL CAZAR.png" },
    { name: "LMD", logo: "/LMD.png" },
    { name: "ORA", logo: "/ORA.png" },
    { name: "CRED", logo: "/CRED.png" },
    { name: "Hassan Allam", logo: "/Hassan Allam.png" },
    { name: "IL CAZAR", logo: "/IL CAZAR.png" },
    { name: "LMD", logo: "/LMD.png" },
    { name: "ORA", logo: "/ORA.png" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      id="home"
      className="bg-blue-50 dark:bg-gray-800 pt-24 pb-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Where The Road Leads You Home
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Explore luxury properties that suit your every need. Whether
            you&apos;re looking for your first home, a vacation retreat, or an
            investment opportunity, we’re here to assist. Count on us for
            advanced technology, quality service, and personalized care.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className=" bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 mt-10"
          >
            Explore Now
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src={slides[currentSlide]}
            alt="Property"
            width={600}
            height={400}
            className="rounded-lg shadow-lg transition-opacity duration-500"
          />
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
          >
            <ChevronRight className="text-gray-800 dark:text-white" />
          </button>
          <div className="absolute bottom-4 left-1/2  transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide
                    ? "bg-indigo-600"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 overflow-hidden">
        <h3 className="text-center text-gray-600 dark:text-gray-300 mb-4">
          Trusted by 100+ companies across Egypt!
        </h3>
        <motion.div
          className="flex gap-5 pt-3"
          animate={{
            x: [0, -100 * developers.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 70,
              ease: "linear",
            },
          }}
        >
          {[...developers, ...developers].map((developer, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[100px] mx-4 gap-10"
            >
              <Image
                src={developer.logo}
                alt={developer.name}
                width={100}
                height={50}
                className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
