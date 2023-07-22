import { Rock, Scissors } from "./options/Options"

const ThirdStep = () => {
  return (
    <div className="choices flex justify-between text-white">
        <div className="user flex flex-col justify-between">
            <Rock />
            <h3 className="font-semibold">
                YOU PICKED
            </h3>
        </div>
        <div className="house flex flex-col justify-between items-end">
            <Scissors />
            <h3 className="font-semibold">
                THE HOUSE PICKED
            </h3>
        </div>
    </div>
  )
}

export default ThirdStep