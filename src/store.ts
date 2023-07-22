import { create } from "zustand";

export enum GameStep {
    UserPick = "user-pick",
    ComputerThinking = "computer-thinking",
    GameOver = "game-over",
}

export enum GameChoice {
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors",
    null = "",
}

export interface GameState {
    currentGameStep: GameStep;
    playerScore: number;
    computerScore: number;
    playerChoice: GameChoice;
    computerChoice: GameChoice;
    winner: string;
    setCurrentGameStep: (
        state: GameStep
    ) => void;
    increasePlayerScore: () => void;
    increaseComputerScore: () => void;
    setPlayerChoice: (choice: GameChoice) => void;
    setComputerChoice: (choice: GameChoice) => void;
    setWinner: (winner: string) => void;
}

// Create a store for storing the rock paper scissors game state
export const useGameStore = create<GameState>((set) => ({
    currentGameStep: GameStep.UserPick,
    playerScore: 0,
    computerScore: 0,
    playerChoice: GameChoice.null,
    computerChoice: GameChoice.null,
    winner: "",
    setCurrentGameStep: (state) => set({ currentGameStep: state }),
    increasePlayerScore: () => set((state) => ({ playerScore: state.playerScore + 1 })),
    increaseComputerScore: () => set((state) => ({ computerScore: state.computerScore + 1 })),
    setPlayerChoice: (choice:GameChoice) => set({ playerChoice: choice }),
    setComputerChoice: (choice:GameChoice) => set({ computerChoice: choice }),
    setWinner: (winner) => set({ winner: winner }),
}));
