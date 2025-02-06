import { useState } from 'react';

// Componente de formulario con useState
function Signup_fetch() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);  // Para manejar errores
  const [message, setMessage] = useState('');  // Para mostrar el mensaje de la respuesta

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setMessage('');  // Limpiar el mensaje antes de enviar

    try {
      // Realizando el fetch al servidor
      const response = await fetch('https://mi-api.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: inputValue,
          lastname: inputValue2,
        }),
      });

      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Hubo un problema con el envío del formulario');
      }


      const data = await response.json();


      setMessage(data.message);  
      // Limpiar campos después del envío
      setInputValue('');
      setInputValue2('');

    } catch (error) {
      setError(error.message);  // Mostrar el error si ocurre
    } finally {
      setIsSubmitting(false);  // Finaliza el estado de envío
    }
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

        {/* Mostrar mensaje de éxito o error */}
        {message && <p style={{ color: 'green' }}>{message}</p>}  {/* Mostrar mensaje de éxito */}
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Mostrar mensaje de error */}

        <p>Valor introducido: {inputValue}</p>
        <p>Segundo valor introducido: {inputValue2}</p>
      </div>
    </form>
  );
}

export { Signup_fetch };
