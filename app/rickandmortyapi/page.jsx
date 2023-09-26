import Image from "next/image";

async function fetchData() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();
  return characters;

}
// Componente Card.js

 function Card({ character }) {

  return (
    <div className="bg-gray-800 text-white rounded-lg p-4">
      
      <img 
        className="w-32 h-32 rounded-full mx-auto"
        src={character.image} 
        alt={character.name}/>

      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p>Especie: {character.species}</p>
        <p>Locación: {character.location.name}</p>
      </div>

    </div>
  )


}
// Página index.js

export default function Home({ characters }) {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {characters.map(character => (
        <Card 
          key={character.id}
          character={character}
        />
      ))}
    </div>
  )
}

// export default function character({characters}) {
//   return (
//     <div className="character">
//       <h1>Characters</h1>
//       <ul>
//         {fetchData().then((data) =>
//           data.results.map((character) => (
//             <span className="grid grid-cols-4 gap-4  ">
//               <li className="bg-blue-500 text-white p-4 rounded-md border-spacing-1 hover:bg-gray-400" key={character.id}>{character.name}
//               </li>
//               <Image
//                 src={character.image}
//                 alt={character.name}
//                 width={200}
//                 height={200}
          
//                 />
//             </span>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }
