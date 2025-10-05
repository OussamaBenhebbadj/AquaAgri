import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SupplierProfile from "./pages/SupplierProfile";
import ContactSupplier from "./pages/ContactSupplier";


function Layout() {
  const location = useLocation();

  // On cache la navbar et le footer sur /login et /register
  const hideLayout = ["/login", "/register"].includes(location.pathname);

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
