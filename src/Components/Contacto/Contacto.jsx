import React, { useState } from 'react';
import "./Contacto.css"

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className='Contacto'>
      <h2>Contacto de Hardware</h2>
      <p>¿Tienes preguntas sobre nuestros productos de hardware? Deja tus datos y nos pondremos en contacto contigo:</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;