import { TypographyH1 } from "@/components/typography/h1";
import { cars } from "@/_test-data/cars";
import { ChevronsUp, CircleGauge, Factory, Gauge } from "lucide-react";
import Divider from "@/components/ui/divider";

import TypographyMuted from "@/components/typography/muted";
import CarPhotoGallery from "@/components/cars/car-photo-gallery";
import { TypographyLead } from "@/components/typography/lead";

import BidList from "@/components/auction/bid-list";
import { verifySession } from "@/lib/session";
import { ButtonLink } from "@/components/buttons/link-button/link-button";
import BigButton from "@/components/buttons/big-button";

type Bidder = {
	username: string;
	amount: number;
	date: string;
	message: string;
};

const mockedBidders: Bidder[] = [
	{
		username: "@johnsmith",
		amount: 1.7,
		date: "2023-04-15",
		message: "i need this car its for me !!!",
	},
	{
		username: "@alice_wonder",
		amount: 1.665,
		date: "2023-04-16",
		message: "spare your money lads because im taking this with me",
	},
	{
		username: "@crypto_king",
		amount: 1.545,
		date: "2023-04-17",
		message: "f**k you john stop hitting the bid everytime you log in",
	},
	{
		username: "@bidmaster",
		amount: 1.3,
		date: "2023-04-14",
		message: "this car is insane! cant wait to see it in action :)",
	},
	{
		username: "@nft_lover",
		amount: 1.25,
		date: "2023-04-18",
		message: "good luck to everyone",
	},
];

const CarDetailsPage = async ({ params }: { params: { id: string } }) => {
	const session = await verifySession();
	function getCarById(id: string) {
		return cars.find((car) => car.id === id);
	}

	const car = getCarById(params.id);

	return (
		<div className="overflow-y-auto h-full w-full flex flex-col p-6 items-center gap-10">
			<div className="flex flex-col w-full items-center gap-6">
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
				<div className="xl:w-10/12 w-full">
					<CarPhotoGallery urls={car!.photoUrls} videoUrl={car!.videoUrl} />
				</div>
			</div>

			<div className="flex flex-col w-52">
				<BigButton text="PLACE A BID" disabled={session ? false : true} />
				{session ? null : (
					<ButtonLink
						text={"You need to be logged in to place a bid."}
						href="/login"
					/>
				)}
			</div>

			<BidList />
		</div>
	);
};

export default CarDetailsPage;
