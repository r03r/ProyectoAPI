import { Suspense } from "react";

async function getCharacters() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { results: [] }; // retornar datos vacíos
  }
}

export default function Characters() {
  const data = getCharacters();

  return;
}
