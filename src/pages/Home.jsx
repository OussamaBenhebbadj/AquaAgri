import React from "react";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import FeaturedSuppliers from "../components/FeaturedSuppliers";
import Footer from "../components/Footer";

import { Droplet, Leaf } from "lucide-react";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="grid gap-6 sm:grid-cols-2 px-6 max-w-5xl mx-auto">
        <CategoryCard
          title="Aquaculture"
          description="Explore a wide range of products including fish, feed, basins, and equipment for all your aquaculture needs."
          icon={<Droplet className="text-sky-600 w-10 h-10" />}
          link="/aquaculture/products"
        />
        <CategoryCard
          title="Agriculture"
          description="Find high-quality seeds, fertilizers, agricultural machinery, and more from trusted suppliers."
          icon={<Leaf className="text-green-600" />}
          link="#"
        />
      </section>

      <FeaturedSuppliers />
      <Footer />
    </>
  );
};

export default Home;
