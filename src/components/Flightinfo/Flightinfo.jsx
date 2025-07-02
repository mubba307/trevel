'use client';
import React, { useState } from 'react';

export default function Flightinfo() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    takeoffTime: '',
    status: '',
    passengers: 1,
    flightClass: '',
    extraLuggage: false,
    promoCode: '',
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    alert('Flight booked! (In a real app, this would be sent to the backend)');
  };

  const handleCancelBooking = () => {
    setFormData((prev) => ({ ...prev, status: 'Cancelled' }));
    alert('Flight booking has been cancelled!');
  };

  const handleReset = () => {
    setFormData({
      from: '',
      to: '',
      date: '',
      takeoffTime: '',
      status: '',
      passengers: 1,
      flightClass: '',
      extraLuggage: false,
      promoCode: '',
    });
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} max-w-xl mx-auto shadow-md p-6 rounded-xl mt-10`}>
      
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">
        Book a Flight
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* From */}
        <div>
          <label className="block text-sm font-semibold mb-1">From</label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Enter departure location"
            required
          />
        </div>

        {/* To */}
        <div>
          <label className="block text-sm font-semibold mb-1">To</label>
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Enter destination"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-semibold mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-black"
            required
          />
        </div>

        {/* Takeoff Time */}
        <div>
          <label className="block text-sm font-semibold mb-1">Takeoff Time</label>
          <input
            type="time"
            name="takeoffTime"
            value={formData.takeoffTime}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-black"
            required
          />
        </div>

        {/* Flight Status */}
        <div>
          <label className="block text-sm font-semibold mb-1">Flight Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-black"
            required
          >
            <option value="">Select status</option>
            <option value="On Time">On Time</option>
            <option value="Delayed">Delayed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Passengers */}
        <div>
          <label className="block text-sm font-semibold mb-1">Passengers</label>
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            min="1"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-black"
            required
          />
        </div>

        {/* Flight Class */}
        <div>
          <label className="block text-sm font-semibold mb-1">Flight Class</label>
          <select
            name="flightClass"
            value={formData.flightClass}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-black"
            required
          >
            <option value="">Select Class</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </div>

        {/* Extra Luggage */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="extraLuggage"
            checked={formData.extraLuggage}
            onChange={handleChange}
            className="w-4 h-4"
            id="extraLuggage"
          />
          <label htmlFor="extraLuggage" className="text-sm font-medium">
            Add 20kg Extra Luggage ($25)
          </label>
        </div>

        {/* Promo Code */}
        <div>
          <label className="block text-sm font-semibold mb-1">Promo Code</label>
          <input
            type="text"
            name="promoCode"
            value={formData.promoCode}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-black"
            placeholder="Enter promo code"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
          >
            Book Flight
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 w-full"
          >
            Clear Form
          </button>

          <button
            type="button"
            onClick={handleCancelBooking}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
          >
            Cancel Booking
          </button>
        </div>
      </form>

      {/* Booking Summary */}
      <div className="bg-gray-100 dark:bg-gray-400 p-4 rounded-md mt-6">
        <h3 className="font-bold text-lg mb-2">Booking Summary</h3>
        <p><strong>From:</strong> {formData.from || 'N/A'}</p>
        <p><strong>To:</strong> {formData.to || 'N/A'}</p>
        <p><strong>Date:</strong> {formData.date || 'N/A'}</p>
        <p><strong>Takeoff Time:</strong> {formData.takeoffTime || 'N/A'}</p>
        <p><strong>Status:</strong> {formData.status || 'N/A'}</p>
        <p><strong>Passengers:</strong> {formData.passengers}</p>
        <p><strong>Flight Class:</strong> {formData.flightClass || 'N/A'}</p>
        <p><strong>Extra Luggage:</strong> {formData.extraLuggage ? 'Yes' : 'No'}</p>
        <p><strong>Promo Code:</strong> {formData.promoCode || 'None'}</p>
      </div>
    </div>
  );
}
