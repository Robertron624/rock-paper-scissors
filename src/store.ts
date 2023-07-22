import { createStore } from "zustand";

export interface GameState {
    currentGameState: "user-pick" | "computer-pick" | "game-over";
    playerScore: number;
    computerScore: number;
    playerChoice: string;
    computerChoice: string;
    winner: string;
    setcurrentGameState: (
        state: "user-pick" | "computer-pick" | "game-over"
    ) => void;
    setPlayerScore: (score: number) => void;
    setComputerScore: (score: number) => void;
    setPlayerChoice: (choice: string) => void;
    setComputerChoice: (choice: string) => void;
    setWinner: (winner: string) => void;
}

// Create a store for storing the rock paper scissors game state
export const useGameStore = createStore<GameState>((set) => ({
    currentGameState: "user-pick",
    playerScore: 0,
    computerScore: 0,
    playerChoice: "",
    computerChoice: "",
    winner: "",
    setcurrentGameState: (state) => set({ currentGameState: state }),
    setPlayerScore: (score) => set({ playerScore: score }),
    setComputerScore: (score) => set({ computerScore: score }),
    setPlayerChoice: (choice) => set({ playerChoice: choice }),
    setComputerChoice: (choice) => set({ computerChoice: choice }),
    setWinner: (winner) => set({ winner: winner }),
}));
