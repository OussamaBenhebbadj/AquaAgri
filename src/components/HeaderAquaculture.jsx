import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // fonction pour style actif
  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 rounded-full"
      : "text-gray-700";

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/images/logo.png"
            alt="AquaAgri Logo"
            className="w-7 h-7 object-contain"
          />
          <span className="font-bold text-lg text-gray-800">AquaAgri</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link
            to="/aquaculture/categories"
            className={`${isActive("/aquaculture/categories")} hover:text-blue-600 transition`}
          >
            Categories
          </Link>
          <Link
            to="/suppliers"
            className={`${isActive("/suppliers")} hover:text-blue-600 transition`}
          >
            Suppliers
          </Link>
          <Link
            to="/about"
            className={`${isActive("/about")} hover:text-blue-600 transition`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`${isActive("/contact")} hover:text-blue-600 transition`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center space-x-3">
          <button className="hidden sm:block bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-full transition">
            Request for Quote
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-full transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
