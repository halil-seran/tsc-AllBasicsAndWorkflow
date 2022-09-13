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

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value!";
  if (element.length === 1) {
    descriptionText = "Got 1 elements.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

extractAndConvert({ name: "Halil" }, "name"); //if write second name yerine age then we get error

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Halil");
textStorage.addItem("Ummu");
textStorage.removeItem("Halil");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const halilObj = { name: "Halil" };
// objStorage.addItem(halilObj);
// objStorage.addItem({ name: "Ummu" });
// objStorage.removeItem(halilObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; //partial demek baslangicta objenin nasil oldugunun onemi yok bitisde
  //couseGoal gibi olucak icindekiler degisicek sonuc courseGoal gibi olucak
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
  //sonda bitti fakat yine da as ile CourseGoal typeina donusturmemiz gerekiyor
}

const names: Readonly<string[]> = ["Halil", "ArmWrestling", "Software"];
// names.push("React Native");
// names.pop();   error
