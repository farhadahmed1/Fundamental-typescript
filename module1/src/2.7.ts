{
  // generic constraint with keyof operator

  // type Vehicle = {
  //   bike: string;
  //   car: string;
  //   ship: string;
  // };

  // type owner2 = keyof Vehicle;

  // promise

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = " I promise Fiha I love you";
      if (data) {
        resolve(data);
      } else {
        reject("sorry baby I don't understand");
      }
    });
  };
  // calling promise function

  const ShowData = async () => {
    try {
      const data: string = await createPromise();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  ShowData();

  // api call
  type user = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async (): Promise<user> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  };

  getTodo();

  //
}
