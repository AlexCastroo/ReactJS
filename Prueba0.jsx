/**
* EJERCICIO: Modificar un componente clase, replicando su comportamiento con un componente funcional
*/

import React, { useState, useEffect } from 'react';


const Clock = () => {
  {/* Generamos manualmente el estado del reloj */}
  const defaultState = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José',
  };

  // Creamos un useState para saber el estado del User
  const [user, setUser] = useState(defaultState);

  
  useEffect(() => {
    //intervalAge: Se ejecuta la funcion actualizaUSer() cada segundo.
    const intervalAge = setInterval(() => {
      actualiceUser();
    }, 1000);
    //Devuelve el intervalo eliminado clearInterval(intervalAge)
    return () => {
      clearInterval(intervalAge);
    };
  });

  //Funcion que nos actualizará el estado del usuario
  const actualiceUser = () => {
    return setUser({
      fecha: user.fecha,
      edad: user.edad + 1,
      nombre: user.nombre,
      apellidos: user.apellidos,
    });
  };
  return (
    <div>
      <h2>
        Hora Actual:
        {user.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>Edad: {user.edad}</h1>
    </div>
  );
};

export default Clock;
