const post = {
  username: "ashishkr2612",
  content: "Chennai win the match!",
  likes: "20 likes",
  reposts: "50 reposts",
  tags: "@mahi7781",
};

post.username = prompt("ENTER YOUR USERNAME");
post.content = prompt("ENTER THE CONTENT");
post.likes = prompt("ENTER THE NO OF LIKES");
post.reposts = prompt("ENTER THE NO OF REPOSTS");
post.tags = prompt("ENTER YOUR TAG");

console.log(
  `${post.username} posted new tweet , i.e ${post.content} liked by ${post.likes} reposts by ${post.reposts} tagged to ${post.tags}`
);
