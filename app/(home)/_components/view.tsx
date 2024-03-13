import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";

interface CarData {
  car_name: string;
  date_of_sale: string;
  model_no: string;
  price: number;
}
interface api {
  results: CarData[];
}
const View = () => {
  const [data, setData] = useState<CarData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<api>(
          "http://localhost:5000/api/v1/car"
        ); // Replace with your API endpoint
        setData(response.data.results);
      } catch {
        setError("something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-8 justify-centre items-center mt-5 ">
      {error ? (
        <p className="text-red-500">Error fetching data: {error}</p>
      ) : data ? (
        <ul className="flex flex-col gap-3 items-center justify-center">
          {data.map((car) => (
            <Card
              key={car.car_name}
              carName={car.car_name}
              price={car.price.toString()}
              dateOfSale={car.date_of_sale}
              modelno={car.model_no}
            />
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default View;
