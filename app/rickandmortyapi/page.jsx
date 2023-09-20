import Image from "next/image";

async function fetchData() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data;
  console.log(data);
}

export default function character({characters}) {
  return (
    <div className="character">
      <h1>Characters</h1>
      <ul>
        {fetchData().then((data) =>
          data.results.map((character) => (
            <>
              <li key={character.id}>{character.name}</li>
              <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
          
              />
            </>
          ))
        )}
      </ul>
    </div>
  );
}
