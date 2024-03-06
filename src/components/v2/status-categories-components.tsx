import { FunctionComponent } from "../../common/types";
import StatisticsCard from "../cards/statistics-card";
import {
	findSiteById,
	parseDevicesPerSite,
} from "../../utils/v2/array-utils-v2";
import {
	getIconFromStatusV2,
	getVariantFromStatusV2,
} from "../../utils/v2/number-utils-v2";
import { useSwrV2 } from "../../hooks/use-swr";
import { useEffect, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/router";
import { IndexRoute } from "../../routes/IndexRoute";
import useSiteList from "../../hooks/use-site";

const StatusCategories = ({}): FunctionComponent => {
	const { isValidating } = useSwrV2();
	const { sortedSite } = useSiteList();
	// let dataDevicesPerSitePerCategory = {};
	const [dataDevicesPerSitePerCategory, setDataDevicesPerSitePerCategory] =
		useState<any>({});

	const { selectedSiteId, projecttype, siteStatus } = useSearch({
		from: IndexRoute.fullPath,
	});

	const navigate = useNavigate({ from: IndexRoute.fullPath });

	useEffect(() => {
		if (sortedSite) {
			setDataDevicesPerSitePerCategory(
				parseDevicesPerSite(findSiteById(sortedSite, selectedSiteId) ?? {})
			);
		}
	}, [sortedSite, selectedSiteId]);

	function onClickCategory(category: any) {
		if (category) {
			navigate({
				search: () => ({
					projecttype: projecttype,
					selectedSiteId: selectedSiteId,
					selectedDevice: category,
					siteStatus,
				}),
			});
		}
	}

	return (
		// <div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-1/2 flex-col bg-white">
		<div className="flex flex-wrap w-full h-full gap-4">
			{sortedSite
				? Object.keys(dataDevicesPerSitePerCategory).map((category, index) => {
						console.log(
							getVariantFromStatusV2(
								dataDevicesPerSitePerCategory[category][0].status
							)
						);
						return (
							<StatisticsCard
								onClick={() => onClickCategory(category)}
								key={index}
								variant={getVariantFromStatusV2(
									dataDevicesPerSitePerCategory[category][0].status
								)}
								isLoading={isValidating}
								icon={getIconFromStatusV2(
									dataDevicesPerSitePerCategory[category][0].status
								)}
								className="shadow-md w-[15vw] hover:cursor-pointer"
								label={`${category} Health:`}
								value={dataDevicesPerSitePerCategory[category][0].status}
							/>
						);
					})
				: "No site found"}
		</div>
		// </div>
	);
};

export default StatusCategories;
