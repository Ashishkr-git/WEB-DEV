let url = "https://catfact.ninja/fact";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.fact);
    return fetch(url);
  })
  .then((response) => {
    return response.json();
  })
  .then((data1) => {
    console.log(data1.fact);
  })

  .catch((error) => {
    console.log(`error detected : ${error}`);
  });
