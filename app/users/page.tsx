interface User {
  id: number,
  name: string
}
const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users' ,{cache: 'no-store'})
  const users: User[] = await res.json()

  return (
    <>
      <h1 className="bg-lime-500 hover:bg-lime-600 text-yellow-200 font-bold py-4 rounded-lg shadow-teal-400-600 pl-2">User Json Place Holder</h1>
      <p className="bg-lime-100 rounded-sm">{new Date().toLocaleTimeString()} creado {new Date().toLocaleDateString()} </p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage