// function cloneObject(obj: object) {
//   const clone = Array.isArray(obj) ? [] : {};
//   for (let i in obj) {
//     if(obj[i] !== null &&  typeof(obj[i]) === 'object') {
//       clone[i] = cloneObject(obj[i]);
//     } else {
//       clone[i] = obj[i];
//     }
//   }
//   return clone;
// }

function deepCopy(o) {
  var copy = o,k;

  if (o && typeof o === 'object') {
      copy = Array.isArray(o) ? [] : {};
      for (k in o) {
          copy[k] = deepCopy(o[k]);
      }
  }

  return copy;
}

function deepCopy2(o) {
  /**
   *  Assume that `reduce` is slow, for now
   */
  if (Array.isArray(o)) return o.reduce((a, c) => a.concat(deepCopy(c)), [])
  if ((o || false) instanceof Object) {
      const r = {}
      for (let k in o) {
          const c = o[k];
          r[k] = deepCopy(c);
      }
      return r;
  }
}
