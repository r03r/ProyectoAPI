import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex rounded-sm ">
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/post">Post</Link>
        </li>
        <li>
          <Link href="/rickandmortyapi">Caracters </Link>
        </li>
      </ul>
    </div>
  );
}
