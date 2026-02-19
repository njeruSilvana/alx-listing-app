import React from 'react';
import { OrderSummaryProps } from '@/interfaces';

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const subtotal = bookingDetails.price * bookingDetails.totalNights;
  const grandTotal = subtotal + bookingDetails.bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Review Order Details</h2>
      
      {/* Property Info */}
      <div className="flex items-start gap-4 mb-6">
        <img 
          src={bookingDetails.propertyImage || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400"} 
          alt="Property" 
          className="w-32 h-32 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">
            ⭐ {bookingDetails.reviewScore || 4.76} ({bookingDetails.reviewCount || 345} reviews)
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="border-t pt-4">
        <div className="flex justify-between mb-3">
          <p className="text-gray-700">${bookingDetails.price} × {bookingDetails.totalNights} nights</p>
          <p className="font-medium">${subtotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-gray-700">Booking Fee</p>
          <p className="font-medium">${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between pt-3 border-t font-semibold text-lg">
          <p>Grand Total</p>
          <p>${grandTotal.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;