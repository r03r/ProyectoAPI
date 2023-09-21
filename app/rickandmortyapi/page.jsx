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
            <span className="grid grid-cols-4 gap-4  ">
              <li className="bg-blue-500 text-white p-4 rounded-md border-spacing-1 hover:bg-gray-400" key={character.id}>{character.name}
              </li>
              <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
          
                />
            </span>
          ))
        )}
      </ul>
    </div>
  );
}
