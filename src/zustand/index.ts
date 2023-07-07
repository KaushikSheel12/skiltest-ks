import { create } from "zustand";

const initialState = {
  unseen: true,
  attempted: false,
  pending: true,
  time: 0,
  type: "maths",
};

export const useZustand = create((set) => ({
  data: initialState,
  setData: (newData) => set(() => ({ data: newData })),

  questionIds: [],

  addQuestion: (questionId) =>
  set((state) => {
    if (!state.questionIds.includes(questionId)) {
      return {
        questionIds: [...state.questionIds, questionId],
      };
    }
    return null; // Return null if the ID already exists
  }),

  showInstructions: false,
  setShowInstructions: (showInstructions: unknown) => set({ showInstructions }),
  showAllQuestions: false,
  setShowAllQuestions: (showAllQuestions: unknown) => set({ showAllQuestions }),
  showQuiz: true,
  setShowQuiz: (showQuiz: unknown) => set({ showQuiz }),
}));
