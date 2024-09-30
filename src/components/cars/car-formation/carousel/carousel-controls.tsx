import { cars } from "@/_test-data/cars";
import { useSpring } from "@react-spring/three";
import { useDrag } from "@use-gesture/react";
import { useRef } from "react";
import * as THREE from "three";
import useCars from "../../cars";

const useCarouselControls = () => {
	const totalCars = cars.length;
	const radius = totalCars * 7;
	const carouselRef = useRef<THREE.Group>(null);
	const deflection = 0.5;
	const step = (2 * Math.PI) / totalCars;
	const { setHighlighedCarIndex } = useCars();

	const [{ carouselRotation }, api] = useSpring(() => ({
		carouselRotation: 0,
	}));

	const getAngle = (index: number) => {
		return index * step;
	};

	const getNextStep = (currentRotation: number) => {
		const nearestStepIndex = Math.round(currentRotation / step);
		const nearestStepAngle = nearestStepIndex * step;

		return nearestStepAngle;
	};

	const setCarPosition = (index: number) => {
		const angle = getAngle(index);
		const x = radius * Math.sin(angle);
		const z = radius * Math.cos(angle);

		return new THREE.Vector3(x, 0, z);
	};

	const setCarRotation = (index: number) => {
		const angle = getAngle(index) + deflection;
		return new THREE.Euler(0, angle + Math.PI / 2, 0);
	};

	const rotateCarousel = (memo: number, mx: number, last: boolean) => {
		let newRotation = memo + mx * 0.005;
		if (last) {
			const nextStep = getNextStep(newRotation);
			const closestCarIndex = getClosestCarIndex(nextStep);
			setHighlighedCarIndex(closestCarIndex);
			newRotation = nextStep;
		}

		return newRotation;
	};

	const getClosestCarIndex = (rotation: number) => {
		const normalizedRotation =
			((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
		const carIndex = Math.floor(normalizedRotation / step) % totalCars;

		return carIndex;
	};

	const bind = useDrag(
		({ memo = carouselRotation.get(), movement: [mx], last }) => {
			api.start({
				carouselRotation: rotateCarousel(memo, mx, last),
				config: {
					tension: 200,
					friction: 50,
				},
			});
		},
		{
			filterTaps: true,
			tapsThreshold: 3,
		}
	);

	return {
		setCarPosition,
		setCarRotation,
		radius,
		carouselRef,
		bind,
		carouselRotation,
	};
};

export default useCarouselControls;
