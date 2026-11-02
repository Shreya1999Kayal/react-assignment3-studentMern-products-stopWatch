export type TimeDisplayProps = {
    formattedTime: string;
}

export type ButtonRowProps = {
    isRunning: boolean;
    onStart: () => void;
    onPause: () => void;
    onReset: () => void;
}