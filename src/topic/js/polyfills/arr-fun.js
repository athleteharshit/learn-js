// Polyfill of map functions
// [a, b, c, d, e, f, g, h, i].map((item, ind, arr) => item+a);

Array.prototype.myMap = function (cb) {
  const tem = [];
  const ln = this.length;
  for (let i = 0; i < ln; i++) {
    tem.push(cb(this[i], i, this));
  }
  return tem;
};

// Polyfill of filter functions
Array.prototype.myFilter = function (cb) {
  const tem = [];
  const ln = this.length;
  for (let i = 0; i < ln; i++) {
    const item = cb(this[i], i, this);
    if (item) {
      tem.push(this[i]);
    }
  }
  return tem;
};

// Polyfill of reduce functions
// [2, 4, 6].reduce((acc, curr) => {
//     return acc + curr;
// }, 10); => 22
Array.prototype.myReduce = function(cb, initialValue) {
    var acc = initialValue;
    const ln = this.length;
    for(let i = 0; i < ln; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
}
