import { useCallback, useEffect, useState } from "react";
import { useSwrV2 } from "./use-swr";
import { IndexRoute } from "../routes/IndexRoute";
import { useNavigate, useSearch } from "@tanstack/router";
import { isSiteIdFound } from "../utils/v2/array-utils-v2";

export default function useSiteList() {
	const { projecttype, selectedSiteId, selectedDevice, siteStatus } = useSearch(
		{
			from: IndexRoute.fullPath,
		}
	);

	const navigate = useNavigate({ from: IndexRoute.fullPath });

	const [listSite, setListSite] = useState([]); // Typing the state with SiteOption interface
	const [sortedSite, setSortedSite] = useState([]);
	const { data } = useSwrV2(); // Custom hook to fetch data

	const handleParseSiteData = useCallback(async () => {
		const temp: any = [];
		const tempSortSite: any = [];
		// const siteFound = findSiteById(data, selectedSiteId);
		let validSelectedSiteId = selectedSiteId;
		//@ts-ignore
		if (data) {
			console.log("triggered listsite: ");
			//@ts-ignore
			for (const siteData of data) {
				if (siteStatus === "all") {
					tempSortSite.push(siteData);
					temp.push({ value: siteData.siteId, label: siteData.siteName });
				} else if (siteData.siteStatus === siteStatus) {
					tempSortSite.push(siteData);
					temp.push({ value: siteData.siteId, label: siteData.siteName });
				}
			}

			const siteIdFound = isSiteIdFound(temp, selectedSiteId);

			if (!siteIdFound) {
				validSelectedSiteId = temp[0]?.value;
			}
		}

		navigate({
			search: () => ({
				projecttype,
				selectedSiteId: validSelectedSiteId,
				selectedDevice,
				siteStatus,
			}),
		});

		setSortedSite(tempSortSite);
		setListSite(temp);
	}, [data, siteStatus]);

	useEffect(() => {
		handleParseSiteData();
	}, [handleParseSiteData]); // Runs the effect when 'data' changes

	return { listSite, sortedSite }; // Return the list of site options for use in components
}
