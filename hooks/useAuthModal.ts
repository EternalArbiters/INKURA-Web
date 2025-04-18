// hooks/useAuthModal.ts
import { create } from 'zustand';

interface AuthModalState {
  isOpen: boolean;
  type: 'login' | 'signup';
  onOpen: (type: 'login' | 'signup') => void;
  onClose: () => void;
}

export const useAuthModal = create<AuthModalState>((set) => ({
  isOpen: false,
  type: 'login',
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ isOpen: false }),
}));
