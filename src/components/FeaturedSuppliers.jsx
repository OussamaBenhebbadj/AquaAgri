import React from "react";
import SupplierCard from "./SupplierCard";

const suppliers = [
  {
    id: 1,
    name: "AgriTech Solutions",
    description: "Innovative farming technology and smart solutions.",
    verified: true,
    topRated: true,
    logo: "/img1.png",
  },
  {
    id: 2,
    name: "AquaFarms Inc.",
    description: "Sustainable aquaculture practices and products.",
    verified: true,
    topRated: true,
    logo: "/img2.png",
  },
  {
    id: 3,
    name: "CropMaster Supplies",
    description: "High-quality seeds, fertilizers and equipment.",
    verified: true,
    topRated: true,
    logo: "/img3.png",
  },
  {
    id: 4,
    name: "FishFeed Innovations",
    description: "Advanced and sustainable fish feed solutions.",
    verified: true,
    topRated: false,
    logo: "/img4.png",
  },
];

const FeaturedSuppliers = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">
        Featured Suppliers
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {suppliers.map((supplier) => (
          <SupplierCard key={supplier.id} {...supplier} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSuppliers;
