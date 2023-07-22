import { Rock, Scissors } from "./options/Options";

const FourthStep = () => {
    return (
        <div className="mt-8">
            <div className="choices flex justify-between text-white">
                <div className="user flex flex-col justify-between">
                    <Rock />
                    <h3 className="font-semibold">YOU PICKED</h3>
                </div>
                <div className="house flex flex-col justify-between items-end">
                    <Scissors />
                    <h3 className="font-semibold">THE HOUSE PICKED</h3>
                </div>
            </div>
            <div className="end-message mt-20">
                <h1 className="text-4xl font-bold text-white">YOU WIN</h1>
                <button className="mt-10 font-semibold text-sm rounded-md w-44 py-2 text-score bg-white">
                    PLAY AGAIN
                </button>
            </div>
        </div>
    );
};

export default FourthStep;
