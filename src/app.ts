class Department {
  //   private readonly id: string;
  //   public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d1";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Halil") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new ITDepartment("b1", ["Halil"]);

// accounting.addEmployee("Halil");
// accounting.addEmployee("Max");

// // accounting.employees[2] = "Ummu";

// accounting.describe();
// accounting.name = "new one";
// accounting.printEmployeeInformation();

const it = new ITDepartment("b1", ["Halil"]);

it.addEmployee("Halil");
it.addEmployee("Max");

it.describe();
it.name = "new one";
it.printEmployeeInformation();
console.log(it);

// const accountingCopy = { name: "halil", describe: accounting.describe };

// accountingCopy.describe();

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong!");

accounting.addEmployee("Halil");
accounting.addEmployee("Halill");

accounting.printReports();
accounting.printEmployeeInformation();  
