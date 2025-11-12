function handleformsubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
}

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="Enter text" />
      <button onClick={handleformsubmit}>submit</button>
    </form>
  );
}
