import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import CarModel from "./car-model";
import useCars from "./useCars";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useFrame } from "@react-three/fiber";

interface CarFormationProps {}

const CarFormation: React.FC<CarFormationProps> = () => {
    const groupRef = useRef<THREE.Group>(null);
    const { cars } = useCars();
    const [currentIndex, setCurrentIndex] = useState(0);
    const targetPositionRef = useRef(0);

    const spacing = 8;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : cars.length - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < cars.length - 1 ? prevIndex + 1 : 0
        );
    };

    useFrame(() => {
        if (groupRef.current) {
            const targetPosition = -currentIndex * spacing;
            targetPositionRef.current +=
                (targetPosition - targetPositionRef.current) * 0.05;
            groupRef.current.position.x = targetPositionRef.current;
        }
    });

    return (
        <>
            <group ref={groupRef} position={[currentIndex * -spacing, 0, 0]}>
                {cars.map((car, index) => (
                    <CarModel
                        key={car.id}
                        car={car}
                        position={new THREE.Vector3(index * spacing, 0, 0)}
                        rotation={new THREE.Euler(0, Math.PI / 2, 0)}
                        highlight={index === currentIndex}
                    />
                ))}
            </group>
            <Html fullscreen>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <Button
                        className="text-white"
                        variant={"ghost"}
                        onClick={goToPrevious}
                        size={"icon"}
                    >
                        <ChevronLeftIcon />
                    </Button>
                    <Button
                        className="text-white"
                        variant="ghost"
                        onClick={goToNext}
                        size="icon"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </Button>
                </div>
            </Html>
        </>
    );
};

export default CarFormation;
