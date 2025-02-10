import { useState, useRef } from "react"

export default function Practica13 (){
  const [positionX, setPositionX]= useState(0)
  const [positionY, setPositionY]= useState(0)
  const [enabled, setEnabled]= useState(false)
  const [text, setText]= useState("")
  const divref= useRef(null)
  const inputref= useRef(null)




  function animationHandler () {
    setEnabled(!enabled)

    if (!enabled){
      divref.current.style.width="10rem"
      divref.current.style.height="10rem"
      setText(inputref.current.value)

    }
    else {
      divref.current.style.width="0rem"
      divref.current.style.height="0rem"
      setText("")

    }

  }


  function moveRight (){
    setPositionX(position=>position + 50)

  }

  
  function moveLeft (){

    setPositionX(position=>position - 50)
    
  }

  
  function moveDown (){
    setPositionY(position=>position + 50)
    
  }

  
  function moveUp (){
    setPositionY(position=>position - 50)
    
  }

  // function handleTextChange (e) {
  //   setText(e.target.value)
  // }





  const estilo_div={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    width:"99vw"
  }

  const estilo_cuadrado={
    backgroundColor:"rgb(255, 0, 0)",
    // minHeight:"10rem",
    // minWidth:"10rem",
    borderRadius:"1rem",
    zIndex:-5,
    position:"absolute",
    top:`${positionY}px`,
    left:`${positionX}px`,
    width:"0px",
    height: "0px",
    transition:"all 0.3s linear",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }

  const estilo_input={
    borderRadius:"1rem",
    padding:"1rem",
    marginTop:"1rem",
    border:"1px solid black"
  }

  const estilo_boton={
    marginTop:"1rem",
    backgroundColor:"black",
    color:"white",
    padding: "2rem",
    maringTop: "1rem"
  }


  const estilo_boton_flechas={
    backgroundColor:"rgb(38, 134, 252)",
    color:"white",
    padding: "2rem",
    maringTop: "1rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }

  const estilo_div_grid={
    marginTop:"2rem",
    display:"grid",
    gridTemplateColumns:"repeat(3,4rem)",
    gridTemplateRows:"repeat(2,4rem)",
    gap:"2rem"
  }


  return  (


    <div style={estilo_div}>

      
      <div style={estilo_cuadrado}
      ref={divref}>
      {text}

      </div>

      {!enabled && 
      <h2>Ponle un nombre a tu cuadrado</h2>}


      {!enabled && 
      <input style={estilo_input}
      placeholder="Ponle nombre a tu cuadrado"
      ref={inputref}
      />}


      <button style={estilo_boton}
      onClick={animationHandler}>
        {enabled ? "Desactivar animación" : "Animar"}
      </button>

      <div style={estilo_div_grid}>
        <div></div>

        <button style={estilo_boton_flechas}
         onClick={moveUp}>
          Arriba

        </button >


        <div></div>


        <button style={estilo_boton_flechas}
        onClick={moveLeft}>
          Izq

        </button>


        <button style={estilo_boton_flechas}
        onClick={moveDown}>
          Abajo

        </button>


        <button style={estilo_boton_flechas}
        onClick={moveRight}>
          Derecha
        </button>
        
      </div>




    </div>
  )
}