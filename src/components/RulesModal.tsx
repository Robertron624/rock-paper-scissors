interface RulesModalProps {
    isRulesModalOpen: boolean;
    setIsRulesModalOpen: (isRulesModalOpen: boolean) => void;
}

const RulesModal = ({
    isRulesModalOpen,
    setIsRulesModalOpen,
}: RulesModalProps) => {
    const handleRulesModal = () => {
        setIsRulesModalOpen(!isRulesModalOpen);
    };

    return (
        <dialog open={isRulesModalOpen} className="modal">
            <div className="modal-content h-full w-full bg-white py-14">
                <h2 className="mb-20 text-3xl font-bold text-dark">RULES</h2>
                <div className="modal-body flex justify-center">
                    <img src="/image-rules.svg" alt="rules" />
                </div>
                <button className="mt-28" onClick={handleRulesModal}>
                    <img src="/icon-close.svg" alt="close" />
                </button>
            </div>
        </dialog>
    );
};

export default RulesModal;
