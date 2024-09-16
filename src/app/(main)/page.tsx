import CarFormation from "@/components/cars/car-formation";
import { TypographyH2 } from "@/components/typography/h2";
import Divider from "@/components/ui/divider";
import ScrollIndicator from "@/components/base/scroll-indicator";

const StorePage = () => {
    return (
        <div className="overflow-y-auto h-full snap-y snap-mandatory">
            <section className="h-full snap-start w-full relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                >
                    <source
                        src="/videos/Autumn In Moscow - M5 F90 LCI LIMMA.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <ScrollIndicator />
            </section>

            <section className="snap-start w-full h-full flex flex-col items-center justify-center">
                <TypographyH2 text="We have brand new engines for you" />
                <Divider />
                <div className="overflow-y-auto">
                    <CarFormation />
                </div>
                <Divider />
            </section>
        </div>
    );
};

export default StorePage;
