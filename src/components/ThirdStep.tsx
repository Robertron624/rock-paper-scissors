import { useEffect } from "react";
import { Rock, Scissors, Paper } from "./options/Options";
import { useGameStore } from "../store";
import { GameStep, GameChoice } from "../store";
const ThirdStep = () => {

    const playerChoice = useGameStore((state) => state.playerChoice);
    const computerChoice = useGameStore((state) => state.computerChoice);

    const winner = useGameStore((state) => state.winner);
    const setWinner = useGameStore((state) => state.setWinner);
    const increasePlayerScore = useGameStore((state) => state.increasePlayerScore);

    // functions to play again

    const setCurrentGameStep = useGameStore((state) => state.setCurrentGameStep);
    const setPlayerChoice = useGameStore((state) => state.setPlayerChoice);
    const setComputerChoice = useGameStore((state) => state.setComputerChoice);

    const handlePlayAgain = () => {
        setCurrentGameStep(GameStep.UserPick);
        setPlayerChoice(GameChoice.null);
        setComputerChoice(GameChoice.null);
    };

    useEffect(() => {

        const defineWinner = () => {

            if (playerChoice === 'rock' && computerChoice === 'scissors') {
                setWinner('player');
                increasePlayerScore();
            }

            if (playerChoice === 'rock' && computerChoice === 'paper') {
                setWinner('computer');
            }

            if (playerChoice === 'paper' && computerChoice === 'rock') {
                setWinner('player');
                increasePlayerScore();
            }

            if (playerChoice === 'paper' && computerChoice === 'scissors') {
                setWinner('computer');
            }

            if (playerChoice === 'scissors' && computerChoice === 'paper') {
                setWinner('player');
                increasePlayerScore();
            }

            if (playerChoice === 'scissors' && computerChoice === 'rock') {
                setWinner('computer');
            }

            if (playerChoice === computerChoice) {
                setWinner('draw');
            }

        };
        defineWinner();
    }
    
    , [computerChoice, playerChoice, setWinner, increasePlayerScore]);

    

    return (
        <div>
            <div className="choices flex justify-between text-white">
                <div className="user flex flex-col justify-between">
                    
                    {playerChoice === 'rock' && <Rock />}

                    {playerChoice === 'paper' && <Paper />}

                    {playerChoice === 'scissors' && <Scissors />}

                    <h3 className="font-semibold">YOU PICKED</h3>
                </div>
                <div className="house flex flex-col justify-between items-end">
                    
                    {computerChoice === 'rock' && <Rock />}

                    {computerChoice === 'paper' && <Paper />}

                    {computerChoice === 'scissors' && <Scissors />}

                    <h3 className="font-semibold">THE HOUSE PICKED</h3>
                </div>
            </div>
            <div className="end-message mt-20">
                <h1 className="text-4xl font-bold text-white">

                    {winner === 'player' && 'YOU WIN'}
                    {winner === 'computer' && 'YOU LOSE'}
                    {winner === 'draw' && 'DRAW'}

                </h1>
                <button onClick={handlePlayAgain} className="mt-10 font-semibold text-sm rounded-md w-44 py-2 text-score bg-white">
                    PLAY AGAIN
                </button>
            </div>
        </div>
    );
};

export default ThirdStep;
