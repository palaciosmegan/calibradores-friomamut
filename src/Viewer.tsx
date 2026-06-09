import { useState, useRef } from 'react'
import clsx from 'clsx'
import { Nav } from './ui/Nav'
import { Calibrador, type CalibradorHandle } from './ui/Calibrador'
// import type { SensorMock, MOCK_SENSORES } from './mock-data/sensores.mock'

export type Ambiente = {
	id: number
	label: string
}

const AMBIENTES: Ambiente[] = [
	{ id: 1, label: 'Túnel 1' },
	{ id: 2, label: 'Túnel 2' },
	{ id: 3, label: 'Túnel 3' },
	{ id: 4, label: 'Túnel 4' },
]

export const Viewer = () => {
	const [activeTab, setActiveTab] = useState(AMBIENTES[0].id)
	const refs = useRef<Record<number, CalibradorHandle | null>>({})

	/* useEffect(() => {
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
	}, [ambienteId]) */

	return (
		<div className="flex flex-col">
			<Nav
				TABS={AMBIENTES}
				activeId={activeTab}
				onSelect={setActiveTab}
			/>
			<button
				className='absolute right-0 btn btn-secondary my-8 mr-10'
				onClick={() => refs.current[activeTab]?.reset()}
			>
				Reset
			</button>
			<main className="flex-1 pb-[30px] relative">
				{AMBIENTES.map(a => (
					<div
						key={a.id}
						className={clsx(a.id !== activeTab && 'hidden')}
					>
						<Calibrador
							ref={el => { refs.current[a.id] = el }}
							ambienteId={a.id}
							isActive={a.id === activeTab}
						/>
					</div>
				))}
			</main>
		</div>
	)
}
