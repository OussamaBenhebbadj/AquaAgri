import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeaderAquaculture from '../components/HeaderAquaculture';

const OrdersHistory = () => {
  const navigate = useNavigate();
  
  const [orders] = useState([
    {
      id: '1234567890',
      date: 'July 15, 2024',
      total: '$430.00',
      status: 'In Transit',
      subtotal: '$430.00',
      shipping: 'Free',
      paymentMethod: 'BaridiMOB',
      shippingName: 'John Doe',
      shippingAddress: '123 Aqua Farm Lane',
      shippingCity: 'Fishery Town, ST 54321',
      estimatedDelivery: 'July 20, 2024',
      items: [
        {
          name: 'Tilapia Feed',
          quantity: '5 bags',
          unitPrice: '$50.00',
          price: '$250.00',
          image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=100&h=100&fit=crop'
        },
        {
          name: 'Water Quality Test Kit',
          quantity: '1',
          unitPrice: '$120.00',
          price: '$120.00',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&h=100&fit=crop'
        },
        {
          name: 'Fish Net',
          quantity: '2',
          unitPrice: '$30.00',
          price: '$60.00',
          image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: '#12346',
      date: 'July 10, 2024',
      total: '$180.00',
      status: 'Shipped',
      subtotal: '$180.00',
      shipping: 'Free',
      paymentMethod: 'Credit Card',
      shippingName: 'Jane Smith',
      shippingAddress: '456 Marine Court',
      shippingCity: 'Ocean City, ST 54322',
      estimatedDelivery: 'July 18, 2024',
      items: [
        {
          name: 'Premium Shrimp Pellets',
          quantity: '3 bags',
          unitPrice: '$50.00',
          price: '$150.00',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop'
        },
        {
          name: 'pH Test Strips',
          quantity: '1',
          unitPrice: '$30.00',
          price: '$30.00',
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: '#12347',
      date: 'July 5, 2024',
      total: '$320.00',
      status: 'Processing',
      subtotal: '$320.00',
      shipping: 'Free',
      paymentMethod: 'PayPal',
      shippingName: 'Mike Johnson',
      shippingAddress: '789 Water Way',
      shippingCity: 'Coastal Town, ST 54323',
      estimatedDelivery: 'July 15, 2024',
      items: [
        {
          name: 'Catfish Feed',
          quantity: '8 bags',
          unitPrice: '$40.00',
          price: '$320.00',
          image: 'https://images.unsplash.com/photo-1585518419759-131cc8b23b9d?w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: '#12348',
      date: 'June 28, 2024',
      total: '$450.00',
      status: 'Delivered',
      subtotal: '$450.00',
      shipping: 'Free',
      paymentMethod: 'Debit Card',
      shippingName: 'Sarah Wilson',
      shippingAddress: '321 Harbor Lane',
      shippingCity: 'Port City, ST 54324',
      estimatedDelivery: 'June 30, 2024',
      items: [
        {
          name: 'Aquatic Plant Food',
          quantity: '5 bottles',
          unitPrice: '$45.00',
          price: '$225.00',
          image: 'https://images.unsplash.com/photo-1529837369250-014b76ba7cb1?w=100&h=100&fit=crop'
        },
        {
          name: 'Oxygen Stone',
          quantity: '2',
          unitPrice: '$112.50',
          price: '$225.00',
          image: 'https://images.unsplash.com/photo-1585518419759-131cc8b23b9d?w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: '#12349',
      date: 'June 20, 2024',
      total: '$120.00',
      status: 'Delivered',
      subtotal: '$120.00',
      shipping: 'Free',
      paymentMethod: 'BaridiMOB',
      shippingName: 'Robert Brown',
      shippingAddress: '654 Bay Street',
      shippingCity: 'Seaside, ST 54325',
      estimatedDelivery: 'June 22, 2024',
      items: [
        {
          name: 'Filter Media',
          quantity: '4 units',
          unitPrice: '$30.00',
          price: '$120.00',
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=100&h=100&fit=crop'
        }
      ]
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    const statusColors = {
      'Delivered': 'bg-emerald-100 text-emerald-700',
      'Shipped': 'bg-emerald-100 text-emerald-700',
      'Processing': 'bg-emerald-100 text-emerald-700',
      'In Transit': 'bg-emerald-100 text-emerald-700',
    };
    return statusColors[status] || 'bg-gray-100 text-gray-700';
  };

  const handleViewDetails = (orderId) => {
    navigate(`/orders-history/${orderId}`);
  };

  return (
    <div className="min-h-screen bg-white mt-24">
      <HeaderAquaculture />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Order History</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700 whitespace-nowrap">
            <Filter size={20} />
            Filter
          </button>
        </div>

        {/* Table - Desktop View */}
        <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Order Number</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-900 font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700">{order.date}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleViewDetails(order.id)}
                      className="text-emerald-600 hover:text-emerald-700 font-medium text-sm hover:underline transition"
                    >
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
            <div key={order.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Order Number</p>
                  <p className="text-gray-900 font-semibold text-lg">{order.id}</p>
                </div>
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {order.status}
                </span>
              </div>

              <div className="space-y-2 border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 font-medium">Date:</span>
                  <span className="text-sm text-gray-900 font-medium">{order.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 font-medium">Total:</span>
                  <span className="text-sm text-gray-900 font-medium">{order.total}</span>
                </div>
              </div>

              <button 
                onClick={() => handleViewDetails(order.id)}
                className="w-full mt-3 text-emerald-600 hover:text-emerald-700 font-medium text-sm hover:underline transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No orders found</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default OrdersHistory;