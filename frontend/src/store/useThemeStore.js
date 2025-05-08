import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Samvad-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Samvad-theme", theme);
    set({ theme });
  },
}));
