import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <Mail size={32} className="text-emerald-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Check your email</h1>
          <p className="text-gray-600 mb-2">
            We've sent password reset instructions to:
          </p>
          <p className="text-emerald-600 font-semibold mb-8">{email}</p>

          <p className="text-gray-600 text-sm mb-8">
            Please check your email and follow the instructions to reset your password. If you don't receive an email within a few minutes, please check your spam folder.
          </p>

          {/* Back to Login */}
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold mb-4"
          >
            Return to Login
          </button>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setEmail('');
            }}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Send to different email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">✓</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Forgot your password?
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-8">
          Enter your email and we'll send you instructions to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send reset instructions'}
          </button>
        </form>

        {/* Return to Login */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/login')}
            className="text-emerald-600 hover:text-emerald-700 font-medium transition"
          >
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;