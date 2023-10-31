function EventsComponents() {
    function handleClick() {
        console.log('Click 2')
    }
    return (
        <div>
            <h1>Events</h1>
            {/* Evento onClick con una función anonima */}
            <button onClick={() => console.log('Click')}>Click</button>
            {/* Evento onClick con una función declarada */}
            <button onClick={handleClick}>Click 2</button>
            {/* Evento onDobleClick con una función anonima */}
            <button onDoubleClick={() => console.log('doble click')}>Doble click</button>
        </div>
    )
}

export default EventsComponents