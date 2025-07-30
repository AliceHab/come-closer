import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  PanInfo,
} from 'framer-motion'

import { CardT } from '@/entities/Card/model/types'
import ComeCloserLogo from '@/shared/ui/icons/shapes.svg'
import ComeCloserLogoBack from '@/shared/ui/icons/logoBack.svg'
import BackHand from '@/shared/ui/icons/hand.png'

type CardProps = {
  card: CardT
  position: number
  stackSize: number
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
}

const themeClasses: Record<
  string,
  { container: string; text: string; back: string }
> = {
  детство: {
    container: 'bg-coffebrake-bg',
    text: 'text-coffebrake-accent',
    back: 'bg-coffebrake-accent',
  },
  отношения: {
    container: 'bg-redrum-bg',
    text: 'text-redrum-accent',
    back: 'bg-redrum-accent',
  },
  деньги: {
    container: 'bg-malina-bg',
    text: 'text-malina-accent',
    back: 'bg-malina-accent',
  },
  секс: {
    container: 'bg-purpur-bg',
    text: 'text-purpur-accent',
    back: 'bg-purpur-accent',
  },
  мнение: {
    container: 'bg-ocean-bg',
    text: 'text-ocean-accent',
    back: 'bg-ocean-accent',
  },
  действие: {
    container: 'bg-mint-bg',
    text: 'text-mint-accent',
    back: 'bg-mint-accent',
  },
}

export const Card = ({
  card,
  position,
  stackSize,
  onSwipeLeft,
  onSwipeRight,
}: CardProps) => {
  const { theme, question } = card
  const classes = themeClasses[theme] ?? {
    container: 'bg-gray-100',
    text: 'text-gray-700',
    back: 'text-gray-700',
  }

  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], ['-20deg', '20deg'])

  const isTop = position === 0

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const offsetX = info.offset.x
    const threshold = 100

    if (offsetX < -threshold && onSwipeLeft) {
      onSwipeLeft()
      x.set(0)
    } else if (offsetX > threshold && onSwipeRight) {
      onSwipeRight()
      x.set(0)
    } else {
      animate(x, 0, { type: 'spring', stiffness: 300 })
    }
  }

  if (!isTop) {
    const offsetDeg = position % 2 === 0 ? -8 : 6
    return (
      <div
        style={{
          backgroundImage: `url(${BackHand.src})`,
          transform: `rotate(${offsetDeg}deg) scale(0.98)`,
          zIndex: stackSize - position,
        }}
        className={`${classes.back} absolute top-0 left-0 rotate-2 rounded-2xl shadow-md w-[330px] h-[515px] flex items-center justify-center bg-no-repeatbg-center bg-cover noise-overlay`}
      >
        {/* <ComeCloserLogoBack className={`h-[23%] aspect-square`} /> */}
      </div>
    )
  }

  return (
    <motion.div
      className={`${classes.container}  top-0 left-0 py-11 px-10 rounded-2xl shadow-md w-full h-full flex flex-col justify-between items-center noise-overlay relative`}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: 'grabbing' }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      style={{ zIndex: stackSize, x, rotate }}
    >
      <p className={`${classes.text} italic text-[20px]`}>{theme}</p>
      <p className={`${classes.text} text-2xl text-center`}>
        {question}
      </p>
      {/* <ComeCloserLogo
        className={`w-10 h-10 fill-current ${classes.text}`}
      /> */}
    </motion.div>
  )
}
