class Department {
  //   private readonly id: string;
  //   public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Halil") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

const employee1 = Department.createEmployee("Ummu");
console.log(employee1);

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

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong!");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Halil");
accounting.addEmployee("Halill");

accounting.printReports();
accounting.printEmployeeInformation();
