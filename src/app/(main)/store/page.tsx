"use client";
import { TypographyH2 } from "@/components/typography/h2";
import Divider from "@/components/ui/divider";

import CarFormation from "@/components/cars/car-formation";
import CarFormation3D from "@/components/cars/car-formation/car-formation-3d";
import { useRef, useState } from "react";
import { TypographyLead } from "@/components/typography/lead";
import IconButton from "@/components/buttons/icon-button/icon-button";
import { BoxIcon, SquareIcon } from "lucide-react";
import { a } from "@react-spring/web";

const StorePage = () => {
	const [formation3D, setFormation3D] = useState<boolean>(true);

	return (
		<a.div className="overflow-y-auto h-full relative">
			<section className="w-full h-full flex flex-col items-center justify-center">
				<div className="flex items-center justify-center relative w-full">
					<TypographyH2 text="We have brand new engines for you" />
					{formation3D ? (
						<IconButton
							icon={<SquareIcon color="white" />}
							onClick={() => setFormation3D(!formation3D)}
							className="absolute right-10"
						/>
					) : (
						<IconButton
							icon={<BoxIcon color="white" />}
							onClick={() => setFormation3D(!formation3D)}
							className="absolute right-10"
						/>
					)}
				</div>

				<Divider />
				<div className="overflow-y-auto h-4/5 w-full">
					{formation3D ? <CarFormation3D /> : <CarFormation />}
				</div>
				<Divider />
				<div className="py-2">
					<TypographyLead text="Currently working on car details page junction for 3D carousel..." />
				</div>
			</section>
		</a.div>
	);
};

export default StorePage;
