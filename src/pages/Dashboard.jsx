import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import HeaderSuppliers from '../components/HeaderSuppliers';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Sales Trend Data
  const salesTrendData = [
    { name: 'Week 1', sales: 4000 },
    { name: 'Week 2', sales: 3000 },
    { name: 'Week 3', sales: 2000 },
    { name: 'Week 4', sales: 2780 },
    { name: 'Week 5', sales: 1890 },
    { name: 'Week 6', sales: 2390 },
    { name: 'Week 7', sales: 3490 },
    { name: 'Week 8', sales: 3800 },
  ];

  // Top Selling Products
  const topProducts = [
    { name: 'Tilapia Feed', sales: '120 units', revenue: '$6,000' },
    { name: 'Shrimp Larvae', sales: '85 units', revenue: '$8,500' },
    { name: 'Fish Nets', sales: '50 units', revenue: '$5,000' },
  ];

  // Listing Performance
  const listingPerformance = [
    { name: 'Tilapia Feed', views: '500', conversion: '5%' },
    { name: 'Shrimp Larvae', views: '350', conversion: '7%' },
    { name: 'Fish Nets', views: '200', conversion: '3%' },
  ];

  const StatCard = ({ title, value, change, trend }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <p className="text-gray-600 text-sm font-medium">{title}</p>
      <div className="mt-2 flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        <div className={`flex items-center gap-1 text-sm font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {change}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSuppliers />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your performance and optimize your listings.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {['Overview', 'Product Performance'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium transition border-b-2 ${
                activeTab === tab
                  ? 'text-gray-900 border-b-emerald-500 text-emerald-600'
                  : 'text-gray-600 border-b-transparent hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Sales" value="$25,450" change="+15%" trend="up" />
              <StatCard title="Total Orders" value="352" change="+8%" trend="up" />
              <StatCard title="Avg. Order Value" value="$72.30" change="-21%" trend="down" />
              <StatCard title="Conversion Rate" value="4.7%" change="+0.5%" trend="up" />
            </div>

            {/* Sales Trend Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Sales Trend</h2>
                  <p className="text-gray-600 text-sm mt-1">Last 30 Days</p>
                </div>
                <div className="flex gap-2 text-sm">
                  {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map(week => (
                    <button key={week} className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded transition">
                      {week}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesTrendData}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      formatter={(value) => `$${value}`}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorSales)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Selling Products */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Top Selling Products</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">PRODUCT</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SALES</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">REVENUE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {topProducts.map((product, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                        <td className="px-6 py-4 text-gray-600">{product.sales}</td>
                        <td className="px-6 py-4 text-gray-600">{product.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Listing Performance */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Listing Performance</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">PRODUCT</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">PAGE VIEWS</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">CONVERSION RATE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {listingPerformance.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 text-gray-600">{item.views}</td>
                        <td className="px-6 py-4 text-gray-600">{item.conversion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Product Performance' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Product Performance Data</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;