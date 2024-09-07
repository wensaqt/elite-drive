"use client";

import Car3DModal from "@/components/cars/car-3d-modal";
import CarFormation from "@/components/cars/car-formation";
import { TypographyH2 } from "@/components/typography/h2";
import Divider from "@/components/ui/divider";
import useCars from "@/store/cars.store";

const StorePage = () => {
    const { selectedCar, clearSelection } = useCars();

    return (
        <section className="w-full h-full flex flex-col overflow-auto gap-16">
            <div className="flex h-1/2 w-full">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-1/2 object-cover opacity-70"
                >
                    <source
                        src="/videos/Autumn In Moscow - M5 F90 LCI LIMMA.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="flex flex-col h-1/2 w-full px-6">
                <TypographyH2 text="We have brand new engines for you" />
                <Divider />
                <CarFormation />
                <Divider />
            </div>

            {selectedCar && (
                <Car3DModal car={selectedCar} onClose={clearSelection} />
            )}
        </section>
    );
};

export default StorePage;
