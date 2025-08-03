let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let college = await getcollege(country);
  showcollege(college);
});

function showcollege(college) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (colleges of college) {
    console.log(colleges.name);
    let li = document.createElement("li");
    li.innerText = colleges.name;
    list.appendChild(li);
  }
}

async function getcollege(country) {
  try {
    let response = await axios.get(url + country);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
