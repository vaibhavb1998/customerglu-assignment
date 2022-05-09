import { useEffect, useState } from 'react';

function Countdown({ status, timeLimit, onFinish, isFinished }) {
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        setSeconds(timeLimit);
    }, [timeLimit]);

    useEffect(() => {
        let timer;

        switch (status) {
            case 'PLAY':
                timer = setInterval(() => {
                    setSeconds((current) => current - 1);
                }, [1000]);
                break;

            case 'PAUSE':
                clearInterval(timer);
                break;

            default:
                clearInterval(timer);
                setSeconds(timeLimit);
        }

        // clean on unmount
        return () => clearInterval(timer);
    }, [status, timeLimit, seconds]);

    useEffect(() => {
        if (seconds <= 0) onFinish();
    }, [seconds, onFinish]);

    return (
        <div className="text-center text-8xl">
            {isFinished ? 'Time expired !!!' : seconds}
        </div>
    );
}

export default Countdown;
