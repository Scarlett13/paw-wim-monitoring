import useSWR from "swr";
import { dummyImagePath } from "../types/map-marker";

export function useBukakaSiteStatus() {
	const fetcher = () =>
		//pake proxy biar gak ke block cors
		fetch("/api/v1/wim-status", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		}).then((res) => res.json());

	const { data, error, isLoading, isValidating } = useSWR(
		"/v1/wim-status",
		fetcher,
		{
			refreshInterval: 30000, //30 seconds
			revalidateOnFocus: false,
		}
	);

	return {
		data,
		isLoading,
		error,
		isValidating,
	};
}

export function useUppkbSiteStatus() {
	const fetcher = () =>
		//pake proxy biar gak ke block cors, projecttype uppkb biar bisa query uppkb
		fetch("/api/v1/wim-status?projecttype=uppkb", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		}).then((res) => res.json());

	const { data, error, isLoading, isValidating } = useSWR(
		"/v1/wim-status",
		fetcher,
		{
			refreshInterval: 30000, //30 seconds
			revalidateOnFocus: false,
		}
	);

	return {
		data,
		isLoading,
		error,
		isValidating,
	};
}

export function useSiteImage(isUppkb?: boolean) {
	const fetcher = () =>
		//pake proxy biar gak ke block cors
		fetch("/api/v1/site-image", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		}).then((res) => res.json());

	const { data, error, isLoading, isValidating } = useSWR(
		"/v1/site-image",
		fetcher,
		{
			refreshInterval: 300000, //300 seconds
			revalidateOnFocus: false,
			revalidateIfStale: false,
			revalidateOnReconnect: false,
		}
	);

	return isUppkb
		? { dataImage: dummyImagePath }
		: {
				dataImage: data,
				isImageLoading: isLoading,
				imageError: error,
				isImageValidating: isValidating,
			};
}
