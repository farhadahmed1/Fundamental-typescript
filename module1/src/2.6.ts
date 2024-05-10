{
  ///  constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = " Next level web course";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 222,
    name: "ahmed",
    email: "ahmed@gmail.com",
    role: " student",
  });

  const student2 = addCourseToStudent({
    id: 111,
    name: "ahmed",
    email: "ahmed@gmail.com",
    role: " student",
    course: " Next level web course",
  });
  //
}
