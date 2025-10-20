import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Printer } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderAquaculture from '../components/HeaderAquaculture';

const OrderClientDetails = () => {
  const { idOrder } = useParams();
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

  const order = orders.find(o => o.id === idOrder);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center mt-24">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600 mb-4">Order not found</p>
          <button
            onClick={() => navigate('/orders-history')}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Back to Orders
          </button>
        </main>
      </div>
    );
  }

  const getStatusColor = (status) => {
    const statusColors = {
      'Delivered': 'bg-emerald-100 text-emerald-700',
      'Shipped': 'bg-blue-100 text-blue-700',
      'Processing': 'bg-yellow-100 text-yellow-700',
      'In Transit': 'bg-emerald-100 text-emerald-700',
    };
    return statusColors[status] || 'bg-gray-100 text-gray-700';
  };

  const getProgressPercentage = (status) => {
    const progress = {
      'Processing': 30,
      'In Transit': 70,
      'Delivered': 100,
      'Shipped': 50,
    };
    return progress[status] || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-24">
      <HeaderAquaculture />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <button 
            onClick={() => navigate('/orders-history')}
            className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium transition"
          >
            <ArrowLeft size={16} />
            My Orders
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Order Details</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Details</h1>
          <p className="text-emerald-600 text-sm">
            Order <span className="font-semibold">#{order.id}</span> • Placed on {order.date}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column - Order Summary & Payment */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </div>
                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm text-emerald-600">{item.unitPrice} each</p>
                    </div>
                    {/* Price */}
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment & Shipping */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Payment & Shipping</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">Payment Method</p>
                  <p className="text-gray-900 font-semibold">{order.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">Shipping Address</p>
                  <p className="text-gray-900 font-semibold">{order.shippingName}</p>
                  <p className="text-gray-700">{order.shippingAddress}</p>
                  <p className="text-gray-700">{order.shippingCity}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Status & Total */}
          <div className="space-y-6">
            {/* Order Status */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Status</h2>
              
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart size={24} className="text-emerald-600" />
                <div>
                  <p className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {order.status}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage(order.status)}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Estimated Delivery: <span className="font-semibold text-gray-900">{order.estimatedDelivery}</span>
              </p>
            </div>

            {/* Total */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Total</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">{order.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">{order.shipping}</span>
                </div>
                <div className="pt-3 border-t border-gray-200 flex justify-between">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-emerald-600">{order.total}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold">
                <ShoppingCart size={18} />
                Reorder Items
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-emerald-100 text-emerald-700 py-3 rounded-lg hover:bg-emerald-50 transition font-semibold">
                <Printer size={18} />
                Print Invoice
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderClientDetails;