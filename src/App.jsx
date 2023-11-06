import './App.css'
import MyComponent from './MyComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import EventsComponents from './EventsComponents'
import StateComponent from './StateComponent'
import MyUseEfect from './MyUseEfect'
import AjaxCompnent from './AjaxCompnent'
import FormComponent from './FormComponent'

function App() {

  return (
    <>
      <h1>Hola mundo</h1>
      <MyComponent />
      <SecondComponent />
      <ThirdComponent  lastName='Puente'/>
      <EventsComponents />
      <StateComponent />
      <MyUseEfect />
      <AjaxCompnent />
      <FormComponent />
    </>
  )
}

export default App
