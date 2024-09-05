import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import CarModel from "./car-model";
import useCars from "./useCars";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSpring, animated } from "@react-spring/three";

interface CarFormationProps {}

const CarFormation: React.FC<CarFormationProps> = () => {
    const groupRef = useRef<THREE.Group>(null);
    const { cars } = useCars();
    const [currentIndex, setCurrentIndex] = useState(0);
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

    const [spring, api] = useSpring(() => ({
        formationSlide: 0,
        config: {
            mass: 5,
            tension: 200,
            friction: 150,
            duration: 300,
        },
    }));

    useEffect(() => {
        api.start({
            formationSlide: -currentIndex * spacing,
        });
    }, [currentIndex, spacing, api]);

    return (
        <>
            <animated.group ref={groupRef} position-x={spring.formationSlide}>
                {cars.map((car, index) => (
                    // wrap in group to avoid error 'Type instantiation is excessively deep and possibly infinite.'
                    <animated.group
                        key={car.id}
                        position={new THREE.Vector3(index * spacing, 0, 0)}
                    >
                        <CarModel
                            car={car}
                            highlight={index === currentIndex}
                        />
                    </animated.group>
                ))}
            </animated.group>
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
