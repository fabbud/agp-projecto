import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Contactos.css';
import SedeNacional from './SedeNacional';
import QueresSerGuia from './QueresSerGuia';

const Contactos = (props) => {
  const [showSedeNacional, setShowSedeNacional] = useState(false);
  const { match } = props;
  const mode = match.params.modo;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (mode !== 'sede') {
      setShowSedeNacional(false);
    } else {
      setShowSedeNacional(true);
    }
  }, [showSedeNacional, mode]);

  return (
    <div className="Contactos">
      { showSedeNacional ? <SedeNacional /> : ''}
      <QueresSerGuia />
    </div>
  );
};

Contactos.propTypes = {
  match: PropTypes.string.isRequired,
};

export default Contactos;
