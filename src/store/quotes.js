import create from 'zustand';
import { getAllQuotes } from '../api/quotes';

export const useQuoteStore = create((set) => ({
  quotes: { month: [], older: [] },
  currentQuote: [],
  setQuotes: (month, older) => set(() => ({ quotes: { month, older } })),
  setCurrentQuote: (current) => set(() => ({ currentQuote: current })),
  showModal: false,
  setShowModal: (show) => set(() => ({ showModal: show })),
}));
