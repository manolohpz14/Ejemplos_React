import './App.css'
import { useState } from 'react';

// Componente de formulario con useState
function Signup() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setInputValue('');
    setInputValue2('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <div>
          <label style={{ padding: '0.5rem' }} htmlFor="username">
            Nombre:
          </label>
          <input
            style={{ padding: '0.2rem', textAlign: 'center' }}
            id="username"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Introduce tu nombre"
            disabled={isSubmitting} 
          />
        </div>

        <div style={{ marginTop: '0.2rem' }}>
          <label style={{ padding: '0.5rem' }} htmlFor="lastname">
            Apellido:
          </label>
          <input
            style={{ padding: '0.2rem', textAlign: 'center' }}
            id="lastname"
            type="text"
            value={inputValue2}
            onChange={handleInputChange2}
            placeholder="Introduce tu apellido"
            disabled={isSubmitting}
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <button style={{ fontSize: '0.8rem' }} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviado' : 'Enviar'}
          </button>
        </div>
        <p>Valor introducido: {inputValue}</p>
        <p>Segundo valor introducido: {inputValue2}</p>
      </div>
    </form>
  );
}

export { Signup };
