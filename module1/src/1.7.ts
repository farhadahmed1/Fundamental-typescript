{
  // destructuring

  // spread operator
  const friend1: string[] = ["abul", "kabuil", "jabul"];
  const friend2: string[] = ["babul", "habib", "rifat"];
  friend1.push(...friend2);

  const mentors1 = {
    javascript: "Baki",
    C: "Zahid",
  };
  const mentors2 = {
    python: "Baki",
    typScript: "Billa",
  };

  const mentors = {
    ...mentors1,
    ...mentors2,
  };
  console.log(mentors);

  // rest operator
  const getfriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`all friend  ${friend}`));
  };

  getfriends("abul", "kabuil", "jabul", "rifat");
}
