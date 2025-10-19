import React from 'react';
import { Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const HeaderSuppliers = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`font-medium transition ${
        isActive(to)
          ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1'
          : 'text-gray-700 hover:text-emerald-600'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl text-sky-700">
            <img src="/images/logo.png" alt="logo" className="w-32 h-18" />
          </Link>
        </div>
        
        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/listings">Listings</NavLink>
          <NavLink to="/support">Support</NavLink>
        </div>

        {/* Right Side - Notifications & Profile */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Bell size={20} className="text-gray-600" />
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full cursor-pointer hover:opacity-90 transition"></div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderSuppliers;