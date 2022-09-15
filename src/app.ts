// function Logger(constructor: Function) {
//   console.log("Logging");
//   console.log(constructor);
// }
function Logger(logString: string) {
  console.log("Logger factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("template factory");

  return function <T extends { new (...args: any[]): { name: string } }>(
    orijinalConstructor: T
  ) {
    // console.log("rendering template");

    // const hookElement = document.getElementById(hookId);
    // const p = new orijinalConstructor();
    // if (hookElement) {
    //   hookElement.innerHTML = template;
    //   hookElement.querySelector("h1")!.textContent = p.name;
    // }
    return class extends orijinalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("rendering template");

        const hookElement = document.getElementById(hookId);
        // const p = new orijinalConstructor();
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger("LOGGING = PERSONS")
//decorater lardaki function lar asagidan yukariya dogru renderlanir calisir
//fakat decorater factory ler yukaridan asagiya calisir
@Logger("LOGGING = PERSONS")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Persons {
  name = "Halil";
  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Persons();

console.log(pers);

// ---------------------------------------------------

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorater!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  //   return {enumerable};
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorater!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorater!");
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 15);
const p2 = new Product("Book 2", 25);

function AutoBind(
  _: any,
  _2: string | Symbol | number,
  descriptor: PropertyDescriptor
) {
  const orijinalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = orijinalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
class Printer {
  message = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
// p.showMessage();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);
// button.addEventListener("click", p.showMessage.bind(p));

class Course {
  title: string;
  price: number;
  constructor(t: string, p: number) {
    this.price = p;
    this.title = t;
  }
}
