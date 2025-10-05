import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-bold text-xl text-sky-700"><img src="/images/logo.png" alt="logo" className="w-32 h-18" /></Link>
      </div>

      <div className="hidden md:flex flex-1 justify-center px-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>

      <div className="flex items-center gap-3">
        <Link to="/login" className="text-gray-700 hover:text-sky-600">
          Login
        </Link>
        <Link
          to="/register"
          className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
