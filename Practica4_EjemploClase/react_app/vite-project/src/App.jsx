//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Lista from './Lists.jsx'
//import PropTypes from 'prop-types';


function ComponenteDiv () {

  const mydivstyle={
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    width:"100vw",
    height:"100vh",
    zIndex: "9999"
  }


  return (
    <div style={mydivstyle}>

    </div>
  )
}


function AnimationP (obj) {

 const pstyle={
  fontWeight:"bold",
  animation: obj.status ? "goright 4s linear infinite" : false
 }

  return (
    <p style={pstyle}>
      {obj.texto ? obj.texto : "no me interesa nada"}
    </p>
  )

}


function Primeras_componentes_ejemplos() {

  const tarjetas={
    display:"flex",
    justifyContent:"center"
  }

  return (
    
    <>
        <ComponenteDiv/>
        <AnimationP
              status={true}
              texto="vamos a suspender todos mañana y hoy"
        />
        <AnimationP
              status={false}
        />
        <div style={tarjetas}>

        </div>
  </>
  )
}

export default Primeras_componentes_ejemplos
