import { useEffect } from "react";

function Timer({
    timeLeft,
    setTimeLeft,
    paused,
    onTimeUp
}) {
    useEffect(() => {

        if (paused || timeLeft <= 0) {
            return;
        }

        const timer = setInterval(() => {

            setTimeLeft((previousTime) => {

                if (previousTime <= 1) {
                    clearInterval(timer);
                    onTimeUp();
                    return 0;
                }

                return previousTime - 1;
            });

        }, 1000);

        return () => {
            clearInterval(timer);
        };

    }, [
        paused,
        timeLeft,
        setTimeLeft,
        onTimeUp
    ]);


    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;


    return (
        <div className="quiz-timer">

            <span>⏱</span>

            <span>
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
            </span>

        </div>
    );
}

export default Timer;