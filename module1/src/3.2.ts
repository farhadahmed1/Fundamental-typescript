{
  //  Inheritance in oop

  class Parents {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    // method
    getSleep(numOfHours: number) {
      console.log(` A student ${this.name} will sleep ${numOfHours}`);
    }
  }
  class Student extends Parents {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const Student1 = new Student("akib", 20, "badda");
  Student1.getSleep(10);

  class Teacher extends Parents {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClasses: number) {
      console.log(
        ` Math teacher ${this.name}  sir now takeClass ${numOfClasses}`
      );
    }
  }

  const MathTeacher = new Teacher("ali", 32, "rampur ", "teacher");
  MathTeacher.takeClass(1);
  //
}
