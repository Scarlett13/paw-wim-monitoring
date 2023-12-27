export function getColorFromStatus(status: string): string {
	switch (status) {
		case "ON":
		case "OK":
			return "#2BD03B";

		case "WARNING":
			return "#f7792a";

		case "CRITICAL":
		case "OFF":
		case "ERROR":
		default:
			return "#f72a2d";
	}
}

export function getTypographyColorFromStatus(
	status: string
): "danger" | "custom_success" | "custom_warning" {
	switch (status) {
		case "ON":
		case "OK":
			return "custom_success";

		case "WARNING":
			return "custom_warning";

		case "CRITICAL":
		case "OFF":
		case "ERROR":
		default:
			return "danger";
	}
}
