import Link from "next/link";

interface Property {
  id: string;
  name: string;
  price: number;
  image: string;
  location: string;
  rating: number;
  reviews: number;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-52 object-cover"
          onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300")}
        />
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h2 className="font-semibold text-lg leading-tight">{property.name}</h2>
            <span className="text-sm font-medium">⭐ {property.rating}</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">{property.location}</p>
          <p className="text-sm text-gray-400">{property.reviews} reviews</p>
          <p className="text-gray-900 font-semibold mt-2">
            ${property.price.toLocaleString()} <span className="font-normal text-gray-500 text-sm">/ night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;