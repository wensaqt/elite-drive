import { CarType } from "@/app/common/types/car.type";
import { Billboard, MeshDistortMaterial, Text } from "@react-three/drei";
import dynamic from "next/dynamic";
import { forwardRef, Suspense, useRef } from "react";
import * as THREE from "three";
import { a, useSpring } from "@react-spring/three";
import { useRouter } from "next/navigation";

const CarFormation3DItem = forwardRef<
	THREE.Group,
	{
		car: CarType;
		position: THREE.Vector3;
		rotation: THREE.Euler;
		highlighted: boolean;
	}
>(({ car, position, rotation, highlighted = true }, ref) => {
	const router = useRouter();
	const getCarComponent = () => {
		const formattedName = car.model.toLowerCase().replace(/\s+/g, "-");
		return import(`public/component-models/${formattedName}.jsx`).then(
			(mod) => mod.default
		);
	};

	const Highlight: React.FC = () => {
		const [{ highlight }, api] = useSpring(() => ({
			highlight: 0,
		}));

		const materialRef = useRef();

		return (
			<group>
				<a.mesh position={[0, -2.0, 0]}>
					<cylinderGeometry args={[10, 8, 1, 32, 1, true, 0, Math.PI * 2]} />
					<MeshDistortMaterial distort={0.3} speed={15} />
				</a.mesh>
				<a.mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.49, 0]}>
					{/* <circleGeometry args={[9, 64]} />
					<meshStandardMaterial color="gold" /> */}
				</a.mesh>
			</group>
		);
	};

	const CarHeader: React.FC<{ car: CarType }> = ({ car }) => (
		<Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
			<Text
				fontSize={1}
				fontWeight={"bold"}
				color="white"
				anchorY="bottom"
				anchorX="center"
				position={[0, 5, 0]}
			>
				{car.model}
			</Text>
			<Text
				fontSize={1}
				fontWeight={"light"}
				color="white"
				anchorY="bottom"
				anchorX="center"
				position={[0, 3.8, 0]}
			>
				{car.dealer}
			</Text>
		</Billboard>
	);

	const CarModel = dynamic(() => getCarComponent());

	return (
		<Suspense fallback={null}>
			<a.group position={position} ref={ref} rotation={rotation}>
				<CarHeader car={car} />
				<CarModel />
			</a.group>
		</Suspense>
	);
});

CarFormation3DItem.displayName = "CarFormation3DItem";

export default CarFormation3DItem;
