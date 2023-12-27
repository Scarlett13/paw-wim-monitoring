export function getNerworkBytes(bytes: number | string): {
	value: number | string;
	unit: string;
} {
	if (typeof bytes !== "number") {
		return {
			value: bytes,
			unit: "",
		};
	}
	const units = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	let unitIndex = 0;
	let size = bytes;

	while (size >= 1024 && unitIndex < units.length - 1) {
		size /= 1024;
		unitIndex++;
	}

	return {
		value: size,
		unit: units[unitIndex] || "B",
	};
}
