import { CarType } from "@/app/common/types/car.type";

// Mocked data just to design UI.

export const cars: CarType[] = [
	{
		id: "bugatti-veyron",
		model: "Bugatti Veyron",
		manufacturingYear: 2009,
		mileage: 15000,
		price: 2.4,
		acceleration: 3.7,
		horsepower: 455,
		dealer: "Bugatti Automobiles S.A.S.",
		imageUrl: "/images/corvette_c7.png",
		videoUrl: "/videos/corvette_c7.mp4",
		photoUrls: [
			"/bugatti_veyron_1.jpg",
			"/bugatti_veyron_2.jpg",
			"/bugatti_veyron_3.jpg",
		],
		description:
			"Experience the pinnacle of American engineering with the Corvette C7. This iconic sports car combines breathtaking performance with sleek, aggressive styling. Boasting a powerful V8 engine, precision handling, and cutting-edge technology, the C7 delivers an exhilarating driving experience that's hard to match. Whether on the track or the open road, the Corvette C7 stands as a testament to speed, innovation, and pure automotive passion.",
	},
	{
		id: "bmw",
		model: "BMW M3 GTS",
		manufacturingYear: 2010,
		mileage: 15000,
		price: 1.5,
		acceleration: 3.7,
		horsepower: 455,
		dealer: "Bayerische Mtoren Werke AG",
		imageUrl: "/images/corvette_c7.png",
		videoUrl: "https://youtu.be/zDxyyg-9N6U",
		photoUrls: ["/bmw_m3_gts_1.jpg", "/bmw_m3_gts_2.jpg", "/bmw_m3_gts_3.jpg"],
		description:
			"The BMW M3 GTS is a high-performance sports car that represents the pinnacle of the M3 lineup. Launched as a limited-edition model, it features a powerful 4.4-liter V8 engine, producing around 493 horsepower, which allows it to accelerate from 0 to 60 mph in just 4.1 seconds. The GTS is distinguished by its lightweight construction, including a stripped-down interior and the use of carbon fiber components, enhancing its agility and handling. It also boasts a track-oriented suspension, upgraded brakes, and a unique aerodynamics package, making it ideal for both the road and the racetrack. With its bold design and uncompromising performance, the BMW M3 GTS is a true enthusiast's dream.",
	},
	{
		id: "honda-jdm",
		model: "Honda JDM",
		manufacturingYear: 2009,
		mileage: 15000,
		price: 2.4,
		acceleration: 3.7,
		horsepower: 455,
		dealer: "Honda Motor Company, Ltd.",
		imageUrl: "/images/corvette_c7.png",
		videoUrl: "/videos/corvette_c7.mp4",
		photoUrls: [
			"/corvette_c7_1.jpg",
			"/corvette_c7_2.jpg",
			"/corvette_c7_3.jpg",
		],
		description:
			"Experience the pinnacle of American engineering with the Corvette C7. This iconic sports car combines breathtaking performance with sleek, aggressive styling. Boasting a powerful V8 engine, precision handling, and cutting-edge technology, the C7 delivers an exhilarating driving experience that's hard to match. Whether on the track or the open road, the Corvette C7 stands as a testament to speed, innovation, and pure automotive passion.",
	},
];
