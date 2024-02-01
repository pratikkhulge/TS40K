import React, { useState, useEffect } from 'react';

const ReverseTimer = ({ initialTime }) => 
{
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        let timer;

        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning, time]);

    const startStop = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const reset = () => {
        setIsRunning(false);
        setTime(initialTime);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div>
            <h1>{formatTime(time)}</h1>
            <button onClick={startStop}>{isRunning ? 'Pause' : 'Start'}</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default ReverseTimer;
