
export const Rock = () => {

    return (
        <div className="option mx-auto bg-gradient-to-b from-rock-start to-rock-end w-28 h-28 rounded-full flex justify-center items-center">
            <div className="shadow-inner shadow-dark bg-option-background rounded-full w-24 h-24 flex justify-center items-center">
                <img src="icon-rock.svg" alt="rock" />
            </div>
        </div>
    );
};

export const Paper = () => {

    return (
        <div className="option bg-option-background w-28 h-28 rounded-full flex justify-center items-center bg-gradient-to-b from-paper-start to-paper-end">
            <div className="shadow-inner shadow-dark bg-option-background rounded-full w-24 h-24 flex justify-center items-center">
                <img src="icon-paper.svg" alt="paper" />
            </div>
        </div>
    );
};
export const Scissors = () => {

    return (
        <div className="option bg-option-background w-28 h-28 rounded-full flex justify-center items-center bg-gradient-to-b from-scissors-start to-scissors-end ">
            <div className="shadow-inner shadow-dark bg-option-background rounded-full w-24 h-24 flex justify-center items-center">
                <img src="icon-scissors.svg" alt="scissors" />
            </div>
        </div>
    );
};

export const Placeholder = () => {
    return (
        <div className="animate-pulse option bg-placeholder w-24 h-24 rounded-full flex justify-center items-center ml-auto">
        </div>
    );
}