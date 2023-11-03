import { useState, useEffect } from 'react'
function MyUseEfect() {
    const [user, setUser] = useState('jazziel')
    useEffect(() => {
        console.log('useEffect')
    }, [])
    return (
        <div>
            <h1>MyUseEfect</h1>
            <p>{user}</p>
            <input type="text" onChange={event => setUser(event.target.value)} />
        </div>
    )
}

export default MyUseEfect;