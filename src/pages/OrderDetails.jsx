import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import HeaderSuppliers from '../components/HeaderSuppliers';

const OrderDetails = ({ order, onBack }) => {
  const getStatusColor = (status) => {
    const statusColors = {
      'Processing': 'bg-emerald-100 text-emerald-800',
      'Confirmed': 'bg-emerald-100 text-emerald-800',
      'Shipped': 'bg-blue-100 text-blue-800',
      'Cancelled': 'bg-red-100 text-red-800',
    };
    return statusColors[status] || 'bg-gray-100 text-gray-800';
  };

  const calculateTotal = (products) => {
    return products.reduce((sum, prod) => {
      const amount = parseFloat(prod.subtotal.replace('$', '').replace(',', ''));
      return sum + amount;
    }, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSuppliers />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <button 
            onClick={onBack}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft size={16} />
            Orders
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Order Details</span>
        </div>

        {/* Order Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Order {order.id}</h1>
              <p className="text-gray-600 mt-2">Placed on {order.placedDate}</p>
            </div>
            <span className={`px-4 py-2 rounded-full font-medium ${getStatusColor(order.orderStatus)}`}>
              {order.orderStatus}
            </span>
          </div>
        </div>

        {/* Buyer and Shipping Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Buyer Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Buyer Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm font-medium">Name</p>
                <p className="text-gray-900 font-semibold">{order.buyerName}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Contact</p>
                <p className="text-gray-900 font-semibold">{order.buyerEmail}</p>
              </div>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm font-medium">Address</p>
                <p className="text-gray-900 font-semibold">{order.shippingAddress}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Method</p>
                <p className="text-gray-900 font-semibold">{order.shippingMethod}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Products</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Quantity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Unit Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {order.products.map((product, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-gray-900 font-medium">{product.name}</td>
                    <td className="px-6 py-4 text-gray-700">{product.quantity}</td>
                    <td className="px-6 py-4 text-gray-700">{product.unitPrice}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{product.subtotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
            <div className="text-right">
              <p className="text-gray-600 text-sm">Total</p>
              <p className="text-2xl font-bold text-emerald-600">${calculateTotal(order.products)}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700">
            <Printer size={18} />
            Print Invoice
          </button>
          <button className="px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700">
            Contact Buyer
          </button>
          <button className="px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium">
            Mark as Shipped
          </button>
        </div>
      </main>
    </div>
  );
};

export default OrderDetails;