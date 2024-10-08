import { XIcon } from "lucide-react";
import Image from "next/image";

interface PhotoVisualizerProps {
    src: string;
    onClose: () => void;
}

const PhotoVisualizer = ({ src, onClose }: PhotoVisualizerProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-lg border border-white">
                <Image
                    src={src}
                    alt="Modal Media"
                    className="w-full h-auto"
                    width={800}
                    height={600}
                    style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
                <button
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    onClick={onClose}
                >
                    <XIcon className="w-6 h-6" />
                    <span className="sr-only">Close Modal</span>
                </button>
            </div>
        </div>
    );
};

export default PhotoVisualizer;
