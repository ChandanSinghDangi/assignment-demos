import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
     
    <header className="bg-yellow-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-4 flex justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
          Project Management
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 md:gap-6">
          <Link
            to="/lead-page"
            className="bg-pink-400 hover:bg-pink-300 text-gray-900 px-5 py-2 rounded transition"
          >
            Lead Page
          </Link>

          <Link
            to=""
            className="bg-green-400 hover:bg-green-300 text-gray-900 px-5 py-2 rounded transition"
          >
            Dashboard
          </Link>

          <button className="bg-blue-400 hover:bg-blue-300 text-gray-900 px-5 py-2 rounded transition">
            Reports
          </button>

          <button className="bg-purple-400 hover:bg-purple-300 text-gray-900 px-5 py-2 rounded transition">
            Settings
          </button>

          <button className="bg-orange-400 hover:bg-orange-300 text-gray-900 px-5 py-2 rounded transition">
            Help
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-200 px-4 py-4 flex flex-col gap-2">
          <Link
            to="/lead-page"
            className="bg-pink-400 hover:bg-pink-300 text-gray-900 px-5 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            Lead Page
          </Link>

          <Link
            to="/dashboard"
            className="bg-green-400 hover:bg-green-300 text-gray-900 px-5 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>

          <button className="bg-blue-400 hover:bg-blue-300 text-gray-900 px-5 py-2 rounded transition">
            Reports
          </button>

          <button className="bg-purple-400 hover:bg-purple-300 text-gray-900 px-5 py-2 rounded transition">
            Settings
          </button>

          <button className="bg-orange-400 hover:bg-orange-300 text-gray-900 px-5 py-2 rounded transition">
            Help
          </button>
        </div>
      )}
    </header>

  );
};

export default Navbar;
