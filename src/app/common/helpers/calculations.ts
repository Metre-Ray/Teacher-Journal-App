export function calcAverage(arr: (string | number)[]): number {
  let divisor: number = arr.length;
  return (arr.reduce((acc, el) => {
    if (Number.isNaN(Number(el))) {
      divisor -= 1;
      return acc;
    }
    (acc as number) += Number(el);
    return acc;
  },                 0) as number) / divisor;
}
