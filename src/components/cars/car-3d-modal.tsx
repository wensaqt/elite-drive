import { CarType } from "@/app/common/types/car.type";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Button } from "../ui/button";
import { CrossIcon, ShieldCloseIcon, XIcon } from "lucide-react";

interface Car3DModalProps {
    car: CarType;
    onClose: () => void;
}

const Car3DModal = ({ car, onClose }: Car3DModalProps) => {
    const { scene } = useGLTF(car.modelUrl);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-zinc-600 p-12 rounded-lg w-3/4 h-3/4 relative">
                <Button
                    onClick={onClose}
                    variant={"ghost"}
                    size={"icon"}
                    className="absolute top-2 right-2"
                >
                    <XIcon />
                </Button>
                <Canvas className="w-full h-full">
                    <ambientLight intensity={0.5} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                    />
                    <primitive object={scene} />
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    );
};

export default Car3DModal;
