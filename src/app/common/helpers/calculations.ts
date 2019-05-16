export function calcAverage(arr: any[]) {
  return  arr.reduce((acc, el) => {
    acc += Number(el);
    return acc;
  }, 0) / arr.length;
}
