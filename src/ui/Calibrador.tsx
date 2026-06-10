import { useState, useEffect, memo, useCallback, useImperativeHandle, forwardRef } from 'react'
import { MOCK_SENSORES, type SensorMock } from '../mock-data/sensores.mock'
import { Message } from './Message'
import { SensorRow } from './SensorRow'

export interface CalibradorHandle {
	reset: () => void
}

interface CalibradorProps {
	ambienteId: number
	isActive: boolean
}

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
					{['', 'Descripción', 'Corrección', 'Temperatura', 'Auto'].map(col => (
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

export const Calibrador = memo(forwardRef<CalibradorHandle, CalibradorProps>(({ ambienteId }, ref) => {
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

	const handleGuardar = useCallback(() => {
		setSensores(prev => prev.map(s => {
			const corr = parseFloat(corrections[s.id] ?? '0') || 0
			return corr !== 0 ? { ...s, valor: +(s.valor - corr).toFixed(1) } : s
		}))
		setCorrections({})
	}, [corrections])

	const handleReset = useCallback(() => {
		setCorrections({})
	}, [])

	useImperativeHandle(ref, () => ({ reset: handleReset }), [handleReset])

	const left = sensores.filter(s => s.posicion % 2 !== 0 && s.posicion < 102)
	const right = sensores.filter(s => s.posicion % 2 === 0 && s.posicion < 101)

	const hasCorrections = Object.values(corrections).some(v => v !== '')

	return (
		<div className="p-4">
			{loaded && sensores.length === 0 ? (
				<Message />
			) : (
				<div className="flex flex-col xl:flex-row gap-6">
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
			<div className="flex gap-3 justify-end mt-6 mr-6">
				<button
					type="button"
					onClick={handleGuardar}
					disabled={!hasCorrections}
					className="btn btn-primary"
				>
					Guardar registro
				</button>
				<button type="button" className="btn btn-secondary">
					No calibrado
				</button>
			</div>
		</div>
	)
}))

Calibrador.displayName = 'Calibrador'
