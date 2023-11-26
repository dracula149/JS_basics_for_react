//ASYNCHRONOUS JS PROMISES
//fetch("https://jsonplaceholder.typicode.com/todos")
//.then((res) => res.json())
//.then((data) => console.log(data));

//fetch fn fired request to api, this gives a promise. by then js moves to firts then fn to execut, this also gives a promise hence
//we are using another then to print data

//**************************************************************************************** */
//ASYNC AWAIT
async function getdata() {
  //we will be able to log data inside the fn but for logging out of the fn we need to again do promise and await
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = res.json();
  return data;
}
