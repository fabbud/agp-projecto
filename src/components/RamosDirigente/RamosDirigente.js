import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './RamosDirigente.css';
import avezinhaBanner from '../../assets/images/RamosDirigente/Banner_RamoAvezinha.png';
import aventuraBanner from '../../assets/images/RamosDirigente/Banner_RamoAventura.png';
import caravelaBanner from '../../assets/images/RamosDirigente/Banner_RamoCaravela.png';
import moinhoBanner from '../../assets/images/RamosDirigente/Banner_RamoMoinho.png';
import dirigenteBanner from '../../assets/images/RamosDirigente/Banner_Dirigente.png';

function RamosDirigente(props) {
  const { t } = useTranslation();
  const [branchName, setBranchName] = useState('');
  const [buttonBorder, setButtonBorder] = useState('');
  const [branchBanner, setBranchBanner] = useState('');

  const { match, location } = props;
  let getBranch = match.params.tipo;
  if (location.pathname.includes('dirigente')) {
    getBranch = 'dirigente';
  }

  // Define page to show
  const defineRamo = () => {
    if (getBranch !== branchName) {
      window.scrollTo(0, 0);
    }
    setBranchName(getBranch);
    if (getBranch === 'avezinha') {
      setButtonBorder('blue-border');
      setBranchBanner(`${avezinhaBanner}`);
    } else {
      setButtonBorder('white-border');
      if (getBranch === 'aventura') {
        setBranchBanner(`${aventuraBanner}`);
      } else if (getBranch === 'caravela') {
        setBranchBanner(`${caravelaBanner}`);
      } else if (getBranch === 'moinho') {
        setBranchBanner(`${moinhoBanner}`);
      } else if (getBranch === 'dirigente') {
        setBranchBanner(`${dirigenteBanner}`);
      }
    }
  };

  useEffect(() => {
    defineRamo();
  });

  return (
    <div className="RamosDirigente">
      <div className="ramos-banner">
        <div className={`ramos-photo ${branchName}-photo-1`} />
        <div className={`ramos-photo ${branchName}-photo-2`} />
        <div className={`ramos-photo ${branchName}-photo-3`} />
      </div>
      <div className="ramos-sentence">
        <img src={branchBanner} className="banner-sentence" alt="Frase do Ramo" />
      </div>
      <div className={`ramos-section ${branchName}`}>
        <div className="ramos-text">{ReactHtmlParser(t(`ramos.${branchName}.text`))}</div>
        <div className="ramos-buttons-section">
          { branchName !== 'dirigente'
            ? (
              <div>
                <Link to="/pedagogia/palavra-pais"><button type="submit" className={`ramos-button ${branchName} ${buttonBorder}`}>{t('buttons.palavraAosPais')}</button></Link>
              </div>
            )
            : ''}
          <div>
            <Link to="/contactos/formulário"><button type="submit" className={`ramos-button ${branchName} ${buttonBorder}`}>{t('buttons.queresSerGuia')}</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

RamosDirigente.propTypes = {
  match: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default RamosDirigente;
