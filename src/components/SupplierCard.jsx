import React from "react";
import { Link } from "react-router-dom";

const SupplierCard = ({ id, name, description, verified, topRated, logo }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition">
      {/* Logo */}
      <img
        src={logo}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-4 bg-gray-100"
      />

      {/* Name + Description */}
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>

      {/* Badges */}
      <div className="flex gap-2 mb-3 flex-wrap justify-center">
        {verified && (
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            Verified
          </span>
        )}
        {topRated && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            Top Rated
          </span>
        )}
      </div>

      {/* View Profile button */}
      <Link to={`/supplier/${id}`} className="w-full">
        <button className="bg-sky-600 text-white w-full py-2 rounded-lg hover:bg-sky-700 transition">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default SupplierCard;
