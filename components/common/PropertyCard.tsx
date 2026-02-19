import React from 'react';
import { PropertyProps } from '@/interfaces';

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  category,
  price,
  offers,
  image,
  discount,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image Container */}
      <div className="relative h-64 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Location */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {address.city}, {address.state}, {address.country}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm font-medium">{rating}</span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Offers */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>🛏️ {offers.bed} beds</span>
          <span>🚿 {offers.shower} baths</span>
          <span>👥 {offers.occupants}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t">
          <div>
            <span className="text-2xl font-bold text-gray-900">${price}</span>
            <span className="text-sm text-gray-600">/night</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;