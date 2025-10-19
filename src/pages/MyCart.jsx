import React from "react";
import { Trash2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeaderAquaculture from "../components/HeaderAquaculture";
import { Link } from "react-router-dom";

const MyCart = () => {
  const navigate = useNavigate();

  const cartItems = [
    { id: 1, product: "Tilapia Feed", quantity: 2, price: 50 },
    { id: 2, product: "Shrimp Larvae", quantity: 100, price: 0.1 },
    { id: 3, product: "Water Quality Test Kit", quantity: 1, price: 75 },
  ];

  const subtotal = cartItems.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <>
    <HeaderAquaculture /> 
    <div className="bg-gray-50 min-h-screen pt-28 pb-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-sm rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-500 text-sm">
                <th className="pb-3">Product</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Unit Price</th>
                <th className="pb-3">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b last:border-none">
                  <td className="py-4 text-gray-800">{item.product}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      className="w-16 text-center border rounded-lg py-1"
                      readOnly
                    />
                  </td>
                  <td className="text-gray-700">${item.price.toFixed(2)}</td>
                  <td className="text-gray-800 font-medium">
                    ${(item.quantity * item.price).toFixed(2)}
                  </td>
                  <td className="text-gray-500 hover:text-red-500 cursor-pointer">
                    <Trash2 size={16} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-6">
          <button
            onClick={() => navigate("/aquaculture/products")}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </button>

          <div className="text-right space-y-1">
            <p className="text-gray-500 text-sm">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="text-gray-500 text-sm">Shipping: TBD</p>
            <p className="text-gray-800 font-semibold text-lg">
              Estimated Total: ${subtotal.toFixed(2)}
            </p>
            <Link to="/cart/checkout">
                <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg transition">
                Proceed to Checkout →
                </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyCart;
