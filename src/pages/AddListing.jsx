import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import HeaderSuppliers from '../components/HeaderSuppliers';

export default function AddListing() {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    category: '',
    subCategory: '',
    price: '',
    stockQuantity: '',
    specifications: '',
    shippingMethod: '',
    shippingCost: '',
    images: []
  });

  const [imagePreview, setImagePreview] = useState([]);

  const categories = [
    'Select Category',
    'Fish Feed',
    'Aquaculture Equipment',
    'Plants',
    'Supplements'
  ];

  const subCategories = {
    'Fish Feed': ['Organic Feed', 'Premium Pellets', 'Specialty Blend'],
    'Aquaculture Equipment': ['Tanks', 'Filters', 'Aerators'],
    'Plants': ['Aquatic Plants', 'Dry Plants'],
    'Supplements': ['Vitamins', 'Minerals', 'Probiotics']
  };

  const shippingMethods = [
    'Select Shipping Method',
    'Standard Shipping',
    'Express Shipping',
    'Overnight Shipping',
    'Local Pickup'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    processImages(files);
  };

  const handleImageSelect = (e) => {
    const files = e.target.files;
    processImages(files);
  };

  const processImages = (files) => {
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(prev => [...prev, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImagePreview(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    console.log('Saving draft:', formData);
    alert('Draft saved successfully!');
  };

  const handlePublish = () => {
    console.log('Publishing listing:', formData);
    alert('Listing published successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSuppliers />
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Listing</h1>
        <p className="text-gray-600">Create a new product listing to be published on the marketplace.</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Product Details */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Product Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  placeholder="e.g., Organic Tilapia Feed"
                  value={formData.productName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
                <textarea
                  name="productDescription"
                  placeholder="Provide a detailed description of your product"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sub-Category</label>
                  <select
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option>Select Sub-Category</option>
                    {formData.category && subCategories[formData.category]?.map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing & Stock */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Pricing & Stock</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (USD)</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="e.g., 25.99"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
                  <input
                    type="number"
                    name="stockQuantity"
                    placeholder="e.g., 1000"
                    value={formData.stockQuantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specifications (Optional)</label>
                <textarea
                  name="specifications"
                  placeholder="e.g., Dimensions, Materials"
                  value={formData.specifications}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </section>

          {/* Product Images */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Product Images/Videos</h2>
            
            <div
              onDrop={handleImageDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-emerald-300 rounded-lg p-12 text-center hover:border-emerald-500 transition-colors cursor-pointer"
            >
              <Upload className="mx-auto text-emerald-500 mb-3" size={40} />
              <p className="text-gray-700 mb-1">
                Drag & drop files or <button
                  type="button"
                  className="text-emerald-500 hover:text-emerald-600 font-medium"
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  browse
                </button>
              </p>
              <p className="text-sm text-gray-500">Supported formats: JPEG, PNG, MP4</p>
              <input
                id="fileInput"
                type="file"
                multiple
                accept="image/*,video/mp4"
                onChange={handleImageSelect}
                hidden
              />
            </div>

            {/* Image Preview */}
            {imagePreview.length > 0 && (
              <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {imagePreview.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Shipping Options */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Shipping Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Method</label>
                <select
                  name="shippingMethod"
                  value={formData.shippingMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {shippingMethods.map(method => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Cost (USD)</label>
                <input
                  type="number"
                  name="shippingCost"
                  placeholder="e.g., 5.99"
                  value={formData.shippingCost}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pb-8">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2.5 border border-emerald-500 text-emerald-500 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={handlePublish}
              className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors"
            >
              Publish Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}