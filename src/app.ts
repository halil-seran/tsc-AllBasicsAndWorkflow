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

  return function (constructor: any) {
    console.log("rendering template");

    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = p.name;
    }
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
