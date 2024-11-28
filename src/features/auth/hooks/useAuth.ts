import { create } from "zustand";


interface AuthState {
  isAuthenticated: boolean;
  permissions: string[];
  login: (permissions: string[]) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  permissions: [],
  login: (permissions) => set({ isAuthenticated: true, permissions }),
  logout: () => set({ isAuthenticated: false, permissions: [] }),
}));