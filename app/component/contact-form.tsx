import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    additionalInfo: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      additionalInfo: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-indigo-600 dark:bg-indigo-900 py-20 px-4"
    >
      <ToastContainer position="bottom-right" />
      <div className="max-w-6xl mx-auto flex flex-col justify-end md:flex-row gap-24">
        <motion.div
          className="md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            We’re here to help you find your new home, Schedule a visit today!{" "}
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Simply fill out the form and our team will get back to you shortly
            to assist with your inquiry and schedule your visit.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full name*"
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-gray-900 dark:text-white"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number*"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-gray-900 dark:text-white"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md w-full mb-4 text-gray-900 dark:text-white"
              required
            />
            <textarea
              name="additionalInfo"
              placeholder="Additional information*"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md w-full mb-4 text-gray-900 dark:text-white"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <div className="md:w-1/2">
          <div className="mb-8">
            <h3 className="font-semibold mb-2 flex items-center text-white">
              <Mail className="mr-2" /> SEND AN EMAIL
            </h3>
            <a
              href="mailto:Contact@strada-properties.com"
              className="text-white hover:underline"
            >
              Contact@strada-properties.com
            </a>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2 flex items-center text-white">
              <Phone className="mr-2" /> GIVE US CALL
            </h3>
            <a href="tel:+201203425566" className="text-white hover:underline">
              +201203425566
            </a>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2 flex items-center text-white">
              <MapPin className="mr-2" /> OFFICE ADDRESS
            </h3>
            <p className="text-white">
              One Kattameya, 215, Maadi Kattameya Ringroad - Cairo, Egypt
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center text-white">
              <Clock className="mr-2" /> WORKING HOURS
            </h3>
            <p className="text-white">SUN - THU: 9 AM - 5 AM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
