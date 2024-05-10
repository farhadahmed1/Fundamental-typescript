{
  //conditional
  const age: number = 20;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("child");
  }

  // ternary operator

  const age1: number = 20;
  console.log(age1 >= 18 ? "adult" : "child");
  const isAdult = age <= 22 ? "biye korbo baby" : "No baby akhon na";
  console.log(isAdult);

  // switch
  const age2: number = 19;
  switch (age2) {
    case 18:
      console.log("adult");
      break;
    default:
      console.log("child");
      break;
  }

  // nullish coalescing operator
  // null / undefined ---> decision making

  const age3: number | null = null;
  const isAdult1 = age3 ?? "biye korbo baby";
  console.log(isAdult1);

  type User = {
    name: string;
    age?: number; //optional type
    phone?: string;
    email: string;
    address: {
      road: string;
      city: string;
      presentAddress: string;
      // permanentAddress: string;
    };
  };

  const user1: User = {
    name: "fiha",
    email: "fiha@gmail.com",
    address: {
      road: "123",
      city: "Tehran",
      presentAddress: "Tehran",
    },
  };
  const permanentAddress =
    user1?.address?.permanentAddress ?? "No permanent address";
  console.log(permanentAddress);
}
