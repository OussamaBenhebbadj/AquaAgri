import React, { useState } from 'react';
import HeaderSuppliers from '../components/HeaderSuppliers';
import { Search, Plus, MessageCircle } from 'lucide-react';

export default function Messages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Organic Feed Inquiry',
      sender: 'Sarah Johnson',
      avatar: '👩‍💼',
      message: 'Hi Alex, I\'m interested in your latest batch of organic feed. Could you provide more details on the protein content and pricing?',
      time: '2d',
      unread: true
    },
    {
      id: 2,
      name: 'Order #12345 Update',
      sender: 'John Smith',
      avatar: '👨‍💼',
      message: 'The shipment for order #12345 has been dispatched. You can track it using the provided tracking number.',
      time: '1w',
      unread: false
    },
    {
      id: 3,
      name: 'Custom Feed Mix Request',
      sender: 'Mike Chen',
      avatar: '👨‍💼',
      message: 'We\'ve received your request for a custom feed mix. Our team is working on a proposal and will get back to you within 24 hours.',
      time: '2w',
      unread: false
    },
    {
      id: 4,
      name: 'Payment Confirmation',
      sender: 'Emma Wilson',
      avatar: '👩‍💼',
      message: 'Your payment for order #67890 has been processed successfully. Thank you for your business!',
      time: '1mo',
      unread: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSuppliers />;
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Messages</h1>
          <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
            Compose New Message
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search messages"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Inbox Label */}
          <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Inbox</h2>
          </div>

          {/* Messages */}
          {filteredMessages.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`px-4 sm:px-6 lg:px-8 py-4 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 ${
                    msg.unread ? 'border-emerald-500 bg-emerald-50' : 'border-transparent'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Avatar */}
                    <div className="text-3xl flex-shrink-0">{msg.avatar}</div>

                    {/* Message Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {msg.name}
                        </h3>
                        <span className="text-sm text-gray-500 flex-shrink-0">{msg.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {msg.message}
                      </p>
                    </div>

                    {/* Unread Indicator */}
                    {msg.unread && (
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-4 sm:px-6 lg:px-8 py-16 text-center">
              <MessageCircle className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 text-lg">No messages found</p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 sm:hidden">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-colors">
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
}