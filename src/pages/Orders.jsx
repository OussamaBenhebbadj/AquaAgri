import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import HeaderSuppliers from '../components/HeaderSuppliers';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: '#12345', buyer: 'Ocean Harvest Co.', date: '2024-07-26', amount: '$5,000', status: 'Pending' },
    { id: '#12346', buyer: 'Coastal Farms', date: '2024-07-25', amount: '$2,500', status: 'Confirmed' },
    { id: '#12347', buyer: 'Aqua Solutions Ltd.', date: '2024-07-24', amount: '$7,500', status: 'Shipped' },
    { id: '#12348', buyer: 'Marine Foods Inc.', date: '2024-07-23', amount: '$1,200', status: 'Cancelled' },
    { id: '#12349', buyer: 'Deep Blue Seafoods', date: '2024-07-22', amount: '$3,800', status: 'Pending' },
    { id: '#12350', buyer: 'Pacific Aquaculture', date: '2024-07-21', amount: '$6,200', status: 'Confirmed' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');
  const [buyerFilter, setBuyerFilter] = useState('All');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.amount.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Confirmed':
        return 'bg-emerald-100 text-emerald-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSuppliers />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-600 mt-1">Manage and track all orders placed for your products.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search orders by ID, buyer, or product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 overflow-x-auto">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-emerald-500 cursor-pointer transition">
            <span className="text-gray-700 font-medium">Status</span>
            <ChevronDown size={18} className="text-gray-400" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-emerald-500 cursor-pointer transition">
            <span className="text-gray-700 font-medium">Date Range</span>
            <ChevronDown size={18} className="text-gray-400" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-emerald-500 cursor-pointer transition">
            <span className="text-gray-700 font-medium">Buyer</span>
            <ChevronDown size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Table - Desktop View */}
        <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ORDER ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">BUYER</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ORDER DATE</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">TOTAL AMOUNT</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">STATUS</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700">{order.buyer}</td>
                  <td className="px-6 py-4 text-gray-700">{order.date}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm hover:underline transition">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards - Mobile View */}
        <div className="md:hidden space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{order.id}</h3>
                  <p className="text-sm text-gray-600">{order.buyer}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="space-y-2 border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Order Date:</span>
                  <span className="text-sm font-medium text-gray-900">{order.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Amount:</span>
                  <span className="text-sm font-medium text-gray-900">{order.amount}</span>
                </div>
              </div>

              <button className="w-full mt-3 text-emerald-600 hover:text-emerald-700 font-medium text-sm hover:underline transition">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2024 AquaTrade. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-600 transition">Terms</a>
            <a href="#" className="hover:text-emerald-600 transition">Privacy</a>
            <a href="#" className="hover:text-emerald-600 transition">Contact</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;