"use client";

import { useState } from "react";

// this is kinda trash; should rework all logic afterwards

const useCars = () => {
	const [highlightedCarIndex, setHighlighedCarIndex] = useState<number>(0);

	return {
		setHighlighedCarIndex,
		highlightedCarIndex,
	};
};

export default useCars;
