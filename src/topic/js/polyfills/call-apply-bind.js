// Polyfill of call 
//  const obj = {
//     name: "harshit",
//     age: 26,
//   };

//   function printUser(rup, curr) {
//     return `My name is ${this.name} and age ${this.age}. I have ${rup}${curr}`;
//   }

//   console.log(printUser.call(obj, 10, "$"));
 Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + "It's not callable");
    }

    context.fn = this;
    context.fn(...args);
  };

//   Polyfill of apply 
Function.prototype.myApply = function(context = {}, args) {
    if(typeof this !== "function") {
        throw new Error(this + "It's not callable");
    }
    context.fn = this;
    context.fn(...args)
}
