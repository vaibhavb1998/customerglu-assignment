import { useCallback, useState } from 'react';

// ui-components
import Countdown from '../ui-components/Countdown';

const TIMER_STATUS = {
    PAUSE: 'PAUSE',
    PLAY: 'PLAY',
};
const TIME_LIMIT = 5;

function CountDownTimerDemo() {
    const [status, setStatus] = useState(null);
    const [timeLimit, setTimeLimit] = useState(TIME_LIMIT);
    const [isFinished, setIsFinished] = useState(false);

    function handleReset() {
        setStatus(null);
        setIsFinished(false);
        setTimeLimit(TIME_LIMIT);
    }

    function handleToggle() {
        setStatus((currentStatus) =>
            currentStatus === TIMER_STATUS.PLAY
                ? TIMER_STATUS.PAUSE
                : TIMER_STATUS.PLAY
        );
    }

    const handleOnFinish = useCallback(() => {
        setIsFinished(true);
    }, []);

    return (
        <div className="flex justify-center items-center h-full">
            <div>
                <Countdown
                    status={status}
                    timeLimit={timeLimit}
                    onFinish={handleOnFinish}
                    isFinished={isFinished}
                >
                    Countdown timer
                </Countdown>
                <div className="text-center mt-12 space-x-8">
                    <button
                        type="button"
                        className="w-[180px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-3xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                        onClick={handleToggle}
                        disabled={isFinished}
                    >
                        {isFinished
                            ? 'Ok'
                            : status !== TIMER_STATUS.PLAY
                            ? 'Start'
                            : 'Stop'}
                    </button>
                    <button
                        type="button"
                        className="w-[180px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-3xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CountDownTimerDemo;
