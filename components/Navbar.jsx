import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="rounded border-solid hover:border-dotted">
      <h1>NavBar</h1>
      <ul className="  space-x-2   flex-row    ">
        <Link
          className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 
        hover:bg-blue-700 text-white
"
          href="/"
        >
          Home
        </Link>

        <Link
          className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 
        hover:bg-blue-700 text-white
"
          href="/about"
        >
          About
        </Link>

        <Link
          className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 
        hover:bg-blue-700 text-white
"
          href="/tienda"
        >
          Tienda
        </Link>

        <Link
          className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 
        hover:bg-blue-700 text-white
"
          href="/post"
        >
          Post
        </Link>

        <Link
          className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 
        hover:bg-blue-700 text-white
"
          href="/rickandmortyapi"
        >
          Rickandmorty
        </Link>
      </ul>
    </nav>
  );
}
