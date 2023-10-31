function SecondComponent() {
    const books = ['harry potter', 'the lord of the rings', 'the hobbit']
    return (
        <div className="secondComponent">
            <h1>Second Component</h1>
            <ul>
                {
                    books.map((book) => <li key='name'>{book}</li>)
                }
            </ul>
        </div>
    )
}

export default SecondComponent