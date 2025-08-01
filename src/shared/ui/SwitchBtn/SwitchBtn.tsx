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
      className={`
        w-16 h-16 rounded-full bg-glass backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/20 
        transition-all duration-300 ease-out cursor-pointer 
        hover:ring-white/40 hover:scale-105 active:scale-95 active:ring-white/30
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
        shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.2)]
        ${className}`}
    >
      <Arrow
        className={`h-4 w-auto z-10`}
        style={{ fill: 'white' }}
      />
    </button>
  )
}
