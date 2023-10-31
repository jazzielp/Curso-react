function EventsComponents() {
    function handleClick() {
        console.log('Click 2')
    }
    return (
        <div>
            <h1>Events</h1>
            <button onClick={() => console.log('Click')}>Click</button>
            <button onClick={handleClick}>Click 2</button>
        </div>
    )
}

export default EventsComponents