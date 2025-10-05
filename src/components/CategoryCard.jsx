import React from "react";

const CategoryCard = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-lg transition">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-sky-600 font-medium flex items-center gap-1">
        Explore {title} →
      </a>
    </div>
  );
};

export default CategoryCard;
