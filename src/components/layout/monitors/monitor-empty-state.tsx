import Typography from "../../ui/default-typography";

export const MonitorEmptyState = () => {
	return (
		<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
			{/* title */}
			<div className="col-span-4">
				<Typography variant="j1" className="text-center text-5xl py-5">
					Select your site from the map first
				</Typography>
			</div>
			{/* disk gauge */}
			<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
				{/* <Typography variant="j1">CPU</Typography>
					<GaugeMeter /> */}
			</div>
			{/* cpu gauge */}
			<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
				{/* <Typography variant="j1">Disk</Typography>
					<GaugeMeter /> */}
			</div>
			{/* memory gauge */}
			<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
				{/* <Typography variant="j1">Memory</Typography>
					<GaugeMeter /> */}
			</div>
			{/* orbit gauge */}
			<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
				{/* <Typography variant="j1">Network</Typography>
					<GaugeMeter /> */}
			</div>
			{/* text sensor */}
			{/* <div className="bg-red-300 col-span-4 w-full h-full"> Sensor</div> */}
			{/* loop status */}
			<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
				{/* <Typography variant="j1">Loop</Typography>
					<GaugeMeter /> */}
			</div>
			{/* wim lane 1 status */}
			<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
				{/* <Typography variant="j1">Wim Logic</Typography>
					<GaugeMeter /> */}
			</div>
			{/* wim lane 2 status */}
			<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
				{/* <Typography variant="j1">CCTV</Typography>
					<GaugeMeter /> */}
			</div>
			{/* orbit ping */}
			<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
				{/* <Typography variant="j1">Orbit</Typography>
					<GaugeMeter /> */}
			</div>
		</div>
	);
};
