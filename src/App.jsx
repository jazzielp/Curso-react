import './App.css'
import MyComponent from './MyComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import EventsComponents from './EventsComponents'

function App() {

  return (
    <>
      <h1>Hola mundo</h1>
      <MyComponent />
      <SecondComponent />
      <ThirdComponent  lastName='Puente'/>
      <EventsComponents />
    </>
  )
}

export default App
