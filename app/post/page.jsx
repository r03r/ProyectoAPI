async function LoadPoast() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

async function Post() {
  const posts = await LoadPoast();
  return posts.map((post) => (
    <div key={post.id}>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
    </div>
  ));
}

export default Post;
