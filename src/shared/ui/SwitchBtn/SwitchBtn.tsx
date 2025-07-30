import Arrow from '@/shared/ui/icons/Arrow.svg'

type SwitchBtnProps = {
  onClick: () => void
  className?: string
}

export const SwitchBtn = ({
  onClick,
  className = '',
}: SwitchBtnProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-16 h-16 rounded-full bg-glass backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/30 transition cursor-pointer ${className}`}
    >
      <Arrow
        className={`h-4 w-auto z-10`}
        style={{ fill: 'white' }}
      />
    </button>
  )
}
