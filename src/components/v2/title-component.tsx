import { FunctionComponent } from "../../common/types";
import logoGBU from "../../../public/Logo-GBU-2.svg";
import logoVGT from "../../../public/visi_baru.svg";
import Typography from "../ui/default-typography";

const TitleComponents = ({}): FunctionComponent => {
	return (
		<div className="w-full h-[10vh] flex flex-shrink-0 items-center justify-center overflow-hidden bg-white p-4">
			<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-1/6">
				<img
					src={logoGBU}
					alt="Logo-GBU-2"
					className="object-scale-down h-52"
				/>
			</div>
			<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-4/6">
				<Typography variant={"j1"} className="text-center">
					WIM Monitoring
				</Typography>
			</div>
			<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-1/6">
				<img
					src={logoVGT}
					alt="Logo-GBU-2"
					className="object-scale-down h-44"
				/>
			</div>
		</div>
	);
};

export default TitleComponents;
