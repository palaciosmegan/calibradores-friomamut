import { useState } from 'react'
import { Nav } from './ui/Nav'
import { AMBIENTES } from './config/ambientes.config'
import { Calibrador } from './ui/Calibrador'

export const Viewer = () => {
	const [activeTab, setActiveTab] = useState(AMBIENTES[0].id)

	return (
		<div className="flex flex-col">
			<Nav
				TABS={AMBIENTES}
				activeId={activeTab}
				onSelect={setActiveTab}
			/>
			<button className='absolute right-0 btn btn-primary my-8 mr-10'>Reset</button>
			<main className="flex-1 pb-[30px] relative">
				{AMBIENTES.map(a => (
					<div
						key={a.id}
						className={` ${a.id !== activeTab ? 'hidden' : ''}`}
					>
						<Calibrador
							ambienteId={a.id}
							isActive={a.id === activeTab}
						/>
					</div>
				))}
			</main>
		</div>
	)
}
