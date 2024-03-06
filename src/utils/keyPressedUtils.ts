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
		case "q":
		case "Q":
			return "16";
		case "w":
		case "W":
			return "17";
		case "e":
		case "E":
			return "18";
		case "r":
		case "R":
			return "19";
		case "t":
		case "T":
			return "20";
		case "y":
		case "Y":
			return "21";
		case "u":
		case "U":
			return "22";
		default:
			return null;
	}
}

export function getShortcut(key: string): string | null {
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
		case "10":
			return "0";
		case "11":
			return "Shift + 1";
		case "12":
			return "Shift + 2";
		case "13":
			return "Shift + 3";
		case "14":
			return "Shift + 4";
		case "15":
			return "Shift + 5";
		case "16":
			return "q / Q";
		case "17":
			return "w / W";
		case "18":
			return "e / E";
		case "19":
			return "r / R";
		case "20":
			return "t / T";
		case "21":
			return "y / Y";
		case "22":
			return "u / U";
		default:
			return null;
	}
}
