import { useEffect } from "react";
import { Scissors, Paper ,Rock, Placeholder } from "./options/Options"
import { useGameStore } from "../store"

const SecondStep = () => {

  const playerChoice = useGameStore((state) => state.playerChoice);
  const setComputerChoice = useGameStore((state) => state.setComputerChoice);
  const setCurrentGameStep = useGameStore((state) => state.setCurrentGameStep);

  // function to make the computer pick between the three options
  const computerPick = () => {
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
  }
  
  // Wait 3 seconds before the computer makes a choice
  useEffect(() => {
    const timer = setTimeout(() => {
      const computerChoice = computerPick();
      setComputerChoice(computerChoice);
      setCurrentGameStep('game-over');
    }, 3000);
    return () => clearTimeout(timer);
  }, [setComputerChoice, setCurrentGameStep]);

  return (
    <div>
        <div className="choices h-40 flex justify-between text-white text-sm">
          <div className="user flex flex-col justify-between">
            
            {playerChoice === 'rock' && <Rock />}

            {playerChoice === 'paper' && <Paper />}

            {playerChoice === 'scissors' && <Scissors />}

            <h3 className="font-semibold">
                YOU PICKED
            </h3>
          </div>
          <div className="house  flex flex-col justify-between">
            <Placeholder />
            <h3 className="font-semibold">
                THE HOUSE PICKED
            </h3>
          </div>
        </div>
    </div>
  )
}

export default SecondStep