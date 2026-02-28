import { useState, useEffect } from 'react';
import gameInfo from '../mocks/gameInfo';
import useEventTimer from '../hooks/useEventTimer';
import GameInfoBox from '../components/GameInfoBox';


const GameInfo = () => {
    const { tasksCompleted, totalTasks, rank, points } = gameInfo;
    const progress = (tasksCompleted / totalTasks) * 100;

    const getEventEndTime = () => {
        // Mock function to get event end time from backend
        return new Date().getTime() + 3 * 60 * 60 * 1000; // 3 hours from now
    };

    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        setEndTime(getEventEndTime());
    }, []);

    const timeLeft = useEventTimer(endTime);

    return (
        <GameInfoBox timeLeft={timeLeft} tasksCompleted={tasksCompleted} totalTasks={totalTasks} rank={rank} points={points} progress={progress} />
    );
};

export default GameInfo;