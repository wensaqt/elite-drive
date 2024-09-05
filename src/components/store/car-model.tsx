import React, { useRef } from "react";
import { CarType } from "@/app/common/types/car.type";
import { useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface CarModelProps {
    car: CarType;
    highlight: boolean;
}
const CarModel: React.FC<CarModelProps> = (props: CarModelProps) => {
    const { scene } = useGLTF(props.car.modelUrl);
    const modelRef = useRef<THREE.Group>(null);
    const textRef = useRef(null);

    // will replace this with useSpring when i'll finally understand the lib
    useFrame(() => {
        if (props.highlight && scene) {
            scene.rotation.y += 0.01;
        }
    });

    return (
        <group ref={modelRef}>
            <primitive
                object={scene}
                rotation={new THREE.Euler(0, Math.PI / 2, 0)}
            />

            {props.highlight && (
                <group ref={textRef}>
                    <Text
                        position={[0, 3, 0]}
                        fontSize={0.5}
                        fontWeight={"bold"}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {props.car.model}
                    </Text>
                    <Text position={[0, 2.5, 0]} fontSize={0.2}>
                        {props.car.dealer}
                    </Text>
                </group>
            )}
        </group>
    );
};

export default CarModel;
