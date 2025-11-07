import React from "react";
import { FaComments } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/03449762513"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-13 h-13 flex items-center justify-center
                 border-2 border-indigo-200 text-gray-400 text-3xl rounded-full
                 shadow-[0_0_10px_rgba(99,102,241,0.3)]
                 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 hover:text-white
                 hover:scale-110 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
                 transition-all duration-300 cursor-pointer"
    >
      <FaComments />
    </a>
  );
};

export default FloatingWhatsApp;
