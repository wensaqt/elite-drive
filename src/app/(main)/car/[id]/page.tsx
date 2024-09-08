import { TypographyH1 } from "@/components/typography/h1";
import { cars } from "@/data/cars";
import { CircleGauge, Factory, Gauge, Loader } from "lucide-react";
import { Suspense } from "react";

import TypographyBlockquote from "@/components/typography/blockquote";
import Divider from "@/components/ui/divider";

import TypographyMuted from "@/components/typography/muted";
import CarPhotoGallery from "@/components/cars/car-photo-gallery";
import BidList from "@/components/auction/bid-list";

const CarDetailsPage = ({ params }: { params: { id: string } }) => {
    function getCarById(id: string) {
        return cars.find((car) => car.id.toString() === id);
    }

    const car = getCarById(params.id);

    return (
        <>
            <Suspense fallback={<Loader />}>
                <section className="flex flex-col w-full h-screen p-6">
                    <div className="w-full flex-grow flex gap-6 mt-20">
                        <div className="w-1/2 h-full">
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <TypographyH1 text={car!.model} />
                                    <Divider
                                        fading="none"
                                        spacing="regular"
                                        weight="light"
                                    />
                                    <TypographyBlockquote
                                        text={car!.description}
                                    />
                                    <div className="flex gap-6 mt-10">
                                        <TypographyMuted
                                            text={`${car!.acceleration.toString()}s 0 to 100 mph`}
                                            icon={<CircleGauge />}
                                        />
                                        <TypographyMuted
                                            text={`${car!.mileage.toString()} miles`}
                                            icon={<Gauge />}
                                        />
                                        <TypographyMuted
                                            text={`${car!.manufacturingYear.toString()}`}
                                            icon={<Factory />}
                                        />
                                    </div>
                                </div>
                                <Divider
                                    fading="none"
                                    weight="light"
                                    opacity="half"
                                />
                                <BidList />
                            </div>
                        </div>
                        <div className="w-1/2 h-full overflow-y-scroll snap-y snap-mandatory">
                            <div className="w-full h-full flex snap-start items-center py-3">
                                <CarPhotoGallery urls={car!.photoUrls} />
                            </div>
                        </div>
                    </div>
                </section>
            </Suspense>
        </>
    );
};

export default CarDetailsPage;
