import { useState } from "react";
import { RoundSlider, ISettingsPointer } from "mz-react-round-slider";
import Typography from "../../ui/default-typography";

interface IGaugeMeter {
	valuegg: number | string;
	textSuffix: string;
	textPrefix: string;
	color: string;
	onoff: boolean;
	min?: number;
	max?: number;
}

const GaugeMeter = ({
	valuegg,
	textSuffix,
	textPrefix,
	color,
	onoff,
	min = 0,
	max = 100,
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
		<div className="flex flex-col w-full h-full items-center justify-center">
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
				textFontSize={30}
				textSuffix={textSuffix}
				textPrefix={textPrefix}
				showTickValues={false}
				pointerBgColorDisabled={color}
				connectionBgColorDisabled={color}
				disabled={true}
				min={min}
				max={max}
				pathRadius={80}
			/>
			<div className="border-t border-gray-200 z-40 -mt-10">
				<Typography
					variant="h1"
					color={"primary"}
					className="border-t border-gray-200 z-40 -mt-20"
				>
					{""}
				</Typography>
			</div>
		</div>
	);
};

export default GaugeMeter;
