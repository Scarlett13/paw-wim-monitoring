import { roundToNearestTen } from "./number-utils-v2";

export function parseDevicesPerSite(siteData: any) {
	const detailDevicesPerSite: any = {};
	try {
		for (const key in siteData) {
			switch (key) {
				case "siteId":
				case "siteName":
				case "siteConfig":
				case "countOff":
				case "siteLat":
				case "siteLong":
				case "siteStatus":
				case "sitehealthstatus":
					break;

				default:
					if (!detailDevicesPerSite[key]) {
						detailDevicesPerSite[key] = [];
					}

					const status = calculateDeviceHealth(siteData[key], key);
					// console.info(siteData[key], status);
					console.info({
						key: siteData[key],
						status: status,
					});

					detailDevicesPerSite[key].push({
						key: siteData[key],
						status: status,
					});
					break;
			}
		}
	} catch (error) {
		console.error(error);
	}

	return detailDevicesPerSite;
}

export function calculateDeviceHealth(deviceData: any, key: string) {
	console.log(deviceData);
	switch (key) {
		case "PC":
			return calculatePcHealth(deviceData);
		case "WIM Logic":
			return calculatePingHealth(deviceData, key);

		default:
			return calculatePingHealth(deviceData, key);
	}
}

function calculatePingHealth(devicesData: any, key: any) {
	let healthPercentage = 0;
	// console.log(devicesData);

	try {
		for (const device of devicesData) {
			console.log(device);
			const tempdata =
				device.deviceStatus.value ?? device.deviceStatus[key].value;
			console.log(tempdata, key);
			healthPercentage += getHealthPercentage(tempdata || "OFF");
		}
	} catch (error) {
		console.log("error calculate ping health: " + healthPercentage);
	}

	return roundToNearestTen(healthPercentage / devicesData.length) / 10;
}

function calculatePcHealth(pcData: any) {
	console.log(pcData);
	let healthPercentage = 0;

	try {
		for (const pc of pcData) {
			if (pc.deviceStatus === "OFF") {
				healthPercentage += getHealthPercentage(pc?.deviceStatus || "OFF");
				continue;
			}

			healthPercentage += getHealthPercentage(
				pc?.deviceStatus?.cpu?.status || "OFF"
			);

			healthPercentage += getHealthPercentage(
				pc?.deviceStatus?.mem?.status || "OFF"
			);

			healthPercentage += getHealthPercentage(
				pc?.deviceStatus?.disk?.status || "OFF"
			);

			if (pc?.deviceStatus?.vpn_app?.status === "NOT AVAILABLE") {
				healthPercentage += 100;
			} else {
				healthPercentage += getHealthPercentage(
					pc?.deviceStatus?.vpn_app?.status || "OFF"
				);
			}

			healthPercentage += getHealthPercentage(
				pc?.deviceStatus?.wim_app?.status || "OFF"
			);
		}
	} catch (error) {}

	console.log(roundToNearestTen(healthPercentage / 5 / pcData.length) / 10);

	return roundToNearestTen(healthPercentage / 5 / pcData.length) / 10;
}

function getHealthPercentage(status: any): number {
	if (
		status === "OK" ||
		status === "NOT APPLICABLE" ||
		status === "not available" ||
		status === "ON"
	) {
		return 100;
	} else if (status === "WARNING") {
		return 33;
	} else if (status === "CRITICAL") {
		return 67;
	} else {
		return 0;
	}
}

export function findSiteById(sitedata: any, siteid: number) {
	try {
		if ((!sitedata && sitedata.length > 0) || !siteid) {
			return undefined;
		}
		const sitefound = sitedata.find((site: any) => site.siteId === siteid);

		return sitefound || sitedata[0];
	} catch (error) {
		return undefined;
	}
}

export const isSiteIdFound = (sites: any, siteIdToFind: number): boolean => {
	return sites.some((site: any) => site.value === siteIdToFind);
};
