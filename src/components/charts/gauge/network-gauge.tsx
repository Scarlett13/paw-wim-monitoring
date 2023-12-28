import { useState } from "react";
import { RoundSlider, ISettingsPointer } from "mz-react-round-slider";
import Typography from "../../ui/default-typography";

interface IGaugeMeter {
	value: number | string;
	textSuffix: string;
	textPrefix: string;
	slidercolor: string;
	quotaday: string;
	textcolor: "danger" | "custom_warning" | "custom_success";
	onoff: boolean;
	min?: number;
	max?: number;
}

const NetworkGaugeMeter = ({
	value,
	textSuffix,
	textPrefix,
	slidercolor,
	textcolor,
	onoff,
	min = 0,
	max = 100,
	quotaday = "OFF",
}: IGaugeMeter) => {
	const [pointers, setPointers] = useState<ISettingsPointer[]>([
		{ value: value },
	]);

	if (pointers[0]?.value !== value) {
		setPointers([
			{
				value: value,
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
				connectionBgColor={slidercolor}
				pointerBgColor={slidercolor}
				pointerBgColorSelected={slidercolor}
				pointerRadius={20}
				enableTicks={true}
				ticksCount={10}
				ticksGroupSize={2}
				ticksDistanceToPanel={5}
				tickValuesPrefix={" "}
				tickValuesSuffix={"%"}
				tickValuesDistance={20}
				tickValuesColor={slidercolor}
				textColor={slidercolor}
				textFontSize={40}
				textSuffix={textSuffix}
				textPrefix={textPrefix}
				showTickValues={false}
				pointerBgColorDisabled={slidercolor}
				connectionBgColorDisabled={slidercolor}
				disabled={true}
				min={min}
				max={max}
				pathRadius={115}
			/>
			<div className=" z-40 -mt-10">
				<Typography
					variant="j2"
					color={textcolor}
					className="border-t border-gray-200 z-40 -mt-20"
				>
					{quotaday}
				</Typography>
			</div>
		</div>
	);
};

export default NetworkGaugeMeter;
