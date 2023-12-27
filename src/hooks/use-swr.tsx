import useSWR from "swr";

export function useSiteStatus() {
	const fetcher = () =>
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
