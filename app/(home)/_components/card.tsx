import Image from "next/image";

interface cardType {
  carName: string;
  dateOfSale: string;
  price: string;
  modelno: string;
}

const Card = ({ carName, dateOfSale, price, modelno }: cardType) => {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {carName}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Model No :- {modelno}
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This card is Sold on :- {dateOfSale}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          price :- {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
