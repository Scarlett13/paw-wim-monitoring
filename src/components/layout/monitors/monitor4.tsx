import type { FunctionComponent } from "../../../common/types";
import { SimpleCard } from "../../cards";
import Typography from "../../ui/default-typography";
import { useSiteImage } from "../../../hooks/use-swr";
// import logger from "../../../libs/logger";
import { useEffect, useState } from "react";

interface MonitorBottomRightProps {
	listMergedSiteData: any[];
	isUppkb?: boolean;
}

const MonitorBottomRight = ({
	listMergedSiteData,
	isUppkb,
}: MonitorBottomRightProps): FunctionComponent => {
	const [listAllSiteImage, setListAllSiteImage] = useState<any[] | undefined>(
		[]
	);

	const { dataImage } = useSiteImage(isUppkb);

	useEffect(() => {
		setListAllSiteImage(dataImage ? (dataImage as any[]) : []);
	}, [dataImage]);
	return (
		<>
			{/* monitor 4 */}
			<div className="grid grid-cols-5 grid-rows-7 bottom-right h-screen w-screen 4xl:h-full 4xl:w-full">
				<div className="col-span-5 mt-4 text-center mx-4">
					<SimpleCard className="shadow-lg border-solid border-4 border-slate-400">
						<Typography variant="j2" className="font-bold">
							CCTV CAPTURE
						</Typography>
					</SimpleCard>
				</div>
				<div className="row-span-1 col-span-5 mt-6">
					<div className="grid grid-rows-3 grid-cols-5 gap-4 mx-10">
						{listAllSiteImage &&
							listAllSiteImage.map((site: any, index: number) => {
								let imagePath = "/no-image.png";

								if (site.imagePath && site.imagePath !== "-") {
									imagePath = `https://wim-image-bucket.sgp1.digitaloceanspaces.com/${site.imagePath}`;
								}

								try {
									const sitedata = listMergedSiteData[index];
									console.log(sitedata.sitecolor);
									if (sitedata && sitedata.sitecolor === "red") {
										imagePath = "/no-image.png";
									}
								} catch (error) {
									console.log(error);
								}

								return (
									<div
										key={site.siteId}
										className="flex flex-col w-full items-center justify-center"
									>
										<img
											src={imagePath}
											alt="site.jpeg"
											className="h-auto w-auto mt-5 border-2 border-gray-400 shadow-md"
										/>
										<p className="text-xl font-bold">{site.siteName}</p>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
};

export default MonitorBottomRight;
