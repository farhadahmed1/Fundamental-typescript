{
  // object
  // type alias
  type User = {
    name: string;
    age?: number; //optional type
    address: string;
    phone: string;
    email: string;
    isMarried: boolean;
    gender: "male" | "female";
    bloodGroup?: "A+" | "O+" | "B+" | "B-";
    company: "Meta" | "amazon"; // type literal types
  };
  type Experience = {
    joinDate: number;
    sector: string;
  };

  type Worker = User & Experience;

  const employees1: Worker = {
    name: "jamil",
    age: 24,
    address: "Tehran",
    phone: "09123456789",
    email: "jamil@gmail.com",
    isMarried: false,
    gender: "male",
    company: "Meta",
    joinDate: 2020,
    sector: "IT",
  };
  const user1: User = {
    name: "Farhad",
    age: 24,
    address: "Tehran",
    phone: "09123456789",
    email: "farhad@gmail.com",
    isMarried: false,
    gender: "male",
    company: "Meta",
  };

  const user2: User = {
    name: "fiha",
    address: "dhaka",
    phone: "09123456789",
    email: "fiha@gmail.com",
    isMarried: false,
    gender: "female",
    company: "amazon",
  };

  // array

  const numbers: number[] = [1, 2, 3, 4, 5];
  const friend: string[] = ["ahmed", "jamal"];
  const employee: [
    name: string,
    age: number,
    phone: number,
    isMarried: boolean
  ] = ["ahmed", 23, 12324325, false]; //tuples

  /// function to create
  // normal function to create

  function sum(a: number, b: number): number {
    return a + b;
  }

  sum(2, 3);
  // arrow function to create
  const mul = (a: number, b: number): number => a * b;
  mul(2, 3);

  const sub = (a: number, b: number): number => {
    return a + b;
  };
  sub(23, 2);

  // method  = object ---> function

  const userBalance = {
    name: "ahmed",
    age: 23,
    phone: "09123456789",
    email: "ahmed@gmail.com",
    isMarried: false,
    company: "Meta",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  const newArray: number[] = numbers.map((elem: number): number => elem * elem);
}
