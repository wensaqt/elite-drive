import Image from "next/image";
import { Card } from "../ui/card";

const CarPhotoGallery = ({ urls }: { urls: string[] }) => {
    return (
        <Card className="w-[350px] absolute left-20 top-1/2 -translate-y-1/2 z-30 overflow-hidden">
            {urls.map((url, index) => (
                <div key={index} className="relative w-[350px] h-[200px]">
                    <Image
                        className="object-cover"
                        src={url}
                        alt={`Car photo ${index + 1}`}
                        fill
                        sizes="350px"
                    />
                </div>
            ))}
        </Card>
    );
};

export default CarPhotoGallery;
