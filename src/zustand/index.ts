import { create } from "zustand";

const initialState = {
  unseen: true,
  attempted: false,
  pending: true,
  time: 0,
  type: "maths",
};

export const useZustand = create((set) => ({
  //  data: initialState,
  //setData: (newData) => set(() => ({ data: newData })),

  data: [],
  addData: (item) => set((state) => ({ data: [...state.data, item] })),

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

  selectedAnswers: [],
  setSelectedAnswers: (newAnswers) => set({ selectedAnswers: newAnswers }),

  showInstructions: false,
  setShowInstructions: (showInstructions: unknown) => set({ showInstructions }),
  showAllQuestions: false,
  setShowAllQuestions: (showAllQuestions: unknown) => set({ showAllQuestions }),
  showQuiz: true,
  setShowQuiz: (showQuiz: unknown) => set({ showQuiz }),
}));
