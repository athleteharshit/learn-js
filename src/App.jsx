function App() {
  Array.prototype.myReduce = function(cb, initialValue) {
    var acc = initialValue;
    const ln = this.length;
    for(let i = 0; i < ln; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
}
  const arr = [2, 4, 6, 8, 10];
  const newAr = arr.myReduce((acc, curr) => {
    console.log(acc, curr)
    return acc + curr;
  }, 10)
  console.log(newAr);

  return <>vite</>;
}

export default App;
