import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hook,
  const [usuario, setUsuario] = useState('') //buenas practicas set, Estado para guardar el usuario//
  const [clave, setClave] = useState('')  // Estado para guardar la clave //
  const [logueado, setLogueado] = useState(false) // Estado para saber si el usuario esta logueado //}
  const [texto, setTexto] = useState('')
  const [voz, setVoz] = useState('')

  // Funcion para cambiar el valor del usuario /7
  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)

  }// Funcion para cambiar el valor de la clave //
  function cambiarClave(evento) {
    setClave(evento.target.value)

  // Función para ingresar al dar click en el botón 77  
  } 
  function ingresar() {
    console.log('Usuario:', usuario)
    console.log('Clave:', clave)
    if (usuario==='admin' && clave ==='admin') {
      alert("Datos correctos")
      setLogueado(true) 
    } else {
      alert("Datos incorrectos")
    }
    
  }

  function cambiarTexto(evento) {
    setTexto(evento.target.value)
    
  }

  function textoAVoz() {
    const configuracion = new SpeechSynthesisUtterance (texto) // Mozilla texto a voz//
    speechSynthesis.speak(configuracion)
  }

  function vozATexto() {
    const agente = new webkitSpeechRecognition()
    agente.start()
    agente.onresult =  resultado
  }

  function resultado(informacion) {
    console.log(informacion.results[0][0].transcript)
    setVoz(informacion.results[0][0].transcript)
    
  }
   
 return (
    <>
    {/* Condición para mostrar en pantalla el contenido */}
    {logueado ?  (<>
      <h1>Conversor TTS y STT</h1>
      <h2>Conversor texto a voz</h2>
      <input type="text" value={texto} onChange={cambiarTexto}  />
      <button onClick={textoAVoz}>Convertir</button>
      <h2>Conversor voz a texto</h2>
      <button onClick={vozATexto}
      >Grabar</button>
      {voz}
    </>) : (
      <>
      <h1>Inicio de sesión</h1>
      <label htmlFor="usuario">Usuario : 
      <input id='usuario' type="text" value={usuario} onChange={cambiarUsuario}/>
      </label> 
      <label htmlFor="clave">Clave : 
      <input id='clave'  type="password" value={clave} onChange={cambiarClave} />
      </label>
      <button type="submit" onClick={ingresar}>Ingresar</button>
       </>
    ) }
   </>
  )

}
export default App
