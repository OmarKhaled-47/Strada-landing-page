import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

export default function WhoAreWe() {
  const images = ["/about (1).jpg", "/about (2).jpg", "/about (3).jpg"];

  const points = [
    {
      text: "Tailored Property Solutions",
      icon: (
        <CheckCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-2" />
      ),
      describe:
        "We provide tailored support to help you find a property that matches your preferences and lifestyle, while offering customized strategies to maximize the value of your property investments.",
    },
    {
      text: "Expert knowledge & Market Insights",
      icon: (
        <Star className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-2" />
      ),
      describe:
        "Leverage our extensive real estate expertise to make informed decisions on your next home or investment.",
    },
  ];

  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
          WHO ARE WE
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="relative rounded-lg overflow-hidden col-span-1 row-span-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={images[0]}
                alt="Real estate image 1"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={images[1]}
                alt="Real estate image 2"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={images[2]}
                alt="Real estate image 3"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              The Road To your New Home
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Strada Properties, we help you find the home that’s right for
              you. Whether you’re looking for a modern family home, a luxury
              villa, or a stylish apartment, our services are tailored to your
              specific needs.
            </p>

            <div className="grid gap-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="flex items-center font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    {point.icon}
                    {point.text}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {point.describe}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
