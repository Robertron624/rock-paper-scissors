import { useEffect } from "react";
import { useGameStore, GameWinner } from "./store";

// This hook defines the winner of the game, updates the score and returns the winner as a string
export const useDefineWinner = ():string => {
    const playerChoice = useGameStore((state) => state.playerChoice);
    const computerChoice = useGameStore((state) => state.computerChoice);

    const winner = useGameStore((state) => state.winner);
    const setWinner = useGameStore((state) => state.setWinner);
    const increasePlayerScore = useGameStore(
        (state) => state.increasePlayerScore
    );

    useEffect(() => {
        const defineWinner = () => {
            if (playerChoice === "rock" && computerChoice === "scissors") {
                setWinner(GameWinner.Player);
                increasePlayerScore();
            }

            if (playerChoice === "rock" && computerChoice === "paper") {
                setWinner(GameWinner.Computer);
            }

            if (playerChoice === "paper" && computerChoice === "rock") {
                setWinner(GameWinner.Player);
                increasePlayerScore();
            }

            if (playerChoice === "paper" && computerChoice === "scissors") {
                setWinner(GameWinner.Computer);
            }

            if (playerChoice === "scissors" && computerChoice === "paper") {
                setWinner(GameWinner.Player);
                increasePlayerScore();
            }

            if (playerChoice === "scissors" && computerChoice === "rock") {
                setWinner(GameWinner.Computer);
            }

            if (playerChoice === computerChoice) {
                setWinner(GameWinner.Draw);
            }
        };
        defineWinner();
    }, [computerChoice, playerChoice, setWinner, increasePlayerScore]);

    return winner;
};