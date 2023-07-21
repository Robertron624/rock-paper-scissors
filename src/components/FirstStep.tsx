const FirstStep = () => {
    return (
        <div>
            <div className="options flex flex-col bg-triangle bg-no-repeat bg-center bg-[length:15rem_12rem]">
                <div className="top flex justify-between">
                    <div className="option bg-option-background w-28 h-28 rounded-full flex justify-center items-center bg-gradient-to-b from-paper-start to-paper-end">
                        <div className="bg-option-background rounded-full w-24 h-24 flex justify-center items-center">
                            <img src="icon-paper.svg" alt="paper" />
                        </div>
                    </div>
                    <div className="option bg-option-background w-28 h-28 rounded-full flex justify-center items-center bg-gradient-to-b from-scissors-start to-scissors-end ">
                        <div className="bg-option-background rounded-full w-24 h-24 flex justify-center items-center">
                            <img src="icon-scissors.svg" alt="scissors" />
                        </div>
                    </div>
                </div>
                <div className="option mx-auto bg-gradient-to-b from-rock-start to-rock-end w-28 h-28 rounded-full flex justify-center items-center">
                    <div className="bg-option-background rounded-full w-24 h-24 flex justify-center items-center">
                        <img src="icon-rock.svg" alt="rock" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstStep;
