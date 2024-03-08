import { useNavigate, useSearch } from "@tanstack/router";
import { IndexRoute } from "../routes/IndexRoute";
import { useSwrV2 } from "./use-swr";
import { useEffect, useState } from "react";
import useSiteList from "./use-site";
// import useSiteList from "./use-site";
import {
	getNextValue,
	getPreviousValue,
	isSiteIdFound,
} from "../utils/v2/array-utils-v2";
// import { mutate } from "swr";

export default function useKeyPressed() {
	const { projecttype, selectedSiteId, selectedDevice, siteStatus } = useSearch(
		{
			from: IndexRoute.fullPath,
		}
	);
	const [currentsiteid, setcurrentsiteid] = useState<any>(selectedSiteId);
	const { listSite } = useSiteList();

	useEffect(() => {
		console.log("arrowright effect currentsiteid: " + currentsiteid);
		if (currentsiteid) {
			navigate({
				search: () => ({
					projecttype,
					selectedSiteId: currentsiteid,
					selectedDevice,
					siteStatus,
				}),
			});
		} else {
			const siteIdFound = isSiteIdFound(listSite, currentsiteid);

			if (!siteIdFound) {
				setcurrentsiteid((listSite[0] as any).value);
			}
		}
	}, [currentsiteid]);

	const navigate = useNavigate({ from: IndexRoute.fullPath });
	const { isValidating, mutate } = useSwrV2();

	useEffect(() => {
		const handleKeyPressed = (key: string) => {
			switch (key) {
				case "a":
				case "A":
					navigate({
						search: () => ({
							projecttype,
							selectedSiteId,
							selectedDevice,
							siteStatus: "all",
						}),
					});

					break;

				case "n":
				case "N":
					navigate({
						search: () => ({
							projecttype,
							selectedSiteId,
							selectedDevice,
							siteStatus: "normal",
						}),
					});
					break;

				case "w":
				case "W":
					navigate({
						search: () => ({
							projecttype,
							selectedSiteId,
							selectedDevice,
							siteStatus: "warning",
						}),
					});
					break;

				case "o":
				case "O":
					navigate({
						search: () => ({
							projecttype,
							selectedSiteId,
							selectedDevice,
							siteStatus: "off",
						}),
					});
					break;

				case "1":
				case "1":
				case "2":
				case "2":
				case "0":
				case "0":
					navigate({
						search: () => ({
							projecttype: +key,
							selectedSiteId,
							selectedDevice,
							siteStatus,
						}),
					});

					mutate("/v2/site-status");
					// window.location.reload();
					break;

				case "ArrowRight":
					if (listSite && listSite.length > 0) {
						console.log("arrowright currentsiteid:" + currentsiteid);
						const gg = getNextValue(currentsiteid, listSite);

						setcurrentsiteid(gg);
					}
					break;

				case "ArrowLeft":
					if (listSite && listSite.length > 0) {
						console.log("arrowleft currentsiteid:" + currentsiteid);
						const gg = getPreviousValue(currentsiteid, listSite);

						setcurrentsiteid(gg);
					}
					break;
				default:
					console.log("default - " + key);
					break;
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			// Access event properties such as event.key, event.code, etc.
			if (isValidating || !listSite) {
				return;
			}
			console.log("default - " + isValidating);
			handleKeyPressed(event.key);
		};

		// Attach the event listener when the component mounts
		window.addEventListener("keydown", handleKeyDown);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isValidating, listSite, currentsiteid]);
}
