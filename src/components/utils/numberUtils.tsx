export function formatNumberWithTwoDecimals(
	inputNumber: number | string
): number | string {
	if (!inputNumber || typeof inputNumber !== "number") {
		return "ERROR";
	}
	const roundedNumber = Number(inputNumber.toFixed(2));
	return roundedNumber;
}
