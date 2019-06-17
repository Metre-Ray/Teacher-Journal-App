export function calcAverage(arr: (string | number)[]): number {
  return (arr.reduce((acc, el) => {
    (acc as number) += Number(el);
    return acc;
  },                 0) as number) / arr.length;
}
