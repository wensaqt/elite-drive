"use client";
import { useState } from "react";
import Image from "next/image";
import { Card } from "../ui/card";
import PhotoVisualizer from "../base/photo-visualizer";

const CarPhotoGallery = ({ urls }: { urls: string[] }) => {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const openPhotoVisualizer = (url: string) => {
        setSelectedPhoto(url);
    };

    const closePhotoVisualizer = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="flex gap-2 h-full w-full">
            {urls.map((url, index) => (
                <Card
                    className="z-30 overflow-hidden w-64 h-64 cursor-pointer hover:brightness-125"
                    key={index}
                    onClick={() => openPhotoVisualizer(url)}
                >
                    <div className="relative w-full h-full">
                        <Image
                            className="object-cover"
                            src={url}
                            alt={`Car photo ${index + 1}`}
                            fill
                        />
                    </div>
                </Card>
            ))}

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
