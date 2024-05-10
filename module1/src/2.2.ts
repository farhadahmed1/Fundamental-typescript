{
  // type aliases  vs interface types

  type User1 = {
    name: string;
    age: number;
    gander: "male" | "female";
    isMarred: boolean;
  };

  interface User2 {
    name: string;
    age: number;
    gander: "male" | "female";
    isMarred: boolean;
  }
  const user1: User2 = {
    name: "jamil",
    age: 24,
    gander: "male",
    isMarred: false,
  };
  // intersection &
  type userWithRole = User1 & { role: string };

  const user3: userWithRole = {
    name: "kamal",
    age: 24,
    gander: "male",
    isMarred: false,
    role: "admin",
  };

  interface userWithRole2 extends User2 {
    role: string;
  }
  interface userWithRole2 extends User1 {
    role: string;
  }

  // js ---> object , array --> object function --> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  type Add = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };

  // interface used  Object
  // type use array , function
}
