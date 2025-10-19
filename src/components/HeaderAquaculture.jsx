import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

const HeaderAquaculture = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
                <Link to="/" className="font-bold text-xl text-sky-700"><img src="/images/logo.png" alt="logo" className="w-32 h-18" /></Link>
        </div>

        {/* Center: Nav links (desktop) */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          <Link to="/aquaculture/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link to="/suppliers" className="hover:text-blue-600">
            Suppliers
          </Link>
          <Link to="/resources" className="hover:text-blue-600">
            Resources
          </Link>
          <Link to="/community" className="hover:text-blue-600">
            Community
          </Link>
        </nav>

        {/* Center: Search bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1.5 w-72">
          <Search size={16} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none text-sm flex-1 text-gray-700"
          />
        </div>

        {/* Right: Cart + Avatar */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/cart")}
            className="relative text-gray-600 hover:text-blue-600"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <img
            src="/images/user-avatar.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
            onClick={() => navigate("/profile")}
          />

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col space-y-3 px-6 py-4 text-gray-600 font-medium">
            <Link to="/products">Products</Link>
            <Link to="/suppliers">Suppliers</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/community">Community</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderAquaculture;
