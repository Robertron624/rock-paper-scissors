import { useEffect } from "react";

interface RulesModalProps {
    isRulesModalOpen: boolean;
    setIsRulesModalOpen: (isRulesModalOpen: boolean) => void;
}

const RulesModal = ({
    isRulesModalOpen,
    setIsRulesModalOpen,
}: RulesModalProps) => {
    const handleRulesModal = ():void => {
        setIsRulesModalOpen(!isRulesModalOpen);
    };

    
    useEffect(() => {
        // Close the modal when the user presses the escape key
        const handleEscape = (e: KeyboardEvent):void => {
            if (e.key === "Escape") {
                setIsRulesModalOpen(false);
            }
        };
        window.addEventListener("keydown", handleEscape);

        // Close the modal when the user clicks outside of it
        const handleClickOutside = (e: MouseEvent):void => {
            const target = e.target as HTMLElement;
            if (target?.classList?.contains("modal")) {
                setIsRulesModalOpen(false);
            }
        };
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("keydown", handleEscape);
            window.removeEventListener("click", handleClickOutside);
        }
    }, [setIsRulesModalOpen]);
    

    return (
        <dialog open={isRulesModalOpen} className="modal backdrop-brightness-50">
            <div className="modal-box overflow-y-hidden max-w-none max-h-none h-full w-full bg-white py-14 md:py-6 md:max-w-md md:max-h-[27rem] rounded-md">
                <div className="mb-20 md:flex md:justify-between justify-center w-full md:max-w-[90%] md:mx-auto">
                <h2 className="text-3xl font-bold text-dark">RULES</h2>
                <button className="hidden md:block" onClick={handleRulesModal}>
                    <span className="sr-only">
                        close
                    </span>
                    <img src="/icon-close.svg" alt="close" />
                </button>
                </div>
                <div className="modal-body flex justify-center">
                    <img src="/image-rules-bonus.svg" alt="rules" />
                </div>
                <button className="mt-28 md:hidden" onClick={handleRulesModal}>
                    <span className="sr-only">
                        close
                    </span>
                    <img src="/icon-close.svg" alt="close" />
                </button>
            </div>
            <div className="modal-backdrop">
                <button>
                    close
                </button>
            </div>
        </dialog>
    );
};

export default RulesModal;
