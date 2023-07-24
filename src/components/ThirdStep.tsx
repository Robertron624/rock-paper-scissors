import { useGameStore } from "../store";
import { GameStep, GameChoice } from "../store";
import { returnOption } from "../utils";
import { useDefineWinner } from "../useDefineWinner";

const ThirdStep = () => {
    const playerChoice = useGameStore((state) => state.playerChoice);
    const computerChoice = useGameStore((state) => state.computerChoice);

    // functions to play again
    const setCurrentGameStep = useGameStore(
        (state) => state.setCurrentGameStep
    );
    const setPlayerChoice = useGameStore((state) => state.setPlayerChoice);
    const setComputerChoice = useGameStore((state) => state.setComputerChoice);

    const handlePlayAgain = ():void => {
        setCurrentGameStep(GameStep.UserPick);
        setPlayerChoice(GameChoice.null);
        setComputerChoice(GameChoice.null);
    };

    // use the useDefineWinner hook to define the winner
    const winner = useDefineWinner();

    return (
        <div>
            <div className="choices md:max-w-2xl md:h-56 mx-auto h-40 flex justify-between text-white">
                <div className="user md:flex-col-reverse flex flex-col justify-between ">
                    {returnOption(playerChoice)}

                    <h3 className="font-semibold">YOU PICKED</h3>
                </div>
                <div className="md:block hidden end-message mt-20">
                    <h1 className="text-4xl font-bold text-white">
                        {winner === "player" && "YOU WIN"}
                        {winner === "computer" && "YOU LOSE"}
                        {winner === "draw" && "DRAW"}
                    </h1>
                    <button
                        onClick={handlePlayAgain}
                        className="mt-10 font-semibold text-sm rounded-md w-44 py-2 text-score bg-white"
                    >
                        PLAY AGAIN
                    </button>
                </div>
                <div className="house md:items-center md:flex-col-reverse flex flex-col justify-between items-end">
                    {returnOption(computerChoice)}
                    <h3 className="font-semibold">THE HOUSE PICKED</h3>
                </div>
            </div>
            <div className="md:hidden end-message mt-20">
                <h1 className="text-4xl font-bold text-white">
                    {winner === "player" && "YOU WIN"}
                    {winner === "computer" && "YOU LOSE"}
                    {winner === "draw" && "DRAW"}
                </h1>
                <button
                    onClick={handlePlayAgain}
                    className="mt-10 font-semibold text-sm rounded-md w-44 py-2 text-score bg-white"
                >
                    PLAY AGAIN
                </button>
            </div>
        </div>
    );
};

export default ThirdStep;
