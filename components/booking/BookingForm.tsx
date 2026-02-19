import { useState } from "react";

interface BookingFormProps {
  onSubmit: (formData: object) => void;
  loading: boolean;
}

const BookingForm = ({ onSubmit, loading }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phoneNumber: "",
    cardNumber: "", expirationDate: "", cvv: "",
    streetAddress: "", city: "", state: "", zipCode: "", country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">First Name</label>
            <input name="firstName" type="text" onChange={handleChange} required
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label className="text-sm font-medium">Last Name</label>
            <input name="lastName" type="text" onChange={handleChange} required
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input name="email" type="email" onChange={handleChange} required
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input name="phoneNumber" type="text" onChange={handleChange} required
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label className="text-sm font-medium">Card Number</label>
          <input name="cardNumber" type="text" onChange={handleChange} required placeholder="1234 5678 9012 3456"
            className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Expiration Date</label>
            <input name="expirationDate" type="text" onChange={handleChange} required placeholder="MM/YY"
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label className="text-sm font-medium">CVV</label>
            <input name="cvv" type="text" onChange={handleChange} required placeholder="123"
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label className="text-sm font-medium">Street Address</label>
          <input name="streetAddress" type="text" onChange={handleChange} required
            className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">City</label>
            <input name="city" type="text" onChange={handleChange} required
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label className="text-sm font-medium">State</label>
            <input name="state" type="text" onChange={handleChange} required
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Zip Code</label>
            <input name="zipCode" type="text" onChange={handleChange} required
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <div>
            <label className="text-sm font-medium">Country</label>
            <input name="country" type="text" onChange={handleChange} required
              className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
        </div>

        <button type="submit" disabled={loading}
          className="mt-6 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white py-3 px-4 rounded-md w-full font-semibold transition">
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;