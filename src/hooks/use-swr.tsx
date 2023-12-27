import useSWR from "swr";

export function useSiteStatus() {
	const fetcher = () =>
		fetch("http://192.168.10.230:3010/v1/wim-status", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
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
