import { useEffect } from "react";
import { Placeholder } from "./options/Options"
import { useGameStore } from "../store"
import { GameStep, GameChoice } from "../store"
import { returnOption } from "../utils";


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
      setComputerChoice(computerChoice as GameChoice);
      setCurrentGameStep(GameStep.GameOver);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setComputerChoice, setCurrentGameStep]);

  return (
    <>
        <div className="choices md:h-56 md:max-w-sm mx-auto h-40 flex justify-between text-white text-sm">
          <div className="user flex flex-col justify-between">
            
            {returnOption(playerChoice)}

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
    </>
  )
}

export default SecondStep