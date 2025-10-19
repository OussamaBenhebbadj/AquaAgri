import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Eye, Trash2 } from 'lucide-react';
import HeaderSuppliers from '../components/HeaderSuppliers';

const Listings = () => {
  const [listings, setListings] = useState([
    { id: 1, name: 'AquaFeed Pro', category: 'Fish Feed', status: 'Active', stock: '1500 kg' },
    { id: 2, name: 'CropBoost Fertilizer', category: 'Fertilizer', status: 'Active', stock: '800 kg' },
    { id: 3, name: 'PondGuard Probiotics', category: 'Probiotics', status: 'Active', stock: '1200 kg' },
    { id: 4, name: 'AquaClean Water Treatment', category: 'Water Treatment', status: 'Inactive', stock: '0 kg' },
    { id: 5, name: 'Seedling Starter Mix', category: 'Seedling Mix', status: 'Draft', stock: '0 kg' },
  ]);

  const [filter, setFilter] = useState('Active');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredListings = listings.filter(item => {
    const matchesFilter = filter === 'All' || item.status === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-100 text-emerald-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDelete = (id) => {
    setListings(listings.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <HeaderSuppliers />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-4xl font-bold text-gray-900">My Listings</h1>
          <Link to="/listings/add-new-listing">
            <button className="w-full sm:w-auto bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition flex items-center justify-center gap-2 font-medium">
              <Plus size={20} />
              Add New Listing
            </button>
          </Link>
          
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search listings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <span className="absolute right-3 top-3 text-gray-400">🔍</span>
          </div>
          
          <div className="flex gap-2 overflow-x-auto sm:overflow-visible">
            {['All', 'Active', 'Inactive'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                  filter === status
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-emerald-500'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Table - Desktop View */}
        <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">PRODUCT NAME</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CATEGORY</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">STATUS</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">STOCK</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredListings.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 text-gray-600">{item.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.stock}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2 hover:bg-gray-200 rounded transition" title="Edit">
                        <Edit2 size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded transition" title="View">
                        <Eye size={18} className="text-gray-600" />
                      </button>
                      {item.status === 'Draft' && (
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="p-2 hover:bg-red-100 rounded transition" 
                          title="Delete"
                        >
                          <Trash2 size={18} className="text-red-600" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards - Mobile View */}
        <div className="md:hidden space-y-4">
          {filteredListings.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Stock: <span className="font-medium">{item.stock}</span></p>
              </div>
              <div className="flex gap-2 pt-2 border-t border-gray-200">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded transition text-gray-700 font-medium">
                  <Edit2 size={16} /> Edit
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-50 rounded transition text-gray-700 font-medium">
                  <Eye size={16} /> View
                </button>
                {item.status === 'Draft' && (
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-red-50 rounded transition text-red-600 font-medium"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Listings;