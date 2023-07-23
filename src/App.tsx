import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import RulesModal from "./components/RulesModal";
import { useGameStore } from "./store";

function App() {
    const [isRulesModalOpen, setIsRulesModalOpen] = useState<boolean>(false);

    const handleRulesModal = () => {
        setIsRulesModalOpen(!isRulesModalOpen);
    };

    const currentGameStep = useGameStore((state) => state.currentGameStep);
    const playerScore = useGameStore((state) => state.playerScore);
    const setPlayerScore = useGameStore((state) => state.setPlayerScore);


    // Save the player score in local storage before player leaves the page and set it back when the player comes back

    useEffect(() => {
        
        const saveScore = ():void => {
            localStorage.setItem('playerScore', JSON.stringify(playerScore));
        }

        window.addEventListener('beforeunload', saveScore);

        return () => window.removeEventListener('beforeunload', saveScore);

    }, [playerScore]);

    useEffect(() => {
        const playerScoreFromLocalStorage = localStorage.getItem('playerScore');
        if (playerScoreFromLocalStorage) {
            setPlayerScore(JSON.parse(playerScoreFromLocalStorage));
        }
    }, [setPlayerScore]);

    return (
        <>
            <Header />
            <div className="playground my-28">
                
                {currentGameStep === 'user-pick' && <FirstStep />}

                {currentGameStep === 'computer-thinking' && <SecondStep />}

                {currentGameStep === 'game-over' && <ThirdStep />}

            </div>
            <button
                onClick={handleRulesModal}
                className="rounded-md px-8 py-1 text-white border-2 border-white"
            >
                RULES
            </button>
            <RulesModal
                isRulesModalOpen={isRulesModalOpen}
                setIsRulesModalOpen={setIsRulesModalOpen}
            />
        </>
    );
}

export default App;
