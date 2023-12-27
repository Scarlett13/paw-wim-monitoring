import { IconType } from "react-icons";
import { IWimStatusResponse } from "../types/response";
import { XCircle, CheckCircle, AlertCircle } from "lucide-react";

export function getStatusCardSite(
	sitedata: IWimStatusResponse
): "danger" | "warning" | "success" {
	if (!sitedata.sitecolor) {
		return "danger";
	}

	switch (sitedata.sitecolor) {
		case "orange":
			return "warning";
		case "red":
			return "danger";
		case "green":
			return "success";

		default:
			return "danger";
	}
}

export function getIconCardSite(sitedata: IWimStatusResponse): IconType {
	if (!sitedata.sitecolor) {
		return XCircle as IconType;
	}

	switch (sitedata.sitecolor) {
		case "orange":
			return AlertCircle as IconType;
		case "red":
			return XCircle as IconType;
		case "green":
			return CheckCircle as IconType;

		default:
			return XCircle as IconType;
	}
}
