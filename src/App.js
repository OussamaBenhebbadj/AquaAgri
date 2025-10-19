import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SupplierProfile from "./pages/SupplierProfile";
import ContactSupplier from "./pages/ContactSupplier";
import AquacultureCategories from "./pages/AquacultureCategories";
import AquacultureProductsDetails from "./pages/AquacultureProductsDetails";
import MyCart from "./pages/MyCart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Listings from "./pages/Listings";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import AccountSettings from "./pages/AccountSettings";
import AddListing from "./pages/AddListing";


function Layout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/cart" ||
    location.pathname === "/cart/checkout" ||
    location.pathname === "/cart/checkout/confirm" ||
    location.pathname === "/listings" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/orders" ||
    location.pathname === "/messages" ||
    location.pathname === "/account" ||
    location.pathname.startsWith("/aquaculture/products") ||
    location.pathname.startsWith("/listings");

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/supplier/:id" element={<SupplierProfile />} />
          <Route path="/supplier/:id/contact" element={<ContactSupplier />} />
          <Route path="/aquaculture/products" element={<AquacultureCategories />} />
          <Route path="/aquaculture/products/:id" element={<AquacultureProductsDetails />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/cart/checkout/confirm" element={<OrderConfirmation />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/add-new-listing" element={<AddListing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
