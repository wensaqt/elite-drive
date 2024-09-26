import { cars } from "@/_test-data/cars";

import CarFormation3DItem from "../car-formation-item/car-formation-item";
import useCarouselControls from "./carousel-controls";
import { a } from "@react-spring/three";
import CarouselGround from "./carousel-ground";
import { useThree } from "@react-three/fiber";

const Carousel = () => {
	const {
		setCarPosition,
		setCarRotation,
		radius,
		carouselRef,
		bind,
		carouselRotation,
	} = useCarouselControls();

	return (
		<a.group
			{...bind()}
			ref={carouselRef}
			// @ts-expect-error: wtf is this type i cant fix it so ff
			rotation={carouselRotation.to((y) => [0, y as number, 0])}
		>
			{cars.map((car, index) => {
				const position = setCarPosition(index);
				const rotation = setCarRotation(index);
				return (
					<CarFormation3DItem
						key={index}
						car={car}
						position={position}
						rotation={rotation}
						highlighted
					/>
				);
			})}
			<CarouselGround radius={radius} />
		</a.group>
	);
};

export default Carousel;
