"use client";
import { useState } from "react";
import Image from "next/image";
import PhotoVisualizer from "../base/photo-visualizer";

const CarPhotoGallery = ({
    urls,
    videoUrl,
}: {
    urls: string[];
    videoUrl: string;
}) => {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const openPhotoVisualizer = (url: string) => {
        setSelectedPhoto(url);
    };

    const closePhotoVisualizer = () => {
        setSelectedPhoto(null);
    };


    return (
        <div className="grid lg:grid-cols-4 lg:grid-rows-2 gap-4 h-96 w-full grid-cols-3 grid-rows-2">
            <div className="lg:col-span-2 lg:row-span-2 col-span-3 row-span-1">
                <video
                    className="w-full h-full object-cover rounded-sm overflow-hidden"
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                />
            </div>

            <div className="lg:col-span-2 lg:col-start-3 col-span-1 col-start-1">
                <div
                    className="relative w-full h-full rounded-sm overflow-hidden hover:brightness-125 cursor-pointer"
                    onClick={() => openPhotoVisualizer(urls[0])}
                >
                    <Image
                        className="object-cover"
                        src={urls[0]}
                        alt="Car photo 1"
                        fill
                    />
                </div>
            </div>

            <div className="lg:col-start-3 lg:row-start-2 col-span-1 col-start-2">
                <div
                    className="relative w-full h-full rounded-sm overflow-hidden hover:brightness-125 cursor-pointer"
                    onClick={() => openPhotoVisualizer(urls[1])}
                >
                    <Image
                        className="object-cover"
                        src={urls[1]}
                        alt="Car photo 2"
                        fill
                    />
                </div>
            </div>

            <div className="lg:col-start-4 lg:row-start-2 col-span-1 col-start-3">
                <div
                    className="relative w-full h-full rounded-sm overflow-hidden hover:brightness-125 cursor-pointer"
                    onClick={() => openPhotoVisualizer(urls[2])}
                >
                    <Image
                        className="object-cover"
                        src={urls[2]}
                        alt="Car photo 3"
                        fill
                    />
                </div>
            </div>

            {selectedPhoto && (
                <PhotoVisualizer
                    src={selectedPhoto}
                    onClose={closePhotoVisualizer}
                />
            )}
        </div>
    );
};

export default CarPhotoGallery;
