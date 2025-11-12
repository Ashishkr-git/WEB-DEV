function printhello(event) {
  console.log(event);
}

export default function Button() {
  return (
    <div>
      <button onClick={printhello} className="btn">
        Click me{" "}
      </button>
      <button onDoubleClick={() => console.log("Double click event triggered")}>
        Double click me
      </button>
    </div>
  );
}
