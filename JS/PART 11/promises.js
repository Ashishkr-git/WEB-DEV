function savetodb(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
      resolve("data is saved");
    } else {
      reject("data is not saved");
    }
  });
}

//promises method

//then() and catch() method
//then() is used for resolved promises and catch() is used for reject promises

// let request = savetodb("ashish"); // request = promise object
// request
//   .then(() => {
//     console.log("promise is fullfilled");
//   })
//   .catch(() => {
//     console.log("promise is not fullfilled");
//   });

//promise channing

savetodb("api is fetching....")
  .then(() => {
    console.log("api is fetched successfully....");
    return savetodb("data fetching statrted....");
  })
  .then(() => {
    console.log("data is saved successfully....");
    return savetodb("ashish");
  })
  .then(() => {
    console.log(`data is saved `);
  })
  .catch(() => {
    console.log("weak network , try again....");
  });
