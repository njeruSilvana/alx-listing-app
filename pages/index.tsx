import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");

        // Transform API data to match PropertyCard's expected shape
        const transformed = response.data.map((p: any) => ({
          id: p.id,
          name: p.name,
          price: p.price,
          image: p.image,
          rating: p.rating,
          reviews: Math.floor(Math.random() * 200) + 50, // mock review count
          location: `${p.address.city}, ${p.address.country}`,
        }));

        setProperties(transformed);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {properties.map((property: any) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}