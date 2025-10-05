import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ContactSupplier = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent to supplier ${id} !`);
  };

  return (
    <section className="flex flex-col items-center py-12 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-2 text-center">Contact Supplier</h1>
      <p className="text-gray-600 mb-8 text-center">
        Have a question? Fill out the form below to get in touch.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="e.g. Alex Johnson"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-green-500"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-green-500"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Inquiry about custom order"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-green-500"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Please provide details about your request..."
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-2 mb-6 focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          type="submit"
          className="bg-emerald-500 text-white w-full py-2 rounded-lg hover:bg-emerald-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSupplier;
