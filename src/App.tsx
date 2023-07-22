import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FourthStep from "./components/FourthStep";
import RulesModal from "./components/RulesModal";

function App() {
    const [isRulesModalOpen, setIsRulesModalOpen] = useState<boolean>(false);

    const handleRulesModal = () => {
        setIsRulesModalOpen(!isRulesModalOpen);
    };

    return (
        <>
            <Header />
            <div className="playground my-28">
                <FirstStep />
                <SecondStep />
                <ThirdStep />
                <FourthStep />
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
