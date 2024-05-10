{
  //

  type Person = {
    name: string;
    age: number;
    id: number;
  };
type PersonReadOnly = { readonly[key in keyof ] }
  const person1: Person = {
    name: "jamil",
    age: 24,
    id: 1,
  };

  //
}
