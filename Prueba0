/**
* EJERCICIO: Modificar un componente clase, replicando su comportamiento con un componente funcional
*/

import React from 'react';
import PropTypes from 'prop-types';

const Clock = () => {
  return(
    <div>
        <div>
          <h2>
          Hora Actual:
          {/*this.state.fecha.toLocaleTimeString()*/}
          { PropTypes.fecha }
          </h2>
          <h3>{PropTypes.nombre} {PropTypes.apellidos}</h3>
          <h1>Edad: {PropTypes.edad}</h1>
         </div>
    </div>
  );

    PropTypes.state = {
      fecha: new Date(),
      nombre: 'Alejandro',
      apellidos: 'Castro',
      edad: 24
    }

}

  componentDidMount(){
    state.timerID = setInterval (
      () => this.tick(), 1000
    );
  }
  componentWillUnmount() {
    clearInterval (state.timerID);
  }

export default Clock;
