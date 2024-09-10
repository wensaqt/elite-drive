"use client";

import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface Car3DModelProps {
    modelUrl: string;
}

const Car3DModel = ({ modelUrl }: Car3DModelProps) => {
    const { scene } = useGLTF(modelUrl);

    return (
        <Canvas
            className="w-full h-full"
            camera={{
                fov: 50,
                position: [3, 2, 5],
            }}
        >
            <ambientLight intensity={3} />
            <directionalLight position={[0, 5, 5]} intensity={5} />
            <primitive object={scene} />
            <OrbitControls />
        </Canvas>
    );
};

export default Car3DModel;
