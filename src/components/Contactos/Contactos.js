import React from 'react';
import './Contactos.css';
import SedeNacional from './SedeNacional';
import QueresSerGuia from './QueresSerGuia';

const Contactos = () => {
  return (
    <div className="Contactos">
      <SedeNacional />
      <QueresSerGuia />
    </div>
  );
};

export default Contactos;
