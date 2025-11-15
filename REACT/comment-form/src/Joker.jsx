import { useEffect, useState } from "react";

export default function Joker() {
  useEffect(() => {
    async function getFirstJoke() {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/jokes/random"
        );
        const data = await response.json();
        setJokes({
          punchline: data.punchline,
          setup: data.setup,
        });
      } catch (error) {
        console.log(error);
      }
    }
    getFirstJoke();
  }, []);

  let [Jokes, setJokes] = useState({
    punchline: "",
    setup: "",
  });
  const getJokes = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await response.json();
      setJokes({
        punchline: data.punchline,
        setup: data.setup,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2> {Jokes.setup}</h2>
      <h3>{Jokes.punchline}</h3>
      <button onClick={getJokes}>Get Jokes</button>
    </>
  );
}
