import React, { memo } from "react";
import { MdNotStarted } from "react-icons/md";
import { HiPause } from "react-icons/hi";
import { RiResetLeftLine } from "react-icons/ri";
import type { ButtonRowProps } from "../../types/type/stopWatch.type";



const ButtonRow: React.FC<ButtonRowProps> = ({ isRunning, onStart, onPause, onReset }) => {
    console.log("ButtonRow rendering");
    return (
        <div className="flex items-center justify-center gap-5 mb-4">
            <button
                onClick={onStart}
                disabled={isRunning}
                className="w-14 h-14 rounded-full bg-yellow-100 border border-yellow-500 shadow-md hover:bg-yellow-200 disabled:opacity-40 flex items-center justify-center transition-colors"
                aria-label="Start"
            >
                <MdNotStarted className="text-2xl text-yellow-900" />
            </button>

            <button
                onClick={onPause}
                disabled={!isRunning}
                className="w-14 h-14 rounded-full bg-yellow-100 border border-yellow-500 shadow-md hover:bg-yellow-200 disabled:opacity-40 flex items-center justify-center transition-colors"
                aria-label="Pause"
            >
                <HiPause className="text-2xl text-yellow-900" />
            </button>

            <button
                onClick={onReset}
                className="w-14 h-14 rounded-full bg-yellow-100 border border-yellow-500 shadow-md hover:bg-yellow-200 flex items-center justify-center transition-colors"
                aria-label="Reset"
            >
                <RiResetLeftLine className="text-2xl text-yellow-900" />
            </button>
        </div>
    );
};

// memo + stable useCallback handlers from the parent => re-renders only when isRunning changes
export default memo(ButtonRow);