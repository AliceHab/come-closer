'use client'

import { Card } from '@/entities/Card'
import { useGameStore } from '@/shared/store/gameStore'
import { SwitchBtn } from '@/shared/ui/SwitchBtn/SwitchBtn'
import { useMemo } from 'react'

const VISIBLE_COUNT = 5

export const Board = () => {
  const deck = useGameStore((s) => s.deck)
  const currentIndex = useGameStore((s) => s.currentIndex)
  const next = useGameStore((s) => s.nextCard)
  const prev = useGameStore((s) => s.prevCard)

  const visibleStack = useMemo(
    () => deck.slice(currentIndex, currentIndex + VISIBLE_COUNT),
    [deck, currentIndex],
  )

  return (
    <div className="flex items-center">
      <SwitchBtn className="mr-5 rotate-180" onClick={prev} />
      <div className="board relative w-[330px] h-[515px]">
        {/* {prevCard && <Card card={prevCard} isFlipped={true} />} */}
        {visibleStack.map((c, idx) => (
          <Card
            key={`${c.id}-${currentIndex}`}
            card={c}
            position={idx}
            stackSize={visibleStack.length}
            onSwipeLeft={next}
            onSwipeRight={prev}
          />
        ))}
        {/* {nextCard && <Card card={nextCard} isFlipped={true} />} */}
      </div>
      <SwitchBtn className="ml-5" onClick={next} />
    </div>
  )
}
