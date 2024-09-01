import React from "react";
import { CarType } from "@/app/common/types/car.type";

interface CarDetailsProps {
    car: CarType;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
    return (
        <div className="flex w-fit">
            <h2>{car.mileage} miles</h2>
            <h2>dealer: {car.dealer}</h2>
        </div>
    );
};

export default CarDetails;
