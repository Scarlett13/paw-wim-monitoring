export function getKeyShortcut(key: string): string | null {
	switch (key) {
		case "1":
			return "1";
		case "2":
			return "2";
		case "3":
			return "3";
		case "4":
			return "4";
		case "5":
			return "5";
		case "6":
			return "6";
		case "7":
			return "7";
		case "8":
			return "8";
		case "9":
			return "9";
		case "0":
			return "10";
		case "!":
			return "11";
		case "@":
			return "12";
		case "#":
			return "13";
		case "$":
			return "14";
		case "%":
			return "15";
		default:
			return null;
	}
}
