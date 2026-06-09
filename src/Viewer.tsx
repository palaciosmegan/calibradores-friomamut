import { useState, useRef } from 'react'
import clsx from 'clsx'
import { Nav } from './ui/Nav'
import { AMBIENTES } from './config/ambientes.config'
import { Calibrador, type CalibradorHandle } from './ui/Calibrador'

export const Viewer = () => {
	const [activeTab, setActiveTab] = useState(AMBIENTES[0].id)
	const refs = useRef<Record<number, CalibradorHandle | null>>({})

	return (
		<div className="flex flex-col">
			<Nav
				TABS={AMBIENTES}
				activeId={activeTab}
				onSelect={setActiveTab}
			/>
			<button
				className='absolute right-0 btn btn-ghost my-8 mr-10'
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
