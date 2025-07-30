import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CardT } from '@/entities/Card/model/types'

type State = {
  deck: CardT[]
  currentIndex: number
  hasHydrated: boolean
}

type Action = {
  setDeck: (cards: CardT[]) => void
  nextCard: () => void
  prevCard: () => void
  setHasHydrated: (value: boolean) => void
}

export const useGameStore = create<State & Action>()(
  persist(
    (set) => ({
      deck: [],
      currentIndex: 0,
      hasHydrated: false,

      setDeck: (cards) => set({ deck: cards, currentIndex: 0 }),
      nextCard: () =>
        set((state) =>
          state.currentIndex < state.deck.length - 1
            ? { currentIndex: state.currentIndex + 1 }
            : state,
        ),
      prevCard: () =>
        set((state) =>
          state.currentIndex > 0
            ? { currentIndex: state.currentIndex - 1 }
            : state,
        ),

      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: 'game-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    },
  ),
)
