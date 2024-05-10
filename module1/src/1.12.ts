{
  // nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log(" searching");
    } else {
      console.log("there is no search ");
    }
  };
  searchName(null);

  // unknown types runtime types

  const speedInMeter = (value: unknown) => {
    if (typeof value === "number") {
      const speed = (value * 1000) / 3600;
      console.log(`now care speed  ${speed}ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const speed = (parseFloat(result) * 1000) / 3600;
      console.log(` care speed  ${speed}ms^-1`);
    } else {
      console.log("wrong type");
    }
  };
  speedInMeter("2000km");
}
