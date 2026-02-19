import axios from "axios";
import { useState, useEffect } from "react";

const ReviewSection = ({ propertyId }: { propertyId: number | string }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div className="space-y-4 mt-6">
      <h2 className="text-xl font-bold">Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review: any) => (
          <div key={review.id} className="border p-4 rounded shadow-sm">
            <p>{review.comment}</p>
            <p className="text-yellow-500">Rating: {review.rating}/5</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;