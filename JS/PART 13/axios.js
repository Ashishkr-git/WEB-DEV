let btn = document.querySelector("button");
let btn2 = document.querySelector("#button2");

btn.addEventListener("click", async () => {
  let fact = await getfacts();
  console.log(fact);
  let p = document.querySelector("#output");
  p.innerText = fact;
});

btn2.addEventListener("click", async () => {
  let link = await getimage();
  console.log(link);
  let image = document.querySelector("#image");
  image.setAttribute("src", link);
});

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
async function getfacts() {
  try {
    let response = await axios.get(url);
    return response.data.fact;
  } catch (error) {
    console.log("error :- ", error);
  }
}

async function getimage() {
  try {
    let imageaddress = await axios.get(url2);
    return imageaddress.data.message;
  } catch (error) {
    console.log(`image not found : ${error}`);
  }
}
