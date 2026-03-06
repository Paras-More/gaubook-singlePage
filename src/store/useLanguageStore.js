import { create } from "zustand";

const useLanguageStore = create((set) => ({
  language: "en",
  toggleLanguage: () =>
    set((state) => ({ language: state.language === "en" ? "hi" : "en" })),
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;
