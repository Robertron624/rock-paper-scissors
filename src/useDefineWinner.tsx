import { useEffect } from "react";
import { useGameStore } from "./store";

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
                setWinner("player");
                increasePlayerScore();
            }

            if (playerChoice === "rock" && computerChoice === "paper") {
                setWinner("computer");
            }

            if (playerChoice === "paper" && computerChoice === "rock") {
                setWinner("player");
                increasePlayerScore();
            }

            if (playerChoice === "paper" && computerChoice === "scissors") {
                setWinner("computer");
            }

            if (playerChoice === "scissors" && computerChoice === "paper") {
                setWinner("player");
                increasePlayerScore();
            }

            if (playerChoice === "scissors" && computerChoice === "rock") {
                setWinner("computer");
            }

            if (playerChoice === computerChoice) {
                setWinner("draw");
            }
        };
        defineWinner();
    }, [computerChoice, playerChoice, setWinner, increasePlayerScore]);

    return winner;
};