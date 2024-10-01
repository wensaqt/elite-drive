"use client";
import { TypographyH2 } from "@/components/typography/h2";
import Divider from "@/components/ui/divider";
import ScrollIndicator from "@/components/base/scroll-indicator";

import CarFormation from "@/components/cars/car-formation";
import CarFormation3D from "@/components/cars/car-formation/car-formation-3d";
import { useRef, useState } from "react";
import { TypographyLead } from "@/components/typography/lead";
import IconButton from "@/components/buttons/icon-button/icon-button";
import { BoxIcon, SquareIcon } from "lucide-react";
import { a, useSpring } from "@react-spring/web";
import { useScroll } from "@use-gesture/react";

const StorePage = () => {
	const [formation3D, setFormation3D] = useState<boolean>(true);
	const [{ heroControls }, api] = useSpring(() => ({
		heroControls: { translateY: "translateY(0)", opacity: 100 },
	}));
	const heroRef = useRef<HTMLElement>(null);

	function hideHero(
		memo: { translateY: string; opacity: number },
		scrolling: boolean,
		axis: string
	) {
		if (scrolling && axis === "y")
			return { translateY: "translateY(-100vh)", opacity: 0 };
		return memo;
	}

	const bind = useScroll(({ scrolling, axis, memo = heroControls }) => {
		console.log(scrolling);
		api.start({
			heroControls: hideHero(memo, scrolling, axis),
		});
	});

	return (
		<a.div className="overflow-y-auto h-full relative" {...bind()}>
			<a.section
				className="h-full w-full absolute top-0 left-0"
				ref={heroRef}
				style={heroControls}
			>
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
			</a.section>

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
