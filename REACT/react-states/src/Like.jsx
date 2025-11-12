import { useState } from "react";

let styles = {
  fontSize: "70px",
};

let likedStyle = {
  color: "red",
};

export default function likeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [Count , setCount] = useState(0);
  let toggleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setCount(Count + 1);
    } else {
      setCount(Count - 1);
    }
  };
  return (
    <p onClick={toggleLike} style={styles}>
      {isLiked ? (
        <i className={`fa-solid fa-heart`} style={likedStyle}></i>
      ) : (
        <i className={`fa-regular fa-heart`}></i>
      )}
      <span>{Count}</span>
    </p>
  );
}
