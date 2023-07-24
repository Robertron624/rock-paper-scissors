import { Rock, Paper, Scissors, Lizard, Spock } from "./options/Options";
import { useGameStore } from "../store";
import { GameStep, GameChoice } from "../store";

const FirstStep = () => {
    const setPlayerChoice = useGameStore((state) => state.setPlayerChoice);

    const setCurrentGameStep = useGameStore(
        (state) => state.setCurrentGameStep
    );

    const handlePlayerChoice = (e: React.MouseEvent<HTMLElement>): void => {
        const choice = e.currentTarget.id;
        setPlayerChoice(choice as GameChoice);
        setCurrentGameStep(GameStep.ComputerThinking);
    };

    return (
        <div className="md:max-w-sm md:gap-12 options mx-auto flex flex-col gap-8 bg-pentagon bg-no-repeat bg-center bg-[length:15rem_16rem] md:bg-[length:22rem_14rem]">
            <div>
                <button
                    className="hover:scale-110 transition-all"
                    onClick={handlePlayerChoice}
                    id="scissors"
                >
                    <span className="sr-only">scissors</span>
                    <Scissors />
                </button>

                <div className="flex justify-between">
                    <button
                        onClick={handlePlayerChoice}
                        id="spock"
                        className="w-fit hover:scale-110 transition-all"
                    >
                        <span className="sr-only">spock</span>
                        <Spock />
                    </button>
                    <button
                        className="hover:scale-110 transition-all"
                        onClick={handlePlayerChoice}
                        id="paper"
                    >
                        <span className="sr-only">paper</span>
                        <Paper />
                    </button>
                </div>
            </div>
            <div className="flex justify-between px-6">
                <button
                    onClick={handlePlayerChoice}
                    id="lizard"
                    className="w-fit hover:scale-110 transition-all"
                >
                    <span className="sr-only">lizard</span>
                    <Lizard />
                </button>
                <button
                    onClick={handlePlayerChoice}
                    id="rock"
                    className="w-fit hover:scale-110 transition-all"
                >
                    <span className="sr-only">rock</span>
                    <Rock />
                </button>
            </div>
        </div>
    );
};

export default FirstStep;
