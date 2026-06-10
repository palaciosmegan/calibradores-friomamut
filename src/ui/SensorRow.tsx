import { memo } from "react"
import type { SensorMock } from "../mock-data/sensores.mock"
import { Toggle } from "./Toggle"

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
  const sensorName = sensor.id
  if (sensorName.substring(0, 1) === 'T') {
    return 'S' + sensorName.split('S')[1].replace(/^0+(?!$)/, '') + ' - ' + orientationParsed[sensor.orientation]
  }
  return 'Sensor Ambiente'
}

export const SensorRow = memo(({ sensor, correction, enabled, onCorrectionChange, onEnabledChange, unidad }: SensorRowProps) => {
  const handleDecrement = () => {
    console.log('uwu')
  }
  const handleIncrement = () => {
    console.log('owo')
  }
  return (
    <tr className="border-b border-[var(--color-border-subtle)] transition-colors hover:bg-[rgba(33,150,243,0.04)]">
      <td className="px-3">
        <Toggle keepTurnedOn={sensor.posicion === 101} checked={enabled} onChange={() => onEnabledChange(sensor.id)} />
      </td>
      <td className="py-2 px-3 text-sm tracking-wider text-[var(--color-text-secondary)]">
        <label htmlFor='correction'>
          {getDisplayName(sensor)}
        </label>
      </td>
      <td className="flex py-2 px-3 gap-2">
        <button type="button"
          className="items-center gap-0 bg-[#0d3a6e] border border-[var(--color-blue-bright)] rounded px-2 py-1 transition-all focus-within:shadow-[0_0_0_3px_rgba(33,150,243,0.25),var(--glow-blue)]"
          onClick={handleDecrement}>
          -
        </button>
        <div className="items-center gap-0 px-2 py-1 transition-all focus-within:shadow-[0_0_0_3px_rgba(33,150,243,0.25),var(--glow-blue)]">
          <input
            id={correction}
            type="number"
            step="0.1"
            placeholder="0.0"
            value={correction}
            onChange={e => onCorrectionChange(sensor.id, e.target.value)}
            className="w-8 bg-transparent outline-none text-sm font-mono text-[var(--color-text-primary)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-[var(--color-text-secondary)]"
          />
          <span className="text-sm font-mono text-[var(--color-text-primary)] select-none">{unidad}</span>
        </div>
        <button
          type="button"
          className="items-center gap-0 bg-[#0d3a6e] border border-[var(--color-blue-bright)] rounded px-2 py-1 transition-all focus-within:shadow-[0_0_0_3px_rgba(33,150,243,0.25),var(--glow-blue)]"
          onClick={handleIncrement}>
          +
        </button>
      </td>
      <td className="py-2 px-3 text-sm font-mono text-[var(--color-text-primary)] tabular-nums">
        {sensor.valor.toFixed(1)} {unidad}
      </td>
      <td className=" "><button className="btn btn-primary scale-75 tracking-wide uppercase">auto calibrar</button></td>
    </tr>
  )
})
SensorRow.displayName = 'SensorRow'