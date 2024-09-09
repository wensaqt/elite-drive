import { TypographyH1 } from "@/components/typography/h1";
import { cars } from "@/data/cars";
import {
    Bitcoin,
    BitcoinIcon,
    ChevronsUp,
    CircleGauge,
    Factory,
    Gauge,
} from "lucide-react";
import Divider from "@/components/ui/divider";

import TypographyMuted from "@/components/typography/muted";
import CarPhotoGallery from "@/components/cars/car-photo-gallery";
import { TypographyLead } from "@/components/typography/lead";
import BidList from "@/components/auction/bid-list";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/typography/h2";
import BigButton from "@/components/ui/big-button";

const CarDetailsPage = ({ params }: { params: { id: string } }) => {
    function getCarById(id: string) {
        return cars.find((car) => car.id.toString() === id);
    }

    const car = getCarById(params.id);

    return (
        <section className="flex flex-col p-6 items-center snap-y snap-mandatory h-full">
            <div className="flex flex-col px-20 h-full items-center justify-between snap-start gap-10">
                <div className="flex flex-col w-full items-center">
                    <TypographyH1 text={car!.model} />
                    <TypographyMuted text={car!.dealer} />

                    <Divider fading="both" weight="light" />
                </div>
                <div className="w-10/12">
                    <TypographyLead text={car!.description} />
                </div>

                <div className="flex gap-10">
                    <TypographyMuted
                        text={`${car!.horsepower.toString()} hp`}
                        icon={<ChevronsUp />}
                    />
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
                <div className="h-1/2">
                    <CarPhotoGallery
                        urls={car!.photoUrls}
                        videoUrl={car!.videoUrl}
                    />
                </div>

                <BigButton text="MAKE A BID" />

                <div className="w-2/3">
                    <BidList />
                </div>
            </div>
        </section>
    );
};

export default CarDetailsPage;
