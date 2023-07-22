import { create } from "zustand";

export interface GameState {
    currentGameStep: "user-pick" | "computer-thinking" | "game-over";
    playerScore: number;
    computerScore: number;
    playerChoice: string;
    computerChoice: string;
    winner: string;
    setCurrentGameStep: (
        state: "user-pick" | "computer-thinking" | "game-over"
    ) => void;
    increasePlayerScore: () => void;
    increaseComputerScore: () => void;
    setPlayerChoice: (choice: string) => void;
    setComputerChoice: (choice: string) => void;
    setWinner: (winner: string) => void;
}

// Create a store for storing the rock paper scissors game state
export const useGameStore = create<GameState>((set) => ({
    currentGameStep: "user-pick",
    playerScore: 0,
    computerScore: 0,
    playerChoice: "",
    computerChoice: "",
    winner: "",
    setCurrentGameStep: (state) => set({ currentGameStep: state }),
    increasePlayerScore: () => set((state) => ({ playerScore: state.playerScore + 1 })),
    increaseComputerScore: () => set((state) => ({ computerScore: state.computerScore + 1 })),
    setPlayerChoice: (choice) => set({ playerChoice: choice }),
    setComputerChoice: (choice) => set({ computerChoice: choice }),
    setWinner: (winner) => set({ winner: winner }),
}));
