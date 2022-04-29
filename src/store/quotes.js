import create from 'zustand';

export const useQuoteStore = create((set) => ({
  quotes: { month: [], older: [] },
  currentQuote: [],
  setQuotes: (month, older) => set(() => ({ quotes: { month, older } })),
  setCurrentQuote: (current) => set(() => ({ currentQuote: current })),
  showModal: false,
  setShowModal: (show) => set(() => ({ showModal: show })),
}));
