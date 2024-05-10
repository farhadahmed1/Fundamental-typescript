{
  //
  // type guards
  // typeof --->working is type guard

  const add = (
    param1: string | number,
    param2: string | number
  ): string | number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add(2, 3);
  console.log(result);
  const result1 = add("33", 2);
  console.log(result1);

  // in guard mode

  type User = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: User | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: User = {
    name: "ahmed",
  };
  const adminUser: AdminUser = {
    name: "akib",
    role: "admin",
  };
  getUser(normalUser);
  getUser(adminUser);

  ///
}
