"use client";
import { CarType } from "@/app/common/types/car.type";
import Image from "next/image";
import React from "react";
import TypographyH3 from "../typography/h3";
import TypographyMuted from "../typography/muted";
import Link from "next/link";
import { cars } from "@/_test-data/cars";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

interface CarCardProps {
	car: CarType;
}

const carItemStyle =
	"flex-shrink-0 flex-grow-0 aspect-auto hover:bg-zinc-500 relative cursor-pointer rounded-sm";

const CarFormation = () => {
	const [{ formationOffset }, api] = useSpring(() => ({ formationOffset: 0 }));

	const slideFormation = (memo: number, mx: number, last: boolean) => {
		const newOffset = memo + mx;

		const maxOffset = 0;
		const minOffset = -(cars.length * 500);

		if (last) {
			return Math.max(Math.min(newOffset, maxOffset), minOffset);
		}

		console.log("new offset: ", newOffset);
		return newOffset;
	};

	const bind = useDrag(
		({ memo = formationOffset.get(), movement: [mx], last }) => {
			api.start({
				formationOffset: slideFormation(memo, mx, last),
				config: {
					tension: 200,
					friction: 50,
				},
			});
			return memo;
		},
		{
			filterTaps: true,
			tapsThreshold: 3,
		}
	);

	return (
		<animated.div
			{...bind()}
			style={{
				transform: formationOffset.to((x) => `translateX(${x}px)`),
			}}
			className="flex gap-4 overflow-hidden w-full p-20"
		>
			{cars.map((car, index) => (
				<CarFormation.Item key={index} car={car} />
			))}
		</animated.div>
	);
};

const CarFormationItem: React.FC<CarCardProps> = ({ car }) => {
	const getCarCoverUrl = (carModel: string) => {
		const formattedModelName = carModel.replace(/ /g, "_").toLocaleLowerCase();
		return `/covers/${formattedModelName}_cover.png`;
	};

	return (
		<Link href={`/car/${car.id}`} className={carItemStyle}>
			<Image
				src={getCarCoverUrl(car.model)}
				height={300}
				width={450}
				alt={`${car.model} image`}
			/>
		</Link>
	);
};

CarFormation.Item = CarFormationItem;

export default CarFormation;
