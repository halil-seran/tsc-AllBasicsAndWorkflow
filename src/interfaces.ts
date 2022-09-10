//#interfaces

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name?: string;
  //readonly obje olustururken bi kere set et sonra degistiremessin
  outputName?: string;
  //optional! => myMethod?{}
  //methodlari da bu sekilde istege bagli ya dondurebiliriz
  //question mark, outputname doenst have to, but it might be
}

interface Greetable extends Named {
  //you can extends more than once with ,
  //   readonly name: string;

  //   age: number;

  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  //we can implements more than one with ,
  name?: string;
  age: number = 24;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable; //you can use interfaces as a type

user1 = new Person();
// user1.name = "Degistir"; degistiremiyorum cunku readonly

user1.greet("hi there - I am");
console.log(user1);
