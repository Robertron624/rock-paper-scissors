import { Rock, Paper, Scissors } from "./options/Options";
import { useGameStore } from "../store";
import { GameStep, GameChoice } from "../store";

const FirstStep = () => {
    const setPlayerChoice = useGameStore((state) => state.setPlayerChoice);

    const setCurrentGameStep = useGameStore(
        (state) => state.setCurrentGameStep
    );

    const handlePlayerChoice = (e: React.MouseEvent<HTMLElement>) => {
        const choice = e.currentTarget.id;
        setPlayerChoice(choice as GameChoice);
        setCurrentGameStep(GameStep.ComputerThinking);
    };

    return (
        <div className="options flex flex-col bg-triangle bg-no-repeat bg-center bg-[length:15rem_12rem]">
            <div className="flex justify-between">
                <button onClick={handlePlayerChoice} id="paper">
                    <span className="sr-only">paper</span>
                    <Paper />
                </button>
                <button onClick={handlePlayerChoice} id="scissors">
                    <span className="sr-only">scissors</span>
                    <Scissors />
                </button>
            </div>
            <button
                onClick={handlePlayerChoice}
                id="rock"
                className="mx-auto w-fit"
            >
                <span className="sr-only">rock</span>
                <Rock />
            </button>
        </div>
    );
};

export default FirstStep;
