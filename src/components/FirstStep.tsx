import { Rock, Paper, Scissors } from "./options/Options";

const FirstStep = () => {
    return (
        <div className="options flex flex-col bg-triangle bg-no-repeat bg-center bg-[length:15rem_12rem]">
            <div className="flex justify-between">
                <Paper />
                <Scissors />
            </div>
            <Rock />
        </div>
    );
};

export default FirstStep;
