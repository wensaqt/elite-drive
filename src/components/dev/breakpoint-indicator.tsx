"use client";
import { useState, useEffect } from "react";

const BreakpointIndicator = () => {
    const [breakpoint, setBreakpoint] = useState<string>("");

    const getBreakpoint = (width: number) => {
        if (width < 640) return "xs";
        if (width >= 640 && width < 768) return "sm";
        if (width >= 768 && width < 1024) return "md";
        if (width >= 1024 && width < 1280) return "lg";
        if (width >= 1280 && width < 1536) return "xl";
        if (width >= 1536) return "2xl";
    };

    const updateBreakpoint = () => {
        const width = window.innerWidth;
        const breakpoint = getBreakpoint(width);
        setBreakpoint(breakpoint!);
    };

    useEffect(() => {
        updateBreakpoint();

        window.addEventListener("resize", updateBreakpoint);

        return () => window.removeEventListener("resize", updateBreakpoint);
    }, []);

    return (
        <div className="fixed bottom-5 right-5 bg-emerald-200 text-black p-2 text-center font-bold px-6 rounded-lg">
            {breakpoint}
        </div>
    );
};

export default BreakpointIndicator;
