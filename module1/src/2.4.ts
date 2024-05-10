{
  //
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  type user = { id: number; name: string; role?: string };

  const userGeneric = createArrayWithGeneric<user>({
    id: 1,
    name: "ahmed",
    role: "admin",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = " Next level web course";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "ahmed",
    email: "ahmed@gmail.com",
    role: " student",
  });

  const student2 = addCourseToStudent({
    name: "ahmed",
    email: "ahmed@gmail.com",
    role: " student",
    course: " Next level web course",
  });
  //
}
