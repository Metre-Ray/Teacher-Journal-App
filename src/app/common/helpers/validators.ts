export function validateDate(date: string): boolean {

  const dateRegexp: RegExp = /^(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})$/;
  const matched: RegExpMatchArray = date.match(dateRegexp);
  if (!matched) { return false; }

  const year: number = parseInt(matched.groups.year, 10);
  const month: number = parseInt(matched.groups.month, 10);
  const day: number = parseInt(matched.groups.day, 10);
  const monthLength: number[] = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLength[1] = 29;
  }

  if (year < 0) { return false; }
  if (month < 1 || month > 12) { return false; }
  if (day < 1 || day > monthLength[month - 1]) { return false; }

  return true;
}

export function validateMark(mark: string | number): boolean {
  const num: number = Number(mark);
  if (!num || num < 0 || num > 10) {
    return false;
  }
  return true;
}
