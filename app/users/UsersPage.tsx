
export const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
    {cache: 'no-cache'});
    const users: User[] = await res.json();

    return (
        <>
            <h1 >User Json Place Holder</h1>
            <ul>
                {users.map(humano => <li key={humano.id}>{humano.name}</li>)}
            </ul>
        </>
    );
};
