import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import type { Ambiente } from "../config/ambientes.config";

interface NavProps {
	TABS: Ambiente[];
	activeId: number;
	onSelect: (id: number) => void;
}

export const Nav = ({ TABS, activeId, onSelect }: NavProps) => {
	return (
		<header className="w-full my-[30px] flex items-center justify-center">
			<nav className="
				flex items-center gap-1 rounded-full px-2 py-1.5
				backdrop-blur-[18px]
				bg-[linear-gradient(135deg,rgba(13,58,110,0.55)_0%,rgba(0,96,100,0.45)_100%)]
				border border-white/14
				shadow-[0_20px_60px_rgba(0,0,0,0.6),0_6px_20px_rgba(0,0,0,0.4),0_0_0_1px_rgba(94,231,223,0.2),inset_0_1px_0_rgba(255,255,255,0.28),0_0_40px_rgba(255,255,255,0.06),0_0_60px_rgba(94,231,223,0.12)]
			">
				{TABS.map(({ id, label }) => (
					<button
						key={id}
						onClick={() => onSelect(id)}
						className="relative px-4 py-1.5 rounded-full text-sm transition-all duration-200 z-10"
					>
						<AnimatePresence>
							{activeId === id && (
								<motion.span
									layoutId="active-tab-pill"
									className="
										absolute inset-0 rounded-full
										bg-white/14
										border border-white/22
										shadow-[0_2px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.18)]
									"
									initial={{ opacity: 0, scale: 0.82 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{
										type: 'spring',
										stiffness: 500,
										damping: 22,
										mass: 0.8,
									}}
								/>
							)}
						</AnimatePresence>

						<span
							className={clsx(
								"relative z-10 transition-all duration-200 font-semibold",
								activeId === id
									? "text-[var(--color-text-primary)]"
									: "text-[var(--color-text-muted)] font-medium hover:text-[var(--color-text-secondary)] hover:-translate-y-px",
							)}
						>
							{label}
						</span>
					</button>
				))}
			</nav>
		</header>
	);
};
