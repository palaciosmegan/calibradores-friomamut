import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { Nav } from './ui/Nav'
import { Calibrador, type CalibradorHandle } from './ui/Calibrador'

export type Ambiente = {
	id: number
	label: string
}

const AMBIENTESHARDCODED: Ambiente[] = [
	{ id: 1, label: 'Túnel 1' },
	{ id: 2, label: 'Túnel 2' },
	{ id: 3, label: 'Túnel 3' },
	{ id: 4, label: 'Túnel 4' },
]

export const Viewer = () => {
	const [ambientes, setAmbientes] = useState<Ambiente[]>([])
	const [activeTab, setActiveTab] = useState<number | null>(null)
	const refs = useRef<Record<number, CalibradorHandle | null>>({})

	
	useEffect(() => {
		const controller = new AbortController()
		const timeout = setTimeout(() => controller.abort(), 1000)
		
		const discover = async () => {
			let ambientesDisponibles: Ambiente[] = []
			try {
				const res = await fetch('/lectura/estructura/0', { signal: controller.signal })
				clearTimeout(timeout)
				if (!res.ok) throw new Error(`HTTP ${res.status}`)
				const data = await res.json()
				if (data.disponibles) {
					ambientesDisponibles = (data.disponibles.map((tunel: string) => ({
						id: parseInt(tunel),
						label: 'Túnel ' + tunel,
					})))
				}
			} catch {
				// si no se encontraron, usar el fallback
				clearTimeout(timeout)
				ambientesDisponibles = AMBIENTESHARDCODED
			}

			setAmbientes(ambientesDisponibles)
			setActiveTab(ambientesDisponibles[0].id)
		}

		discover()
	}, [])

	if (activeTab === null) return null

	return (
		<div className="flex flex-col">
			<Nav
				TABS={ambientes}
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
				{ambientes.map(a => (
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
