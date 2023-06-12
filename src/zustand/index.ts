import { create } from "zustand";

export const useZustand=create((set)=>({
    showInstructions:false,
    setShowInstructions:((showInstructions: unknown)=>set({showInstructions})),
    showAllQuestions:false,
    setShowAllQuestions:(showAllQuestions:unknown)=>set({showAllQuestions}),
    showQuiz:false,
    setShowQuiz:((showQuiz:unknown)=>set({showQuiz}))

}))