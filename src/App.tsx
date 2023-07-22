import "./App.css";
import { useState } from "react";
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
