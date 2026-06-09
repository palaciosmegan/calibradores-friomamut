import { memo } from "react"
import type { SensorMock } from "../mock-data/sensores.mock"

interface SensorRowProps {
  sensor: SensorMock
  correction: string
  enabled: boolean
  onCorrectionChange: (id: string, value: string) => void
  onEnabledChange: (id: string) => void
  unidad: string
}

const orientationParsed = { INT: 'Interior', EXT: 'Exterior' }

const getDisplayName = (sensor: SensorMock) => {
  const sensorName = sensor.id.substring(0, 1) === 'T' ? sensor.id.split(' ')[1] : sensor.id
  if (sensorName.substring(0, 1) === 'S') {
    return 'S' + sensorName.split('S')[1].replace(/^0+(?!$)/, '') + ' - ' + orientationParsed[sensor.orientation]
  }
  return 'Sensor Ambiente'
}

const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={onChange}
    className={`relative w-10 h-[22px] rounded-full outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-teal-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-abyss)] ${checked
      ? 'bg-[var(--color-teal-mid)] shadow-[0_0_10px_rgba(0,131,143,0.6)]'
      : 'bg-[var(--color-raised)]'
      }`}
  >
    <span className={`absolute top-[3px] left-[3px] w-4 h-4 rounded-full shadow-md transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${checked ? 'translate-x-[18px] bg-white' : 'translate-x-0 bg-[var(--color-text-muted)]'
      }`} />
  </button>
)

export const SensorRow = memo(({ sensor, correction, enabled, onCorrectionChange, onEnabledChange, unidad }: SensorRowProps) => {
  return (
    <tr className="border-b border-[var(--color-border-subtle)] transition-colors hover:bg-[rgba(33,150,243,0.04)]">
      <td className="py-2 px-3 text-sm tracking-wider text-[var(--color-text-secondary)]">
        <label htmlFor='correction'>
          {getDisplayName(sensor)}
        </label>
      </td>
      <td className="py-2 px-3">
        <div className="inline-flex items-center gap-1 bg-[#0d3a6e] border border-[var(--color-blue-bright)] rounded-[var(--radius-md)] px-2 py-1 transition-all focus-within:shadow-[0_0_0_3px_rgba(33,150,243,0.25),var(--glow-blue)]">
          <input
            id={correction}
            type="number"
            step="0.1"
            placeholder="0.0"
            value={correction}
            onChange={e => onCorrectionChange(sensor.id, e.target.value)}
            className="w-14 bg-transparent outline-none text-sm font-mono text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]"
          />
          <span className="text-sm font-mono text-[var(--color-text-primary)] select-none">{unidad}</span>
        </div>
      </td>
      <td className="py-2 px-3 text-sm font-mono text-[var(--color-text-primary)] tabular-nums">
        {sensor.valor.toFixed(1)} {unidad}
      </td>
      <td className="py-2 px-3">
        {!(sensor.posicion === 101) && (
          <Toggle checked={enabled} onChange={() => onEnabledChange(sensor.id)} />
        )}
      </td>
    </tr>
  )
})
SensorRow.displayName = 'SensorRow'