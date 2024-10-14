function App() {
  const obj = {
    name: "harshit",
    age: 26,
  };

  function printUser(rup, curr) {
    // console.log(...args)
    console.log(
      `My name is ${this.name} and age ${this.age}. I have ${rup}${curr}`
    );
  }
  Function.prototype.myApply = function(context = {}, args) {
    if(typeof this !== "function") {
        throw new Error(this + "It's not callable");
    }
    context.fn = this;
    context.fn(...args)
}

  console.log(printUser.myApply(obj,[ 10, "$"]));

  // const arr = [2, 4, 6, 8, 10];
  // const newAr = arr.reduce((acc, curr) => {
  //   console.log(acc, curr)
  //   return acc + curr;
  // }, 10)
  // console.log(newAr);

  return <>vite</>;
}

export default App;
