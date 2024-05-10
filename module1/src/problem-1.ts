{
  //Design a TypeScript function repeatString that takes two parameters: a string and a number.
  //The function should return a new string that repeats the input string the specified number of times.
  //
  // problem 1
  // type RepeatString = {
  //   str: string;
  //   num: number;
  // };
  const repeatString = (str: string, num: number): string => {
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }
    return repeatedString;
  };

  // Example usage:
  const repeated = repeatString("Hello!", 3);
  console.log(repeated);

  // problem 2

  const findLargestNumber = (arr: number[]): number => {
    return Math.max(...arr, 0);
  };
  const num1 = [10, 5, 8, 20, 3];
  const result = findLargestNumber(num1);
  console.log(result);

  // problem 3

  const filterEvenNumbers = (arr: number[]): number[] => {
    const evenNumber = arr.filter((num: number) => num % 2 === 0);
    return evenNumber;
  };
  const arr1 = [1, 2, 3, 4, 5, 6];

  const evenNumbers = filterEvenNumbers(arr1);
  console.log(evenNumbers);

  // problem 4
  //   function reverseArray<T>(array: T[]): T[] {
  //     return array.slice().reverse();
  //   }

  // const createArrayWithGeneric =  => {
  //   return [array];
  // };
  const reverseArray = <T>(array: T[]): T[] => {
    const revers = array.map((item, idx) => array[array.length - 1 - idx]);
    return revers;
  };

  const stringArray: string[] = ["apple", "banana", "cherry"];
  const reversedStringArray: string[] = reverseArray([
    "apple",
    "banana",
    "cherry",
  ]);
  console.log(reversedStringArray);

  const stringArray1: number[] = [1, 2, 3, 4, 5, 6];
  const reversedStringArray1: number[] = reverseArray(stringArray1);
  console.log(reversedStringArray1);

  // problem 5
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  // interface Student {
  //   name: string;
  //   age: number;
  //   grades: number[];
  // }

  const calculateAverageGrade = (student: Student): number => {
    const sum = student.grades.reduce((total, grade) => total + grade, 0);
    const averageGrades = sum / student.grades.length;
    return averageGrades;
  };
  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 81, 98],
  };
  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(averageGradeForBob);
  // problem 6

  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const isRecentBook = (book: Book): boolean => {
    const currentYear = new Date().getFullYear();
    if (currentYear - book.publishedYear <= 5) {
      return true;
    } else {
      return false;
    }
  };

  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2023,
  };
  const year = isRecentBook(book1);
  console.log(year);
  // problem 7

  const logString = (input: unknown): void => {
    if (typeof input === "string") {
      console.log(input); // Log the string to the console
    } else {
      console.error("Input is not a string."); // Log an error message
    }
  };
  logString("Hello, TypeScript!");
  logString(42);

  // problem 8

  class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    // method
    getCar(): string {
      return `Your car model is : ${this.year} ${this.brand} ${this.model} `;
    }
  }
  const car1 = new Car("Toyota", "Corolla", 2020);
  const myCar = car1.getCar();
  console.log(myCar);

  //
}
