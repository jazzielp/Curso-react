const user = {
  nombre: '',
  apellido: '',
  edad: '',
  genero: '',
  biografia: ''
}

function FormComponent() {
  const getData = (e) => {
    e.preventDefault()
    const datos = e.target
    user.nombre = datos.nombre.value
    user.apellido = datos.apellido.value
    user.edad = datos.edad.value
    user.genero = datos.genero.value
    user.biografia = datos.biografia.value
    console.log(user)
  }
  
  return (
    <div>
      <h1>Form Component</h1>
      <form action="" onSubmit={getData}>
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="text" name="apellido" placeholder="Apellido" />
        <input type="text" name="edad" placeholder="Edad" />
        <select id="" name="genero">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea name="biografia" id="" cols="30" rows="10" placeholder="Biografia">
        </textarea>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default FormComponent