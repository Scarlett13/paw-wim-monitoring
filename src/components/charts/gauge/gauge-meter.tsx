import { useState } from "react";
import { RoundSlider, ISettingsPointer } from "mz-react-round-slider";

const GaugeMeter = () => {
	const [pointers, setPointers] = useState<ISettingsPointer[]>([{ value: 0 }]);

	return (
		<RoundSlider
			pointers={pointers}
			onChange={setPointers}
			animateOnClick={true}
			pathStartAngle={150}
			pathEndAngle={30}
			pathBgColor={"black"}
			pathThickness={5}
			pathInnerBgColor={"url(#color-slider-gradient)"}
			pathInnerBgFull={true}
			connectionBgColor={"#2BD03B"}
			pointerBgColor={"#2BD03B"}
			pointerBgColorSelected={"#2BD03B"}
			pointerRadius={20}
			enableTicks={true}
			ticksCount={10}
			ticksGroupSize={2}
			ticksDistanceToPanel={5}
			tickValuesPrefix={" "}
			tickValuesSuffix={"%"}
			tickValuesDistance={20}
			tickValuesColor={"#2BD03B"}
			textColor={"#fff"}
			textFontSize={24}
			textSuffix={"%"}
			textPrefix={" "}
			min={0}
			max={100}
			pathRadius={115}
		/>
	);
};

export default GaugeMeter;
