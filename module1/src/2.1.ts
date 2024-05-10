{
  // type assertions

  let anything: any;
  anything = "Next Level web development";
  anything as string;

  const kgToGm = (value: string | number) => {
    if (typeof value === "number") {
      const kg = value * 1000;
      console.log(kg);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const kg = parseFloat(result) * 1000;
      console.log(kg);
    } else {
      console.log("wrong type");
    }
  };

  const result1 = kgToGm(100);
  console.log(result1);

  //   kgToGm(10);
  //   kgToGm("10 kg");
  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
