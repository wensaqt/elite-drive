"use client";
import { useState } from "react";
import Image from "next/image";
import { Card } from "../ui/card";
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
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-full w-full">
            <div className="col-span-2 row-span-2">
                <video
                    className="w-full h-full object-cover rounded-sm overflow-hidden hover:brightness-125 cursor-pointer"
                    controls
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                />
            </div>

            <div className="col-span-2 col-start-3">
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

            <div className="col-start-3 row-start-2">
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

            <div className="col-start-4 row-start-2">
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
