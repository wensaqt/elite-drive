import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const CameraHelper = () => {
    const { camera, scene } = useThree();
    const helperRef = useRef<THREE.CameraHelper | null>(null);

    useEffect(() => {
        if (camera instanceof THREE.PerspectiveCamera) {
            const helper = new THREE.CameraHelper(camera);
            helperRef.current = helper;
            scene.add(helper);

            return () => {
                if (helperRef.current) {
                    scene.remove(helperRef.current);
                }
            };
        }
    }, [camera, scene]);

    useFrame(() => {
        if (helperRef.current) {
            helperRef.current.update();
        }
    });

    return null;
};

export default CameraHelper;
