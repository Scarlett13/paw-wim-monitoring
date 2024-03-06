import useSWR from "swr";
import { dummyImagePath } from "../types/map-marker";
import { useSearch } from "@tanstack/router";
import { IndexRoute } from "../routes/IndexRoute";

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

export function useSwrV2() {
	const { projecttype } = useSearch({
		from: IndexRoute.fullPath,
	});

	const queryparam = projecttype > 0 ? `?projecttype=${projecttype}` : "";

	const fetcher = async () => {
		const res = await fetch(`/v2/site-status/${queryparam}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});

		// If the status code is not in the range 200-299,
		// we still try to parse and throw it.
		if (!res.ok) {
			const error = new Error("An error occurred while fetching the data.");
			// Attach extra info to the error object.
			//@ts-ignore
			error.info = await res.json();
			//@ts-ignore
			error.status = res.status;
			throw error;
		}

		return res.json();
	};

	// const fetcher = () =>
	// 	//pake proxy biar gak ke block cors
	// 	fetch(`/v2/site-status/${queryparam}`, {
	// 		method: "GET",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Access-Control-Allow-Origin": "*",
	// 		},
	// 	}).then((res) => {
	// 		if (!res.ok) {
	// 			const error = new Error("An error occurred while fetching the data.");
	// 			// Attach extra info to the error object.
	// 			error.info = await res.json();
	// 			error.status = res.status;
	// 			throw error;
	// 		}

	// 		return res.json();
	// 	});

	const { data, error, isLoading, isValidating, mutate } = useSWR(
		"/v2/site-status",
		fetcher,
		{
			refreshInterval: 30000, //300 seconds
			revalidateOnFocus: false,
			revalidateIfStale: false,
			revalidateOnReconnect: false,
		}
	);

	return {
		data,
		isLoading,
		error,
		isValidating,
		mutate,
	};
}
