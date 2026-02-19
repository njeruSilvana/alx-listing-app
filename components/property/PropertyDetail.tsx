import React from "react";
import ReviewSection from "@/components/property/ReviewSection";

interface PropertyDetailProps {
  property: {
    id: number;
    name: string;
    address: {
      city: string;
      country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    };
    image: string;
    discount: string;
    description?: string;
  };
}

const PropertyDetail = ({ property }: PropertyDetailProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Property Image */}
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      {/* Title & Location */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <p className="text-gray-500 mt-1">
            {property.address.city}, {property.address.country}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">${property.price}</p>
          <p className="text-gray-400 text-sm">per night</p>
        </div>
      </div>

      {/* Rating & Category */}
      <div className="flex gap-3 mb-4">
        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
          ⭐ {property.rating}
        </span>
        {property.category.map((cat, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {cat}
          </span>
        ))}
        {property.discount && (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {property.discount} OFF
          </span>
        )}
      </div>

      {/* Offers/Amenities */}
      <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-xl p-4 mb-6">
        <div className="text-center">
          <p className="text-2xl">🛏️</p>
          <p className="text-gray-600 text-sm mt-1">{property.offers.bed} Beds</p>
        </div>
        <div className="text-center">
          <p className="text-2xl">🚿</p>
          <p className="text-gray-600 text-sm mt-1">{property.offers.shower} Showers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl">👥</p>
          <p className="text-gray-600 text-sm mt-1">{property.offers.occupants} Guests</p>
        </div>
      </div>

      {/* Description */}
      {property.description && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">About this place</h2>
          <p className="text-gray-600 leading-relaxed">{property.description}</p>
        </div>
      )}

      {/* Book Now Button */}
      <a href="/booking">
        <button className="w-full bg-blue-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-600 transition mb-8">
          Book Now
        </button>
      </a>

      {/* Reviews Section */}
      <ReviewSection propertyId={property.id} />
    </div>
  );
};

export default PropertyDetail;