import { useState, useRef, useCallback, useEffect } from "react";
import { CgSandClock } from "react-icons/cg";
import { formatTime } from "../services/helper/stopWatch";
import TimeDisplay from "../components/StopwatchUseRef/TimeDisplay";
import ButtonRow from "../components/StopwatchUseRef/ButtonRow";


const StopWatch = () => {
    console.log("StopWatch (parent) rendering");

    // STATE -> things the UI must show. Changing these re-renders.
    const [seconds, setSeconds] = useState<number>(0); // whole seconds shown on screen
    const [isRunning, setIsRunning] = useState<boolean>(false); // enables/disables buttons

    // REFS -> things we only need to remember. Changing these does NOT re-render.
    const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null); // interval ID
    const startTimeRef = useRef<number>(0); // Date.now() when the last "Start" was pressed
    const elapsedBeforeRef = useRef<number>(0); // ms already counted before the last pause

    const TICK_INTERVAL_MS = 200;

    // Stops the interval and forgets its ID
    const clearTimer = useCallback(() => {
        if (timerIdRef.current !== null) {
            clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        }
    }, []);

    const handleStart = useCallback(() => {
        if (timerIdRef.current !== null) return; // already running -> never create a 2nd interval

        console.log("Start clicked");
        startTimeRef.current = Date.now();
        setIsRunning(true);

        timerIdRef.current = setInterval(() => {
            // Real elapsed time from the clock (no drift), instead of adding +1 each tick
            const elapsedMs = elapsedBeforeRef.current + (Date.now() - startTimeRef.current);
            // Same value as before -> React skips the re-render, so only 1 render per second
            setSeconds(Math.floor(elapsedMs / 1000));
        }, TICK_INTERVAL_MS);
    }, []);

    const handlePause = useCallback(() => {
        if (timerIdRef.current === null) return;

        console.log("Pause clicked");
        clearTimer();
        // Save how long it ran, so Start continues from here
        elapsedBeforeRef.current += Date.now() - startTimeRef.current;
        setSeconds(Math.floor(elapsedBeforeRef.current / 1000));
        setIsRunning(false);
    }, [clearTimer]);

    const handleReset = useCallback(() => {
        console.log("Reset clicked");
        clearTimer();
        elapsedBeforeRef.current = 0;
        startTimeRef.current = 0;
        setSeconds(0);
        setIsRunning(false);
    }, [clearTimer]);

    // Cleanup: stop the interval if the component unmounts while running
    useEffect(() => {
        return () => clearTimer();
    }, [clearTimer]);

    const formattedTime = formatTime(seconds);

    return (
        <div
            className="flex-1 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat py-6"
            style={{ backgroundImage: "url('/photo.jpeg')" }}
        >
            {/* card */}
            <div className="w-[320px] aspect-[9/16] rounded-[2rem] bg-yellow-50 shadow-2xl flex flex-col items-center px-8 py-12">

                {/* heading */}
                <h1 className="text-3xl font-bold tracking-wide mt-2 bg-gradient-to-r from-yellow-900 via-amber-400 to-yellow-700 bg-clip-text text-transparent">
                    STOP WATCH
                </h1>

                {/* icon */}
                <div className="flex-1 flex items-center justify-center">
                    <CgSandClock className="text-[110px] text-yellow-600" />
                </div>

                {/* time display in circular background */}
                <TimeDisplay formattedTime={formattedTime} />

                {/* button row */}
                <ButtonRow
                    isRunning={isRunning}
                    onStart={handleStart}
                    onPause={handlePause}
                    onReset={handleReset}
                />
            </div>
        </div>
    );
};

export default StopWatch;