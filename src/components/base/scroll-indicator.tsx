import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import TypographyH3 from "../typography/h3";

const ScrollIndicator: React.FC = () => {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center flex flex-col items-center gap-4 animate-pulse">
            <TypographyH3 text="Scroll down to display cars..." />
            <div className="animate-bounce">
                <ArrowDown strokeWidth={3} />
            </div>
        </div>
    );
};

export default ScrollIndicator;
