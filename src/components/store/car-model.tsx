import React, { useRef } from "react";
import { CarType } from "@/app/common/types/car.type";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CarModelProps {
    car: CarType;
    position: THREE.Vector3;
    rotation: THREE.Euler;
    highlight: boolean;
}

const CarModel: React.FC<CarModelProps> = (props: CarModelProps) => {
    const { scene } = useGLTF(props.car.modelUrl);
    const modelRef = useRef<THREE.Group>(null);
    const { camera } = useThree();

    const textRef = useRef(null);

    useFrame((state, delta) => {
        if (props.highlight && modelRef.current) {
            props.rotation.y += delta * 0.5;
            modelRef.current.rotation.y = props.rotation.y;
        }

        if (modelRef.current && textRef.current) {
            textRef.current.lookAt(camera.position);
        }
    });

    return (
        <group
            ref={modelRef}
            position={props.position}
            rotation={props.rotation}
        >
            <primitive object={scene} className="cursor-pointer" />

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
