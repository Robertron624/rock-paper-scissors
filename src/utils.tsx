import { Rock, Paper, Scissors, Lizard, Spock } from "./components/options/Options";
import { GameChoice } from "./store";

export const returnOption = (choice: GameChoice): JSX.Element => {
    switch (choice) {
        case "rock":
        return <Rock />;
        case "paper":
        return <Paper />;
        case "scissors":
        return <Scissors />;
        case "lizard":
        return <Lizard />;
        case "spock":
        return <Spock />;
        default:
        return <></>;
    }
}