async function LoadPoast() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
  console.log(data);
}

async function Post() {
  const posts = await LoadPoast();
  return posts.map((posts) => (
    <div
      className="bg-slate-500 text-slate-200 m-4 font-sans  items-center rounded-md justify-between  "
      key={posts.id}
    >
      <h3 className="p-4">
        {posts.id} .{posts.title}
      </h3>
      <br />
      <p>{posts.body}</p>
    </div>
  ));
}

export default Post;
