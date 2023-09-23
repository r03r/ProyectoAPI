'use client'
const products = [
  { title: "Col", isFruit: false, id: 1 },
  { title: "Ajo", isFruit: false, id: 2 },
  { title: "Manzana", isFruit: true, id: 3 },
  { title: "pear", isFruit: true, id: 4 },
  { title: "coliflor", isFruit: false, id: 5 },
  { title: "cerises", isFruit: true, id: 6 },
  { title: "Onion", isFruit: false, id: 7 },
];

export default function ShoppingList() {
  const productoss = products.map((product) => (
    <li className="hover:bg-gray-100 p-2 rounded-lg shadow-lg" 
    onClick={click}
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
      >
      {product.title}
    </li>
  ));
  
  function click() {
    
    alert("Shopping List");
  }
  return <ul className="bg-slate-700 p-2 rounded-lg shadow-lg"  >{productoss}</ul>;
}
