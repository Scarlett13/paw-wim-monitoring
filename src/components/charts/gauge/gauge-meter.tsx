import { useState } from "react";
import { RoundSlider, ISettingsPointer } from "mz-react-round-slider";

interface IGaugeMeter {
	valuegg: number | string;
	textSuffix: string;
	textPrefix: string;
	color: string;
	onoff: boolean;
}

const GaugeMeter = ({
	valuegg,
	textSuffix,
	textPrefix,
	color,
	onoff,
}: IGaugeMeter) => {
	const [pointers, setPointers] = useState<ISettingsPointer[]>([
		{ value: valuegg },
	]);

	if (pointers[0]?.value !== valuegg) {
		setPointers([
			{
				value: valuegg,
			},
		]);
	}

	return (
		<RoundSlider
			data={
				onoff
					? [
							"OFF",
							"ON1",
							"ON2",
							"ON3",
							"ON4",
							"ON5",
							"ON6",
							"ON7",
							"ON8",
							"ON9",
							"ON10",
							"ON11",
							"ON12",
							"ON13",
							"ON14",
							"ON",
					  ]
					: undefined
			}
			pointers={pointers}
			onChange={setPointers}
			animateOnClick={true}
			pathStartAngle={150}
			pathEndAngle={30}
			pathBgColor={"black"}
			pathThickness={5}
			pathInnerBgColor={"url(#color-slider-gradient)"}
			pathInnerBgFull={true}
			connectionBgColor={color}
			pointerBgColor={color}
			pointerBgColorSelected={color}
			pointerRadius={20}
			enableTicks={true}
			ticksCount={10}
			ticksGroupSize={2}
			ticksDistanceToPanel={5}
			tickValuesPrefix={" "}
			tickValuesSuffix={"%"}
			tickValuesDistance={20}
			tickValuesColor={color}
			textColor={color}
			textFontSize={46}
			textSuffix={textSuffix}
			textPrefix={textPrefix}
			showTickValues={false}
			min={0}
			pointerBgColorDisabled={color}
			connectionBgColorDisabled={color}
			disabled={true}
			max={100}
			pathRadius={115}
		/>
	);
};

export default GaugeMeter;
