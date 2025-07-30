'use client'
import { Board } from '@/widgets/Board/Board'
import { cards, shuffleWithThemeLimit } from '@/shared/lib/cards'
import { useGameStore } from '@/shared/store/gameStore'
import { AuroraCanvas } from '@/shared/ui/AuroraCanvas/aurora-canvas'

export default function Home() {
  const deck = useGameStore((state) => state.deck)
  const setDeck = useGameStore((state) => state.setDeck)
  const hasHydrated = useGameStore((state) => state.hasHydrated)

  const isStarted = deck.length > 0

  const startGame = () => {
    const shuffled = shuffleWithThemeLimit(cards)
    setDeck(shuffled)
  }

  if (!hasHydrated) return null

  return (
    <main className="relative h-dvh flex justify-center items-center ">
      <AuroraCanvas
        className="absolute inset-0 z-0"
        colors={[
          '#FFB400', // теплый жёлтый
          '#FF007A', // насыщенный розовый
          '#6100FF', // глубокий фиолетовый
          '#0026FF', // синий оттенок
          '#FF4C00', // оранжевый
        ]}
        speed={0.01}
        layers={3}
        interactive={false}
      />
      {isStarted ? (
        <Board />
      ) : (
        <button
          className="cursor-pointer bg-amber-50 rounded-4xl py-1 px-4 h-fit text-black z-10"
          onClick={startGame}
        >
          Play
        </button>
      )}
    </main>
  )
}
