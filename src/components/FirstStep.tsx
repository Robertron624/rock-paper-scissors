import { Rock, Paper, Scissors } from "./options/Options";
import { useGameStore } from "../store";

const FirstStep = () => {
    const setPlayerChoice = useGameStore((state) => state.setPlayerChoice);

    const setCurrentGameStep = useGameStore((state) => state.setCurrentGameStep);

    const handlePlayerChoice = (e: React.MouseEvent<HTMLElement>) => {
        const choice = e.currentTarget.id;
        setPlayerChoice(choice);
        setCurrentGameStep('computer-thinking');
    };

    return (
        <div className="options flex flex-col bg-triangle bg-no-repeat bg-center bg-[length:15rem_12rem]">
            <div className="flex justify-between">
                <button onClick={handlePlayerChoice} id="paper">
                    <Paper />
                </button>
                <button onClick={handlePlayerChoice} id="scissors">
                    <Scissors />
                </button>
            </div>
            <button onClick={handlePlayerChoice} id="rock" className="mx-auto w-fit">
                <Rock />
            </button>
        </div>
    );
};

export default FirstStep;
