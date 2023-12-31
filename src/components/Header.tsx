import { useGameStore } from "../store";

const Header = () => {

    const playerScore = useGameStore((state) => state.playerScore);

    return (
        <header className="md:max-w-xl mx-auto flex justify-between items-center border-outline border-2 rounded-md py-2 p-4">
            <div className="logo">
                <img src="logo.svg" alt="logo" className="w-24 md:w-36" />
            </div>
            <div className="score font-bold text-dark bg-white py-2 px-5 md:px-8 rounded-md">
                <p className="text-xs text-score">SCORE</p>
                <p className="text-4xl">
                    {playerScore}
                </p>
            </div>
        </header>
    );
};

export default Header;
