export default function divideFunction(numerator, denominator) {
  let division;
	if (denominator === 0) {
		throw Error('cannot divide by 0');
	} else {
		division = numerator / denominator;
	}
  return division;
}
