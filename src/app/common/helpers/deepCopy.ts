export function cloneObject(obj: object) {
  const clone = Array.isArray(obj) ? [] : {};
  for (const i in obj) {
    if (obj[i] !== null && typeof(obj[i]) === 'object') {
      clone[i] = cloneObject(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
}
