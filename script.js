var myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(' First Promise');
    },1000);
});

const promiseInPromise =() => new Promise(async resolve => {
  const result = await myFirstPromise
  resolve(result)
});

const asyncFunc = async () => {
  try {
    const success = await  promiseInPromise();
    console.log(success)
  } catch (err) {
    console.log(err)
  }
}
asyncFunc();