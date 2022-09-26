console.log(
  "chance the name of file to app.ts that you wanna run and delete me"
);

//primitives

let userId: number;
userId = 10;

let userName: string;
userName = "Halil";

let bool: boolean;
bool = true;

//more Complex types

//default type = any

let hobbies: string[]; // array of strings
hobbies = ["armwrestling", "sport"];

let person: { name: string; age: number };

person = {
  name: "halil",
  age: 24,
};

let people: { name: string; age: number }[]; //persons array

//type inference

let course = "React Native"; //string yazmamiza gerek yok kendi cikarim yapip string dedi

// course = 12; ERROR!

let course2: string | number = "React";

course2 = 24;

type PersonType = {
  name: string;
  age: number;
};
// now we created our type we can use it anywhere like other types
