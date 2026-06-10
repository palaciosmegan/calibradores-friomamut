import clsx from 'clsx'

interface ToggleProps {
  checked: boolean
  onChange: () => void
  keepTurnedOn?: boolean
}

export const Toggle = ({ checked, onChange, keepTurnedOn }: ToggleProps) => {
  const doNothing = () => console.log('This button is set as keep turned on!')
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={keepTurnedOn ? doNothing : onChange}
      className={clsx(
        'relative w-10 h-6 rounded-full outline-none transition-all duration-300 ',
        'focus-visible:ring-2 focus-visible:ring-[var(--color-teal-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-abyss)]',
        checked ? 'bg-gray-300 ' : 'bg-gray-800'
      )}
    >
      <span className={clsx(
        'absolute top-1/2 left-[3px] -translate-y-1/2 w-4 h-4 rounded-full',
        'flex items-center justify-center',
        'transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
        checked
          ? 'translate-x-[18px] bg-green-600 shadow-[0_2px_6px_rgba(0,0,0,0.5),0_0_12px_rgba(34,197,94,0.8),inset_0_1px_0_rgba(255,255,255,0.3)]'
          : 'translate-x-0 bg-gray-500'
      )}/>
    </button>
  )
}
