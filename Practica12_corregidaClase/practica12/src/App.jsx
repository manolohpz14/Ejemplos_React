import { useReducer, useRef } from 'react';

function myReducer(state, action) {
  switch (action.type) {
    case "CAMBIAR_VALUE":
      return { ...state, value: action.payload };
    case "CAMBIAR_BACKGROUND":
      return { ...state, background_color: action.payload };
    case "CAMBIAR_WARNING":
      return { ...state, warning: action.payload };
    default:
      return state;
  }
}

export default function Practica7() {
  const [state, dispatch] = useReducer(myReducer, {
    value: '',
    background_color: "rgb(210, 210, 210)",
    warning: ""
  });

  const warning = useRef(0);

  function handleChange(event) {
    const value = event.target.value;
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";

    dispatch({ type: "CAMBIAR_BACKGROUND", payload: "rgb(231, 231, 231)" });
    dispatch({ type: "CAMBIAR_WARNING", payload: "" });
    dispatch({ type: "CAMBIAR_VALUE", payload: value });

    if (value.length > 100 && value.length <= 200) {
      dispatch({ type: "CAMBIAR_BACKGROUND", payload: "rgb(255, 255, 120)" });
    } else if (value.length > 200) {
      if (state.warning === "") {
        warning.current += 1;
      }
      dispatch({ type: "CAMBIAR_BACKGROUND", payload: "rgb(255, 94, 94)" });
      dispatch({ type: "CAMBIAR_WARNING", payload: "Has sobrepasado el límite de 200 caracteres" });
    }
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px',
      width: "100vw",
    },
    editor: {
      width: '50%',
      padding: '1rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgb(250, 250, 250)',
    },
    textarea: {
      width: '90%',
      minHeight: '8rem',
      padding: '1rem',
      borderRadius: '1rem',
      border: '1px solid rgb(210, 210, 210)',
      fontSize: '16px',
      lineHeight: '1.5',
      backgroundColor: state.background_color,
      transition: 'background-color 0.3s ease',
    },
    counter: {
      marginTop: '1rem',
      fontSize: '14px',
      color: 'rgb(234, 234, 234)',
      textAlign: 'right',
    },
    warning: {
      marginTop: '1rem',
      fontSize: '14px',
      color: 'rgb(255, 0, 0)',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.editor}>
        <h3>Ejemplo</h3>
        <textarea
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Escribe algo..."
        />
        <div style={styles.counter}>
          Caracteres: {state.value.length} / 200
        </div>
        {state.warning && (
          <div style={styles.warning}>
            {state.warning} (Advertencias en número: {warning.current})
          </div>
        )}
      </div>
    </div>
  );
}
