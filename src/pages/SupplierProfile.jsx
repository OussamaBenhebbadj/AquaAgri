import React from "react";
import { useParams, Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function SupplierProfile() {
  const { id } = useParams();
  const supplier = {
    name: "AquaTech Solutions",
    logo: "/images/aquatech-logo.png",
    description: "Leading provider of sustainable aquaculture solutions.",
    rating: 4.5,
    reviewsCount: 120,
    products: [
      {
        id: 1,
        name: "Premium Fish Feed",
        desc: "High-protein feed for optimal growth",
        img: "/images/product1.jpg",
      },
      {
        id: 2,
        name: "Automated Feeding System",
        desc: "Efficient and precise feeding solution",
        img: "/images/product2.jpg",
      },
      {
        id: 3,
        name: "Water Quality Monitoring Kit",
        desc: "Real-time water parameter analysis",
        img: "/images/product3.jpg",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Ethan Carter",
        date: "2 months ago",
        text: "AquaTech’s feed has significantly improved our fish growth rates. Highly recommended!",
        rating: 5,
      },
      {
        id: 2,
        name: "Sophia Lee",
        date: "4 months ago",
        text: "Their equipment is reliable and customer service is excellent. A great partner for our farm.",
        rating: 4,
      },
    ],
    certifications: [
      "/images/cert1.png",
      "/images/cert2.png",
      "/images/cert3.png",
    ],
    contact: {
      address: "123 Ocean Drive, Coastal City, CA 90210",
      phone: "+1 (555) 123-4567",
      email: "info@aquatechsolutions.com",
      website: "www.aquatechsolutions.com",
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={supplier.logo}
          alt={supplier.name}
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold">{supplier.name}</h1>
          <p className="text-gray-600">{supplier.description}</p>
          <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{supplier.rating}</span>
            <span className="text-gray-500">({supplier.reviewsCount} reviews)</span>
          </div>
        </div>
        <Link to={`/supplier/${id}/contact`}>
          <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600">
            Contact Supplier
          </button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex mt-8 border-b border-gray-200">
        <button className="text-green-600 font-medium border-b-2 border-green-600 pb-2 mr-6">
          Products
        </button>
        <button className="text-gray-600 hover:text-green-600 pb-2 mr-6">
          Reviews
        </button>
        <button className="text-gray-600 hover:text-green-600 pb-2">
          About
        </button>
      </div>

      {/* Featured Products */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {supplier.products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-gray-500 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {supplier.reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div>
                <h4 className="font-medium">{r.name}</h4>
                <p className="text-sm text-gray-500">{r.date}</p>
                <p className="mt-2 text-gray-700">{r.text}</p>
              </div>
              <div className="flex items-center gap-1 mt-2 sm:mt-0">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Certifications & Accreditations
        </h2>
        <div className="flex flex-wrap gap-6">
          {supplier.certifications.map((cert, i) => (
            <img
              key={i}
              src={cert}
              alt="Certification"
              className="w-32 h-40 object-contain bg-white p-2 rounded-xl shadow"
            />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">About {supplier.name}</h2>
        <p className="text-gray-600 leading-relaxed">
          AquaTech Solutions is a leading provider of innovative and sustainable
          aquaculture solutions. We are committed to helping fish farmers improve
          their productivity and profitability while minimizing environmental
          impact. Our products are designed with the latest technology and are
          backed by a team of experts dedicated to customer success.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Contact Information</h3>
          <div className="text-gray-600 space-y-1">
            <p><strong>Address:</strong> {supplier.contact.address}</p>
            <p><strong>Phone:</strong> {supplier.contact.phone}</p>
            <p><strong>Email:</strong> {supplier.contact.email}</p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`https://${supplier.contact.website}`}
                target="_blank"
                className="text-green-600 hover:underline"
              >
                {supplier.contact.website}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Back button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="text-green-600 hover:text-green-700 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
