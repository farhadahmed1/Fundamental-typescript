{
  // generic type
  type GenericArray<T> = Array<T>;
  const rollNumber: Array<number> = [1, 2, 3, 4, 5];
  const mentors: Array<string> = ["a", "b", "c", "d"];
  const boolArray: Array<boolean> = [true, false, false, true, false];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "John",
      age: 23,
    },
    {
      name: "Jane",
      age: 24,
    },
  ];

  type GenericTuple<x, y> = [x, y];

  const couple: GenericTuple<string, string> = ["John ", "Jane"];
  const couple1: GenericTuple<
    number,
    { name: string; age: number; isHot: boolean }
  > = [1, { name: "John", age: 20, isHot: true }];

  // generic interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      ram: number;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface appleWatch {
    brand: string;
    model: string;
  }
  interface yamahaBike {
    brand: string;
    model: string;
    color: string;
  }
  const poorDeveloper: Developer<appleWatch> = {
    name: "farhad",
    computer: {
      brand: "apple",
      model: "macbook",
      ram: 8,
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "apple watch",
      model: "watch",
    },
  };
  type watch = {
    brand: string;
    model: string;
    heartTrack: boolean;
  };
  const richDeveloper: Developer<watch, yamahaBike> = {
    name: "farhad",
    computer: {
      brand: "apple",
      model: "macbook",
      ram: 8,
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "apple watch",
      model: "watch",
      heartTrack: true,
    },
    bike: {
      brand: "yamaha",
      model: "yamaha",
      color: "black",
    },
  };
  ///
}
