export default function divideFunction(numerator, denominator) {
  let division;
  try {
    if (denominator === 0) {
      throw Error('cannot divide by 0');
    } else {
      division = numerator / denominator;
    }
  } catch (error) {
    console.log(error);
  }
  return division;
}
