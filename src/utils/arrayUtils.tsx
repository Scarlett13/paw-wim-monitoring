import { MapMarker } from "../types/map-marker";
import { IWimStatusResponse } from "../types/response";

export function countStatus(obj: any[], status: string): number {
	let count = 0;

	for (const key in obj) {
		if (typeof obj[key] === "object") {
			count += countStatus(obj[key], status);
		} else if (key === "sitecolor" && obj[key] === status) {
			count++;
		}
	}

	return count;
}

export function findSiteObjectFromId(
	id: string,
	sites: IWimStatusResponse[]
): IWimStatusResponse | undefined {
	if (!sites) {
		return undefined;
	}
	const personInFirstArray = sites.find((site) => site.siteid === id);

	return personInFirstArray || undefined;
}

export function mergeObjectsArray(
	arr1: MapMarker[],
	arr2: IWimStatusResponse[]
): any[] {
	const mergedArray: IWimStatusResponse[] = [];

	if (!arr2 || arr2.length < 1) {
		return arr1;
	}

	for (const obj1 of arr1) {
		const matchingObj2 = arr2.find((obj2) => obj2.siteid === obj1.siteid);

		if (matchingObj2) {
			// Merge obj1 and matchingObj2
			const mergedObject: IWimStatusResponse = {
				...matchingObj2,
				sitename: obj1.sitename,
				sitelat: obj1.sitelat,
				sitelong: obj1.sitelong,
			};
			mergedArray.push(mergedObject);
		} else {
			// Create a new object for obj1's siteid in obj2
			const newObj2: IWimStatusResponse = {
				siteid: obj1.siteid.toString(),
				sitename: obj1.sitename,
				sitecolor: "red",
				sitelong: obj1.sitelong,
				sitelat: obj1.sitelat,
				ping: {
					camera: {
						status: "OFF",
						average_response_ms: "-",
						percent_packet_loss: "-",
					},
					wim_logic: {
						status: "OFF",
						average_response_ms: "-",
						percent_packet_loss: "-",
					},
				},
				app_process: {
					wim_app: {
						status: "OFF",
						percent_user_time: "-",
					},
					vpn_app: {
						status: "OFF",
						percent_user_time: "-",
					},
				},
				cpu: {
					status: "OFF",
					processor_usage: "-",
				},
				memory: {
					status: "OFF",
					usage_percent: "-",
				},
				network: {
					status: "OFF",
					upload: "-",
					download: "-",
				},
				disk: {
					status: "OFF",
					instance: "-",
					usage_percent: "-",
				},
			};
			mergedArray.push(newObj2);
		}
	}

	return mergedArray;
}
