import { CarType } from "@/app/common/types/car.type";

import Image from "next/image";
import React from "react";
import TypographyH3 from "../typography/h3";
import TypographyMuted from "../typography/muted";
import Link from "next/link";
import { cars } from "@/_test-data/cars";

interface CarCardProps {
    car: CarType;
}

const CarFormation = () => {
    return (
        <div className="flex gap-4 overflow-x-scroll w-full p-20">
            {cars.map((car, index) => (
                <CarFormation.Item key={index} car={car} />
            ))}
        </div>
    );
};

const CarFormationItem: React.FC<CarCardProps> = ({ car }) => {
    return (
        <Link
            href={`/car/${car.id}`}
            className="flex-shrink-0 flex-grow-0 aspect-auto hover:bg-zinc-500 relative cursor-pointer rounded-sm"
        >
            <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-center">
                <TypographyH3 text={car.model} />
                <TypographyMuted text={car.dealer} />
            </div>

            <Image
                src={car.imageUrl}
                height={300}
                width={450}
                alt={`${car.model} image`}
            />
        </Link>
    );
};

CarFormation.Item = CarFormationItem;

export default CarFormation;
