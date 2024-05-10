{
  // utility type
  // Pick
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

  type Name = Pick<User, "name" | "phone" | "email">;

  // omit
  type ContactInfo = Omit<
    User,
    "name" | "age" | "gender" | "bloodGroup" | "company" | "isMarried"
  >;

  // Required
  type all = Required<User>;

  // Partial
  type PartialUser = Partial<User>;
}
