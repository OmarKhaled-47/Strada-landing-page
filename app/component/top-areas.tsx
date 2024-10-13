// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronDown, ChevronUp } from "lucide-react";

// export default function TopAreas() {
//   interface Area {
//     name: string;
//     count: number;
//     image: string;
//     description: string;
//     options: string[];
//     faq: {
//       question: string;
//       answer: string;
//     }[];
//   }
//   const [selectedArea, setSelectedArea] = useState<Area | null>(null);
//   const [openAccordion, setOpenAccordion] = useState<number | null>(null);

//   const areas = [
//     {
//       name: "New Cairo, EG",
//       count: 183,
//       image: "/placeholder.svg?height=300&width=500",
//       description:
//         "New Cairo is a modern city east of Cairo, known for its upscale residential areas and business districts.",
//       options: ["Apartments", "Villas", "Townhouses"],
//       faq: [
//         {
//           question: "What are the best areas in New Cairo?",
//           answer:
//             "Some of the best areas in New Cairo include Katameya Heights, Mirage City, and Fifth Settlement.",
//         },
//         {
//           question: "Is New Cairo good for families?",
//           answer:
//             "Yes, New Cairo is known for its family-friendly environment, with numerous international schools and spacious residential areas.",
//         },
//       ],
//     },
//     {
//       name: "El Sheikh Zayed, EG",
//       count: 112,
//       image: "/placeholder.svg?height=300&width=500",
//       description:
//         "El Sheikh Zayed is a planned city west of Cairo, offering a mix of residential and commercial areas.",
//       options: ["Apartments", "Villas", "Penthouses"],
//       faq: [
//         {
//           question: "What amenities are available in El Sheikh Zayed?",
//           answer:
//             "El Sheikh Zayed offers various amenities including shopping malls, sports clubs, and international schools.",
//         },
//         {
//           question: "Is El Sheikh Zayed well-connected to Cairo?",
//           answer:
//             "Yes, El Sheikh Zayed is well-connected to Cairo through major highways and the Cairo Metro.",
//         },
//       ],
//     },
//   ];

//   return (
//     <section id="projects" className="bg-white dark:bg-gray-900 py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
//           AREAS ACROSS THE TOWN
//         </h2>
//         <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
//           Top Areas
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {areas.map((area, index) => (
//             <motion.div
//               key={index}
//               className="relative rounded-lg overflow-hidden cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//               onClick={() => setSelectedArea(area)}
//             >
//               <Image
//                 src={area.image}
//                 alt={area.name}
//                 width={500}
//                 height={300}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                 <div className="text-center">
//                   <h4 className="text-white text-4xl font-bold">
//                     {area.count}
//                   </h4>
//                   <p className="text-white text-xl">{area.name}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedArea && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -50, opacity: 0 }}
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//                   {selectedArea.name}
//                 </h2>
//                 <button
//                   onClick={() => setSelectedArea(null)}
//                   className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 {selectedArea.description}
//               </p>
//               <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                 Available Options:
//               </h3>
//               <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
//                 {selectedArea.options.map((option: string, index: number) => (
//                   <li key={index}>{option}</li>
//                 ))}
//               </ul>

//               {selectedArea.faq.map((item, index: number) => (
//                 <div key={index} className="mb-2">
//                   <button
//                     className="flex justify-between items-center w-full text-left font-semibold text-gray-900 dark:text-white"
//                     onClick={() =>
//                       setOpenAccordion(openAccordion === index ? null : index)
//                     }
//                   >
//                     {item.question}
//                     {openAccordion === index ? <ChevronUp /> : <ChevronDown />}
//                   </button>
//                   <AnimatePresence>
//                     {openAccordion === index && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="overflow-hidden"
//                       >
//                         <p className="mt-2 text-gray-600 dark:text-gray-300">
//                           {item.answer}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//               <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                 FAQ:
//               </h3>
//               {selectedArea.faq.map((item, index) => (
//                 <div key={index} className="mb-2">
//                   <button
//                     className="flex justify-between items-center w-full text-left font-semibold text-gray-900 dark:text-white"
//                     onClick={() =>
//                       setOpenAccordion(openAccordion === index ? null : index)
//                     }
//                   >
//                     {item.question}
//                     {openAccordion === index ? <ChevronUp /> : <ChevronDown />}
//                   </button>
//                   <AnimatePresence>
//                     {openAccordion === index && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="overflow-hidden"
//                       >
//                         <p className="mt-2 text-gray-600 dark:text-gray-300">
//                           {item.answer}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

const areas = [
  {
    name: "New Cairo",
    image: "/city (1).jpg",
    description: "Vibrant city center with modern amenities.",
  },
  {
    name: "Mostakbal City",
    image: "/city (2).jpg",
    description:
      "Peaceful residential areas with family-friendly environments.",
  },
  {
    name: "New Administrative Capital",
    image: "/city (1).jpg",
    description: "Luxurious properties with stunning ocean views.",
  },
  {
    name: "Ain Sokhna ",
    image: "/city (2).jpg",
    description: "Serene locations with breathtaking natural scenery.",
  },
  {
    name: "Gouna",
    image: "/city (1).jpg",
    description: "Serene locations with breathtaking natural scenery.",
  },
  {
    name: "North Coast",
    image: "/city (2).jpg",
    description: "Serene locations with breathtaking natural scenery.",
  },
  {
    name: "Shaikh Zayed",
    image: "/city (1).jpg",
    description: "Serene locations with breathtaking natural scenery.",
  },
  {
    name: "6th of October",
    image: "/city (2).jpg",
    description: "Serene locations with breathtaking natural scenery.",
  },
];

export default function TopAreas() {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleAreaClick = (index: number, event: React.MouseEvent) => {
    const sectionRect = sectionRef.current?.getBoundingClientRect();
    if (sectionRect) {
      const x = event.clientX - sectionRect.left;
      const y = event.clientY - sectionRect.top;
      setPopupPosition({ x, y });
    }
    setSelectedArea(index);
  };

  const closePopup = () => {
    setSelectedArea(null);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-gray-100 dark:bg-gray-800 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Top Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => handleAreaClick(index, e)}
            >
              <div className="relative h-48">
                <Image
                  src={area.image}
                  alt={area.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {area.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedArea !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-40"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, x: popupPosition.x, y: popupPosition.y }}
              animate={{ scale: 1, x: 0, y: 0 }}
              exit={{ scale: 0.9, x: popupPosition.x, y: popupPosition.y }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full m-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {areas[selectedArea].name}
              </h3>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={areas[selectedArea].image}
                  alt={areas[selectedArea].name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {areas[selectedArea].description}
              </p>
              <div className="space-y-4">
                <Accordion title="Properties Available">
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                    <li>Luxury Apartments</li>
                    <li>Family Homes</li>
                    <li>Commercial Spaces</li>
                  </ul>
                </Accordion>
                <Accordion title="Local Amenities">
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                    <li>Shopping Centers</li>
                    <li>Parks and Recreation</li>
                    <li>Schools and Universities</li>
                  </ul>
                </Accordion>
                <Accordion title="Transportation">
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                    <li>Public Transit</li>
                    <li>Major Highways</li>
                    <li>Bike Lanes</li>
                  </ul>
                </Accordion>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-gray-900 dark:text-white font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
