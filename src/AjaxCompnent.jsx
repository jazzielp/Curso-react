import { useEffect, useState } from "react"

const URL = 'https://reqres.in/api/users?page=2'

const AjaxCompnent = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(response => setUsers(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>Ajax component</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.first_name}</li>
                ))}
            </ul>

        </div>
    )
}

export default AjaxCompnent
