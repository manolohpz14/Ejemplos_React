import { useState, useRef } from "react";
import PropTypes from "prop-types";

function Square({
  posicionX,
  posicionY,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  inputName,
  divref,
  divClicked,
}) {
  function handleClick(inputName) {
    console.log(inputName);
    console.log(divref.current);
    console.log(divref.current[inputName]);
    if (divref.current[inputName]) {
      divref.current[inputName].focus();
      divClicked.current = inputName;
    }
  }

  const estilo_cuadrado = {
    backgroundColor: "rgb(255, 0, 0)",
    borderRadius: "1rem",
    zIndex: 5,
    position: "absolute",
    top: `${posicionY}px`,
    left: `${posicionX}px`,
    width: "10rem",
    height: "10rem",
    transition: "all 0.3s linear",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={estilo_cuadrado}
      ref={(node) => (divref.current[inputName] = node)} 
      tabIndex="0"
      onClick={() => handleClick(inputName)}
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") {
          moveUp();
        }
        if (e.key === "ArrowDown") {
          moveDown();
        }
        if (e.key === "ArrowLeft") {
          moveLeft();
        }
        if (e.key === "ArrowRight") {
          moveRight();
        }
      }}
    >
      {inputName}
    </div>
  );
}

Square.propTypes = {
  posicionX: PropTypes.number.isRequired,
  posicionY: PropTypes.number.isRequired,
  inputName: PropTypes.string.isRequired,
  divref: PropTypes.object.isRequired,
  divClicked: PropTypes.object.isRequired,
  moveDown: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveLeft: PropTypes.func.isRequired,
  moveRight: PropTypes.func.isRequired
};

export default function Practica15() {
  const [positionX, setPositionX] = useState({});
  const [positionY, setPositionY] = useState({});
  const [enabled, setEnabled] = useState(false);
  const [created, setCreated] = useState(false);
  const divClicked = useRef("");
  const divref = useRef({});
  const inputref = useRef(null);

  function animationHandler() {
    setEnabled(!enabled);

   
    for (let clave of Object.keys(divref.current)) {
      if (enabled) {
        divref.current[clave].style.width = "10rem";
        divref.current[clave].style.height = "10rem";
      } else {
        divref.current[clave].style.width = "0rem";
        divref.current[clave].style.height = "0rem";
      }
    }
  }

  function creationHandler() {
    setCreated(!created); 
    const newKey = inputref.current.value;
    if (created === false && newKey && !positionX[newKey]) {
      
      setPositionX((prev) => ({ ...prev, [newKey]: 0 }));
      setPositionY((prev) => ({ ...prev, [newKey]: 0 }));
    }
  }

  function moveRight() {
    if (divClicked.current) {
      setPositionX((prev) => ({
        ...prev,
        [divClicked.current]: prev[divClicked.current] + 50,
      }));
    }
  }

  function moveLeft() {
    if (divClicked.current) {
      setPositionX((prev) => ({
        ...prev,
        [divClicked.current]: prev[divClicked.current] - 50,
      }));
    }
  }

  function moveDown() {
    if (divClicked.current) {
      setPositionY((prev) => ({
        ...prev,
        [divClicked.current]: prev[divClicked.current] + 50,
      }));
    }
  }

  function moveUp() {
    if (divClicked.current) {
      setPositionY((prev) => ({
        ...prev,
        [divClicked.current]: prev[divClicked.current] - 50,
      }));
    }
  }

  const estilo_div = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "99vw",
    height: "100vh",
    outline: "none",
    position: "relative",
  };

  const estilo_input = {
    borderRadius: "1rem",
    padding: "1rem",
    marginTop: "1rem",
    border: "1px solid black",
  };

  const estilo_boton = {
    marginTop: "1rem",
    backgroundColor: "black",
    color: "white",
    padding: "2rem",
    margin: "1rem",
  };

  const estilo_boton_flechas = {
    backgroundColor: "rgb(38, 134, 252)",
    color: "white",
    padding: "2rem",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const estilo_div_grid = {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(3,4rem)",
    gridTemplateRows: "repeat(2,4rem)",
    gap: "2rem",
  };

  return (
    <div style={estilo_div}>
      {Object.keys(positionX).map((clave) => (
        <Square
          key={clave}
          posicionX={positionX[clave]}
          posicionY={positionY[clave]}
          inputName={clave}
          divref={divref}
          divClicked={divClicked}
          moveUp={moveUp}
          moveDown={moveDown}
          moveLeft={moveLeft}
          moveRight={moveRight}
          enabled={enabled}
         
        >


          </Square>
      ))}

      {!created && <h2>Ponle un nombre a tu cuadrado</h2>}
      {!created && (
        <input
          style={estilo_input}
          placeholder="Ponle nombre a tu cuadrado"
          ref={inputref}
        />
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={estilo_boton} onClick={animationHandler}>
          {!enabled ? "Desactivar animación" : "Animar"}
        </button>
        <button style={estilo_boton} onClick={creationHandler}>
          {created ? "Ir al menu de creacion" : "Crear"}
        </button>
      </div>

      <div style={estilo_div_grid}>
        <div></div>

        <button style={estilo_boton_flechas} onClick={moveUp}>
          Arriba
        </button>

        <div></div>

        <button style={estilo_boton_flechas} onClick={moveLeft}>
          Izq
        </button>

        <button style={estilo_boton_flechas} onClick={moveDown}>
          Abajo
        </button>

        <button style={estilo_boton_flechas} onClick={moveRight}>
          Derecha
        </button>
      </div>
    </div>
  );
}
