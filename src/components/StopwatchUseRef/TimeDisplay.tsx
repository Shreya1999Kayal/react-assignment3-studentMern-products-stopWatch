import React, { memo } from "react";
import type { TimeDisplayProps } from "../../types/type/stopWatch.type";


const TimeDisplay: React.FC<TimeDisplayProps> = ({ formattedTime }) => {
    console.log("TimeDisplay rendering ->", formattedTime);

    return (
        <div className="mb-10 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-yellow-100 border-4 border-yellow-900/10 shadow-[0_0_25px_rgba(120,80,10,0.25)] flex items-center justify-center">
                <span className="font-sans text-3xl text-yellow-900 tabular-nums tracking-wide">
                    {formattedTime}
                </span>
            </div>
        </div>
    );
};

export default memo(TimeDisplay);