import create from 'zustand';

export const useQuoteStore = create((set) => ({
  data: { month: [], older: [] },
  currentQuote: [],
  setData: (data) => set(() => ({ quotes: data })),
  setCurrentQuote: (data) => set(() => ({ currentQuote: data })),
}));
