
import { Rock, Placeholder } from "./options/Options"


const SecondStep = () => {
  return (
    <div>
        <div className="choices h-40 flex justify-between text-white text-sm">
          <div className="user flex flex-col justify-between">
            <Rock />
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