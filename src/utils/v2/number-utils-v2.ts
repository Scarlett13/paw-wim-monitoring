import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { IconType } from "react-icons";

export function roundToNearestTen(input: number): number {
	// Ensure the input is within the 0-100 range
	if (input < 0) input = 0;
	else if (input > 100) input = 100;

	// Divide by 10, round up to the nearest whole number, and then multiply by 10
	return Math.ceil(input / 10) * 10;
}

export function getColorFromStatusV2(status: number): string {
	if (status >= 9) {
		return "bg-green-500";
	} else if (status > 5 && status <= 7) {
		return "bg-orange-500";
	} else {
		return "bg-red-500";
	}
}

export function getIconFromStatusV2(statusHealth: number | string): IconType {
	if (+statusHealth >= 9) {
		return CheckCircle as IconType;
	} else if (+statusHealth > 5 && +statusHealth <= 7) {
		return AlertCircle as IconType;
	} else {
		switch (statusHealth) {
			case "OK":
			case "ON":
			case "normal":
			case "NOT APPLICABLE":
				return CheckCircle as IconType;
			case "warning":
			case "WARNING":
				return AlertCircle as IconType;
			case "OFF":
			case "danger":
			default:
				console.log(statusHealth);
				return XCircle as IconType;
		}
	}
}

export function getVariantFromStatusV2(
	statusHealth: number | string
): "success" | "danger" | "warning" {
	console.log(statusHealth);
	if (+statusHealth >= 9) {
		return "success";
	} else if (+statusHealth >= 1 && +statusHealth < 9) {
		console.log("masuk sini");
		return "warning";
	} else {
		switch (statusHealth) {
			case "OK":
			case "ON":
			case "normal":
			case "NOT APPLICABLE":
				return "success";
			case "warning":
			case "WARNING":
				return "warning";
			case "OFF":
			case "danger":
			default:
				return "danger";
		}
	}
}

export function getPingVariantFromStatusV2(
	statusHealth: string
): "danger" | "custom_success" | "custom_warning" | "primary" {
	switch (statusHealth) {
		case "OFF":
			return "danger";
		case "ON":
		case "OK":
			return "custom_success";
		case "WARNING":
			return "custom_warning";
		case "NOT APPLICABLE":
			return "primary";

		default:
			return "danger";
	}
}

export function getSiteColorFromStatusV2(siteStatus: string) {
	switch (siteStatus) {
		case "normal":
			return "green";

		case "warning":
			return "orange";
		case "off":
		default:
			return "red";
	}
}
