{
  // asycnchronous
  interface userData {
    name: string;
    email: string;
    address: {
      road: string;
      city: string;
      presentAddress: string;
    };
  }
  const data: userData = {
    name: "fiha",
    email: "fiha@gmail.com",
    address: {
      road: "123",
      city: "Tehran",
      presentAddress: "Tehran",
    },
  };
  const showMessage = (): Promise<userData> => {
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject("sorry baby I don't understand how is you");
      }
    });
  };
  // without promise
  //   const result = showMessage();
  //   console.log(result);

  // with promise
  const ShowResult = async () => {
    const result = await showMessage();
    console.log(result);
  };
  // ShowResult();

  // api data loading

  interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const fetchData = async (): Promise<IPost[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };

  const ShowPost = async () => {
    const result = await fetchData();
    console.log(result);
  };
  ShowPost();

  //
}
