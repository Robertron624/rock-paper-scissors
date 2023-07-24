
export const Rock = () => {

    return (
        <div className={`option mx-auto w- bg-gradient-to-b from-rock-start to-rock-end md:w-40 md:h-40 w-28 h-28 rounded-full flex justify-center items-center`}>
            <div className={`shadow-inner shadow-dark bg-option-background rounded-full w-24 h-24 md:w-32 md:h-32 flex justify-center items-center`}>
                <img src="icon-rock.svg" alt="rock" />
            </div>
        </div>
    );
};

export const Paper = () => {

    return (
        <div className={`option bg-option-background md:w-40 md:h-40 w-28 h-28 rounded-full flex justify-center items-center bg-gradient-to-b from-paper-start to-paper-end`}>
            <div className={`shadow-inner shadow-dark bg-option-background rounded-full w-24 h-24 md:w-32 md:h-32 flex justify-center items-center`}>
                <img src="icon-paper.svg" alt="paper" />
            </div>
        </div>
    );
};
export const Scissors = () => {

    return (
        <div className={`option bg-option-background md:w-40 md:h-40 w-28 h-28 rounded-full flex justify-center items-center bg-gradient-to-b from-scissors-start to-scissors-end `}>
            <div className={` shadow-inner shadow-dark bg-option-background rounded-full w-24 h-24 md:w-32 md:h-32 flex justify-center items-center`}>
                <img src="icon-scissors.svg" alt="scissors" />
            </div>
        </div>
    );
};

export const Lizard = () => {
        return (
            <div className={`option bg-option-background md:w-40 md:h-40 w-28 h-28 rounded-full flex justify-center items-center bg-gradient-to-b from-lizard-start to-lizard-end `}>
                <div className={` shadow-inner shadow-dark bg-option-background rounded-full w-24 h-24 md:w-32 md:h-32 flex justify-center items-center`}>
                    <img src="icon-lizard.svg" alt="lizard" />
                </div>
            </div>
        );
    }

export const Spock = () => {
        return (
            <div className={`option bg-option-background md:w-40 md:h-40 w-28 h-28 rounded-full flex justify-center items-center bg-gradient-to-b from-spock-start to-spock-end `}>
                <div className={` shadow-inner shadow-dark bg-option-background rounded-full w-24 h-24 md:w-32 md:h-32 flex justify-center items-center`}>
                    <img src="icon-spock.svg" alt="spock" />
                </div>
            </div>
        );
    }

export const Placeholder = () => {
    return (
        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full flex items-center">
            <div className="animate-pulse option bg-placeholder w-24 h-24 md:w-32 md:h-32 rounded-full flex justify-center items-center ml-auto">
            </div>
        </div>
    );
}