import "../../styles/wim-layout.css"; // Import the CSS file where you'll write your octagon styles

interface IWimStatusDetail {}

const WimStatusDetail = ({}: IWimStatusDetail) => {
	const items = new Array(8).fill(null).map((_, index) => `Item ${index + 1}`);

	return (
		<div className="flex flex-col h-full">
			{/* Top bar with octagonal shape */}
			<div className="octagon bg-black text-white p-4 flex items-center justify-center">
				Top Bar
			</div>

			{/* Grid */}
			<div className="flex-1 grid grid-cols-2 gap-4 p-4">
				{items.map((item, index) => (
					<div key={index} className="bg-black text-white p-4">
						{item}
					</div>
				))}
			</div>

			{/* Bottom bar */}
			<div className="bg-black text-white p-4">Bottom Bar</div>
		</div>
	);
};

export default WimStatusDetail;
