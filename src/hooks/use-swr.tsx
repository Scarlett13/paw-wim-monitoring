import useSWR from "swr";

export function useSiteStatus() {
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

export function useSiteImage() {
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

	return {
		dataImage: data,
		isImageLoading: isLoading,
		imageError: error,
		isImageValidating: isValidating,
	};
}
