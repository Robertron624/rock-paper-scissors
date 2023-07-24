import { Rock, Paper, Scissors } from "./components/options/Options";
import { GameChoice } from "./store";

export const returnOption = (choice: GameChoice) => {
    switch (choice) {
        case "rock":
        return <Rock />;
        case "paper":
        return <Paper />;
        case "scissors":
        return <Scissors />;
    }
}