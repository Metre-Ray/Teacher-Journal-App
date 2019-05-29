export function genId() {
  return Math.round((Math.random() * 36 ** 12)).toString(36) + '-' + Date.now().toString(); // 10 numbers + 26 letters
}
