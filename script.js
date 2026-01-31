const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainEl = document.getElementById("main");

posts.forEach((post) => {
  const article = document.createElement("article");
  article.classList.add("post");

  article.innerHTML = `
  <div class="post-header container">
    <img class="avatar" src="${post.avatar}" alt="${post.name}" />
    <div class="user-info">
      <h2 class="name">${post.name}</h2>
      <p class="location">${post.location}</p>
    </div>
  </div>

  <figure class="post-image">
    <img class="img" src="${post.post}" alt="Post by ${post.name}" />
  </figure>

  <nav class="post-actions container" aria-label="Post actions">
    <button class="like-btn" aria-label="Like">
      <img src="images/icon-heart.png" alt=""/>
    </button>
    <button aria-label="Comment">
      <img src="images/icon-comment.png" alt=""/>
    </button>
    <button aria-label="Direct message">
      <img src="images/icon-dm.png" alt=""/>
    </button>
  </nav>
  
  <section class="post-likes container">
    <p>${post.likes.toLocaleString()} likes</p> 
  </section>

  <section class="post-comment container">
    <p><strong>${post.username}</strong> ${post.comment}</p>
  </section>
  `;

  // Append the article to the main
  mainEl.appendChild(article);

  const postImage = article.querySelector(".post-image .img");
  const likesEl = article.querySelector(".post-likes p");
  const likeBtn = article.querySelector(".like-btn");

  // Function to increment likes
  const incrementLikes = () => {
    post.likes += 1;
    likesEl.textContent = `${post.likes.toLocaleString()} likes`;
  };

  // Double-click on image
  postImage.addEventListener("dblclick", () => {
    incrementLikes();
    // Add liked state to button
    likeBtn.classList.add("liked");
  });

  // Click on like button
  likeBtn.addEventListener("click", () => {
    incrementLikes();
    likeBtn.classList.add("liked");
  });
});
