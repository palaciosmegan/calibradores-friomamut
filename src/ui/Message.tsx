import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'

export const Message = () => {
  return (
    <div className="absolute inset-x-0 top-[30vh] flex justify-center">
      <div
        className="glass-pill gap-3 px-6 py-3"
        style={{ '--glow-r': '255', '--glow-g': '195', '--glow-b': '0' } as React.CSSProperties}
      >
        <WarningAmberRoundedIcon
          className="text-[rgba(255,210,80,0.85)]"
          style={{ fontSize: 16 }}
        />
        <span className="text-sm font-semibold tracking-wide text-[rgba(255,230,140,0.9)]">
          Sin sensores configurados
        </span>
      </div>
    </div>
  )
}
