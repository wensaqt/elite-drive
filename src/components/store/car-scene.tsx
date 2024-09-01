"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CameraHelper from "./helpers/camera-helper";
import CarFormation from "./car-formation";

const CarScene: React.FC = () => {
    return (
        <div className="relative w-full h-full">
            <Canvas
                className="h-full w-full"
                camera={{ position: [0, 0, 50], fov: 10 }}
            >
                <CameraHelper />
                <directionalLight intensity={5} />
                <color attach="background" args={["#1a1a1a"]} />

                <Suspense fallback={null}>
                    <CarFormation />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default CarScene;
