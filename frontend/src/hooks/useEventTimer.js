import { useState, useEffect } from 'react';

const useEventTimer = (endTime) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft('EVENT ENDED');
            } else {
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft(
                    `${hours.toString().padStart(2, '0')}:${minutes
                        .toString()
                        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                );
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

    return timeLeft;
};

export default useEventTimer;
