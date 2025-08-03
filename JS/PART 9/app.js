//selecting element by class name gives html collection not array collection
document.getElementsByClassName("oldImg");
document.getElementsByClassName("oldImg")[0];

let smallimages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallimages.length; i++) {
  console.dir(smallimages[i].src);
}

