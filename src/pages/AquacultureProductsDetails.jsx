import React from "react";
import { Star } from "lucide-react";
import HeaderAquaculture from "../components/HeaderAquaculture";

const AquacultureProductsDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <HeaderAquaculture />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div>
            <img
              src="/images/large-basin.jpg"
              alt="Large Capacity Circular Basin"
              className="rounded-xl w-full h-[400px] object-cover shadow-md"
            />
          </div>

          {/* Product Info */}
          <div>
            <p className="text-gray-500 text-sm mb-2">
              Aquaculture / Equipment / Basin
            </p>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Large Capacity Circular Basin
            </h1>
            <p className="text-gray-600 mb-6">
              This circular basin is designed for large-scale aquaculture
              operations, providing ample space for fish growth and easy
              management. Constructed with durable, non-toxic materials, it
              ensures a safe and healthy environment for aquatic life.
            </p>

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow p-5 mb-6">
              <h2 className="font-semibold text-gray-800 mb-3">
                Specifications
              </h2>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <span className="font-medium text-gray-700">Dimensions:</span>{" "}
                  10m diameter × 1.5m height
                </li>
                <li>
                  <span className="font-medium text-gray-700">Material:</span>{" "}
                  High-density polyethylene (HDPE)
                </li>
                <li>
                  <span className="font-medium text-gray-700">Capacity:</span>{" "}
                  100,000 liters
                </li>
                <li>
                  <span className="font-medium text-gray-700">
                    Suitable Species:
                  </span>{" "}
                  Tilapia, Catfish, Trout
                </li>
              </ul>
            </div>

            {/* Price & Button */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-gray-800">$2,500</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Seller Info */}
            <div className="flex items-center space-x-3">
              <img
                src="/images/aquatech-logo.png"
                alt="Seller"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-800 font-medium">
                  AquaTech Solutions
                </p>
                <a
                  href="#"
                  className="text-blue-500 text-sm hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Detailed Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our large-capacity circular basin is engineered for optimal fish
            farming. Its circular design promotes uniform water flow and reduces
            dead zones, ensuring even distribution of oxygen and nutrients. The
            HDPE construction offers excellent resistance to UV radiation and
            chemical corrosion, guaranteeing long-term durability. This basin is
            ideal for various aquaculture applications, including grow-out
            systems, hatcheries, and research facilities.
          </p>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Reviews</h2>
          <div className="flex items-center mb-4">
            <span className="text-4xl font-bold mr-2">4.5</span>
            <div className="flex text-yellow-400">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star />
            </div>
            <span className="ml-2 text-gray-500 text-sm">(23 reviews)</span>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <p className="font-medium text-gray-800">Liam Carter</p>
              <p className="text-sm text-gray-500 mb-2">1 month ago</p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                Excellent basin! The size is perfect for our needs, and the
                material is very sturdy. Highly recommend.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm">
              <p className="font-medium text-gray-800">Sophia Bennett</p>
              <p className="text-sm text-gray-500 mb-2">2 weeks ago</p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                Good quality basin, but the installation instructions could be
                clearer.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "/images/water-filtration.jpg",
                title: "Water Filtration System",
                desc: "Advanced filtration for clean water",
              },
              {
                image: "/images/fish-feeder.jpg",
                title: "Automatic Fish Feeder",
                desc: "Efficient feeding for optimal growth",
              },
              {
                image: "/images/oxygen-diffuser.jpg",
                title: "Oxygen Diffuser",
                desc: "Enhances oxygen levels in the basin",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-gray-800 font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2024 AquaTrade. All rights reserved.</p>
          <div className="space-x-4 mt-2">
            <a href="#" className="hover:text-gray-700">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-700">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-700">
              Contact Us
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AquacultureProductsDetails;
