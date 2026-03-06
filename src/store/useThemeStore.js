import { create } from "zustand";
import themes, { DEFAULT_THEME } from "../config/theme";

const applyTheme = (themeKey) => {
  const theme = themes[themeKey];
  if (!theme) return;
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};

// Apply default theme on load
if (typeof window !== "undefined") {
  applyTheme(DEFAULT_THEME);
}

const useThemeStore = create((set) => ({
  currentTheme: DEFAULT_THEME,
  availableThemes: Object.keys(themes).map((key) => ({
    key,
    name: themes[key].name,
  })),
  setTheme: (themeKey) => {
    applyTheme(themeKey);
    set({ currentTheme: themeKey });
  },
}));

export default useThemeStore;
