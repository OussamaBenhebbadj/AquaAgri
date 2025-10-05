import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl text-sky-700"><img src="/images/logo.png" alt="logo" className="w-32 h-18" /></Link>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-700 transition">
            About
          </a>
          <a href="#" className="hover:text-green-700 transition">
            Contact
          </a>
          <a href="#" className="hover:text-green-700 transition">
            Help
          </a>
        </nav>

        {/* Menu button mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
          <nav className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            <a
              href="#"
              className="hover:text-green-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-green-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:text-green-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Help
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AuthHeader;
