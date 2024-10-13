import { Handshake, Home, ChartColumnBig, HandCoins } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Handshake,
      name: "Property Consultation & Listing",
      description:
        "We provide professional advice and a tailored list of properties suited to your preferences and budget.",
    },
    {
      icon: Home,
      name: "Property Investment Consultancy",
      description:
        "We provide reliable advice to help you make smart property investment decisions.",
    },
    {
      icon: HandCoins,
      name: "Leasing",
      description:
        "We help you find and secure leasing options that match your lifestyle & requirements.",
    },
    {
      icon: ChartColumnBig,
      name: "Property Management",
      description:
        "We offer property management services to ensure your property is well-maintained and operates smoothly.",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
          OUR SERVICES
        </h2>
        <h3 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Dedicated to delivering excellence in every step of the process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
