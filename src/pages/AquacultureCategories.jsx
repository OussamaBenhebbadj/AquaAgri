import React from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, LayoutGrid } from "lucide-react";
import HeaderAquaculture from "../components/HeaderAquaculture";

const aquacultureProducts = [
  {
    id: 1,
    title: "Fish Feed",
    description: "High-quality feed for various fish species.",
    image: "/images/fish-feed.jpg",
  },
  {
    id: 2,
    title: "Water Treatment",
    description: "Solutions for maintaining water quality.",
    image: "/images/water-treatment.jpg",
  },
  {
    id: 3,
    title: "Fish Tanks",
    description: "Durable tanks for fish farming.",
    image: "/images/fish-tanks.jpg",
  },
  {
    id: 4,
    title: "Aeration Systems",
    description: "Efficient aeration systems for oxygen supply.",
    image: "/images/aeration.jpg",
  },
  {
    id: 5,
    title: "Fish Vaccines",
    description: "Vaccines to prevent fish diseases.",
    image: "/images/fish-vaccines.jpg",
  },
  {
    id: 6,
    title: "Monitoring Equipment",
    description: "Equipment for monitoring water parameters.",
    image: "/images/monitoring.jpg",
  },
  {
    id: 7,
    title: "Harvesting Tools",
    description: "Tools for harvesting fish.",
    image: "/images/harvesting.jpg",
  },
  {
    id: 8,
    title: "Consulting Services",
    description: "Expert advice on aquaculture practices.",
    image: "/images/consulting.jpg",
  },
];

const AquacultureCategories = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <HeaderAquaculture />

      <div className="px-4 sm:px-8 py-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
            Aquaculture Products
          </h1>

          <div className="flex space-x-2">
            <button className="p-2 rounded-md border hover:bg-gray-100 transition">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-md border hover:bg-gray-100 transition">
              <LayoutGrid className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aquacultureProducts.map((item) => (
            <Link
              key={item.id}
              to={`/aquaculture/products/${item.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AquacultureCategories;
