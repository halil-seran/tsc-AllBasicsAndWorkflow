/*const names: Array<string> = ["Halil", "Ummu"]; // string[] also we can use string | number
names[0].split(" "); //we can do all strings stuff because we know array is string

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then(data =>{
    data.split(" ")
})
*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//extends is forcing to be objects // they cant be 30
console.log(merge({ name: "Halil" }, { age: 24 }));

const mergedObj = merge({ name: "Halil" }, { age: 24 });

console.log(mergedObj.name);
