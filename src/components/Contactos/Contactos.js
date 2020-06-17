import React, { useState, useEffect } from 'react';
import './Contactos.css';
import SedeNacional from './SedeNacional';
import QueresSerGuia from './QueresSerGuia';

const Contactos = () => {
  const [showSedeNacional, setShowSedeNacional] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Get click value from the url and showSedeNacional on/off
    const urlClick = 'sede';
    if (urlClick !== 'guia') {
      setShowSedeNacional(true);
    } else {
      setShowSedeNacional(false);
    }
  }, []);

  return (
    <div className="Contactos">
      { showSedeNacional ? <SedeNacional /> : ''}
      <QueresSerGuia />
    </div>
  );
};

export default Contactos;
