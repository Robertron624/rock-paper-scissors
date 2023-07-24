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
        // Function de define the winner taking into account spock and lizard
        
        const defineWinner = ():void => {
            if (playerChoice === computerChoice) {
                setWinner(GameWinner.Draw);
            } else if ( 
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "rock" && computerChoice === "lizard") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "paper" && computerChoice === "spock") ||
                (playerChoice === "scissors" && computerChoice === "paper") ||
                (playerChoice === "scissors" && computerChoice === "lizard") ||
                (playerChoice === "lizard" && computerChoice === "paper") ||
                (playerChoice === "lizard" && computerChoice === "spock") ||
                (playerChoice === "spock" && computerChoice === "rock") ||
                (playerChoice === "spock" && computerChoice === "scissors")
            ) {
                setWinner(GameWinner.Player);
                increasePlayerScore();
            }
            else {
                setWinner(GameWinner.Computer);
            }
        };

        defineWinner();
    }, [computerChoice, playerChoice, setWinner, increasePlayerScore]);

    return winner;
};