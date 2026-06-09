import { useState, useEffect, memo, useCallback } from 'react'
import { MOCK_SENSORES, type SensorMock } from '../mock-data/sensores.mock'
import { Message } from './Message'

interface CalibradorProps {
	ambienteId: number
	isActive: boolean
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
		className={`relative w-10 h-[22px] rounded-full outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-teal-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-abyss)] ${
			checked
				? 'bg-[var(--color-teal-mid)] shadow-[0_0_10px_rgba(0,131,143,0.6)]'
				: 'bg-[var(--color-raised)]'
		}`}
	>
		<span className={`absolute top-[3px] left-[3px] w-4 h-4 rounded-full shadow-md transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
			checked ? 'translate-x-[18px] bg-white' : 'translate-x-0 bg-[var(--color-text-muted)]'
		}`} />
	</button>
)

interface SensorRowProps {
	sensor: SensorMock
	correction: string
	enabled: boolean
	onCorrectionChange: (id: string, value: string) => void
	onEnabledChange: (id: string) => void
	unidad: string
}

const SensorRow = memo(({ sensor, correction, enabled, onCorrectionChange, onEnabledChange, unidad }: SensorRowProps) => (
	<tr className="border-b border-[var(--color-border-subtle)] transition-colors hover:bg-[rgba(33,150,243,0.04)]">
		<td className="py-2 px-3 text-sm tracking-wider text-[var(--color-text-secondary)]">
			{getDisplayName(sensor)}
		</td>
		<td className="py-2 px-3">
			<div className="inline-flex items-center gap-1 bg-[#0d3a6e] border border-[var(--color-blue-bright)] rounded-[var(--radius-md)] px-2 py-1 transition-all focus-within:shadow-[0_0_0_3px_rgba(33,150,243,0.25),var(--glow-blue)]">
				<input
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
))
SensorRow.displayName = 'SensorRow'

const SensorTable = ({ sensores, corrections, enabled, onCorrectionChange, onEnabledChange, unidad }: {
	sensores: SensorMock[]
	corrections: Record<string, string>
	enabled: Record<string, boolean>
	onCorrectionChange: (id: string, value: string) => void
	onEnabledChange: (id: string) => void
	unidad: string
}) => (
	<div className="flex-1 min-w-0">
		<table className="w-full border-collapse">
			<thead>
				<tr className="border-b border-[var(--color-border-default)]">
					{['Descripción', 'Corrección', 'Temperatura', 'Habilitado'].map(col => (
						<th key={col} className="py-2 px-3 text-left text-xs font-medium tracking-wider uppercase text-[var(--color-blue-soft)]">
							{col}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{sensores.map(s => (
					<SensorRow
						key={s.id}
						sensor={s}
						correction={corrections[s.id] ?? ''}
						enabled={enabled[s.id] ?? true}
						onCorrectionChange={onCorrectionChange}
						onEnabledChange={onEnabledChange}
						unidad={unidad}
					/>
				))}
			</tbody>
		</table>
	</div>
)

export const Calibrador = memo(({ ambienteId }: CalibradorProps) => {
	const [sensores, setSensores] = useState<SensorMock[]>([])
	const [loaded, setLoaded] = useState(false)
	const [corrections, setCorrections] = useState<Record<string, string>>({})
	const [enabled, setEnabled] = useState<Record<string, boolean>>({})

	useEffect(() => {
		const fetchSensores = async () => {
			let data: SensorMock[] = []
			try {
				const r = await fetch(`/lectura/estructura/${ambienteId}`)
				const json: SensorMock[] = await r.json()
				data = json?.length ? json : (MOCK_SENSORES[ambienteId] ?? [])
			} catch {
				data = MOCK_SENSORES[ambienteId] ?? []
			} finally {
				setSensores(data)
				setEnabled(Object.fromEntries(data.map(s => [s.id, s.habilitado])))
				setLoaded(true)
			}
		}
		fetchSensores()
	}, [ambienteId])

	const handleCorrectionChange = useCallback((id: string, value: string) => {
		setCorrections(prev => ({ ...prev, [id]: value }))
	}, [])

	const handleEnabledChange = useCallback((id: string) => {
		setEnabled(prev => ({ ...prev, [id]: !prev[id] }))
	}, [])

	// odd posicion + posicion 101 (ambiente) | even posicion only
	const left = sensores.filter(s => s.posicion % 2 !== 0 && s.posicion < 102)
	const right = sensores.filter(s => s.posicion % 2 === 0 && s.posicion < 101)

	return (
		<div className="p-4">
			{loaded && sensores.length === 0 ? (
				<Message />
			) : (
				<div className="flex flex-col lg:flex-row gap-6">
					<SensorTable
						sensores={left}
						corrections={corrections}
						enabled={enabled}
						onCorrectionChange={handleCorrectionChange}
						onEnabledChange={handleEnabledChange}
						unidad="°C"
					/>
					<div className="w-px bg-[var(--color-border-subtle)] self-stretch" />
					<SensorTable
						sensores={right}
						corrections={corrections}
						enabled={enabled}
						onCorrectionChange={handleCorrectionChange}
						onEnabledChange={handleEnabledChange}
						unidad="°C"
					/>
				</div>
			)}
			<div className="flex gap-3 justify-end">
				<button className="btn btn-primary">Guardar registro</button>
				<button className="btn btn-primary">No calibrado</button>
			</div>
		</div>
	)
})

Calibrador.displayName = 'Calibrador'
