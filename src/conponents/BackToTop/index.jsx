import { useEffect, useState } from 'react'

function BackToTop({ navBarItems = [] }) {
	const [isVisible, setIsVisible] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY || document.documentElement.scrollTop;
			setIsVisible(y > 200);
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	const handleNavigate = (sectionId) => {
		const el = document.getElementById(sectionId);
		if (el) {
			const headerOffsetPx = 56; // roughly matches mt-14
			const elementTop = el.getBoundingClientRect().top + window.scrollY;
			const targetTop = elementTop - headerOffsetPx;
			window.scrollTo({ top: targetTop, left: window.scrollX, behavior: 'smooth' });
			setIsOpen(false);
		}
	};

	if (!isVisible) return null;

	return (
		<div className="fixed bottom-6 right-6 z-50 sm:hidden flex flex-col items-end">
			{isOpen && (
				<div className="mb-3 w-52 max-h-72 overflow-auto rounded-lg shadow-lg border border-primaryAccent bg-primaryBg">
					<ul className="py-2">
						{navBarItems.map((item) => (
							<li key={item.sectionId}>
								<button
									onClick={() => handleNavigate(item.sectionId)}
									className="w-full text-left px-4 py-2 text-primaryContent hover:bg-primaryBase"
								>
									{item.title}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
			<button
				onClick={handleToggle}
				aria-label="Open navigation menu"
				className="rounded-full bg-primaryContent text-white shadow-lg hover:bg-primaryTitle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryAccent w-12 h-12 flex items-center justify-center"
			>
				<span className="text-xl">☰</span>
			</button>
		</div>
	);
}

export default BackToTop


