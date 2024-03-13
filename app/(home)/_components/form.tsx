import React, { useState } from "react";
import axios from "axios";

interface FormData {
  car_name: string;
  date_of_sale: string;
  model_no: string;
  price: number;
}

const initialFormData: FormData = {
  car_name: "",
  date_of_sale: "",
  model_no: "",
  price: 0,
};

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Input validation
    const validationErrors: string[] = [];
    if (!formData.car_name.trim()) {
      validationErrors.push("Car Name is required");
    }
    if (!formData.date_of_sale.trim()) {
      validationErrors.push("Date of Sale is required");
    }
    if (!formData.model_no.trim()) {
      validationErrors.push("Model No is required");
    }
    if (!formData.price) {
      validationErrors.push("Price is required");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Send data to backend
      await axios.post("http://localhost:5000/api/v1/car", formData);
      // Clear form and errors after successful submission
      setFormData(initialFormData);
      setErrors([]);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error while submitting data:", error);
      // Handle error
      alert("Error while submitting data. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 min-h-full w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="carName" className="block mb-1">
            Car Name
          </label>
          <input
            type="text"
            id="carName"
            name="car_name"
            value={formData.car_name}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="dateOfSale" className="block mb-1">
            Date of Sale
          </label>
          <input
            type="date"
            id="dateOfSale"
            name="date_of_sale"
            value={formData.date_of_sale}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="modelNo" className="block mb-1">
            Model No
          </label>
          <input
            type="text"
            id="modelNo"
            name="model_no"
            value={formData.model_no}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {errors.length > 0 && (
        <div className="mt-4 p-2 bg-red-200 text-red-700 rounded">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
