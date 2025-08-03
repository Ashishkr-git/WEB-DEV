document.body.append(
  Object.assign(document.createElement("p"), {
    textContent: "Hey i am red",
    style: "color:red;",
  })
);

document.body.append(
  Object.assign(document.createElement("h3"), {
    textContent: "I am blue h3",
    style: "color:blue;",
  })
);

document.body
  .appendChild(
    Object.assign(document.createElement("div"), {
      style: "border:2px solid black;background:pink;",
    })
  )
  .appendChild(
    Object.assign(document.createElement("h1"), {
      textContent: "I'm in the div",
    })
  )
  .parentElement.appendChild(
    Object.assign(document.createElement("p"), { textContent: "ME TOO!" })
  );
