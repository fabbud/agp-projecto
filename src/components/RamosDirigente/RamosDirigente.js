import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './RamosDirigente.css';
import avezinhaBanner from '../../assets/images/RamosDirigente/Banner_RamoAvezinha.png';
import aventuraBanner from '../../assets/images/RamosDirigente/Banner_RamoAventura.png';
import caravelaBanner from '../../assets/images/RamosDirigente/Banner_RamoCaravela.png';
import dirigenteBanner from '../../assets/images/RamosDirigente/Banner_Dirigente.png';
import moinhoBanner from '../../assets/images/RamosDirigente/Banner_Dirigente.png';

const banner = require('../../assets/images/RamosDirigente/Banner_RamoAvezinha.png');

function RamosDirigente(props) {
  const { t } = useTranslation();
  const [branchName, setBranchName] = useState('avezinha');
  const [branchBanner, setBranchBanner] = useState(avezinhaBanner);
  const [buttonBorder, setButtonBorder] = useState('blue-border');

  useEffect(() => {
    window.scrollTo(0, 0);
    const { match } = props;
    const getBranch = match.params.tipo;
    console.log("update", getBranch);

    if (getBranch !== 'avezinha') {
      setButtonBorder('white-border');
      setBranchName(getBranch);
    }

    if (getBranch === 'aventura') {
      setBranchBanner(aventuraBanner);
    } else if (getBranch === 'moinho') {
      setBranchBanner(moinhoBanner);
    } else if (getBranch === 'caravela') {
      setBranchBanner(caravelaBanner);
    }

    console.log(branchName);
    console.log(branchBanner);
  }, [branchName, buttonBorder, branchBanner]);

  useEffect(() => {
    console.log("render", branchName);
  });

  useEffect(() => {
    console.log("mount", branchName);
  }, []);

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
        <div className="ramos-text">{ReactHtmlParser(t(`pedagogia.${branchName}.text`))}</div>
        <div className="ramos-buttons-section">
          <div>
            <Link to="/palavra-pais"><button type="submit" className={`ramos-button ${branchName} ${buttonBorder}`}>Palavra aos Pais</button></Link>
          </div>
          <div>
            <Link to="/contactos"><button type="submit" className={`ramos-button ${branchName} ${buttonBorder}`}>Queres ser Guia ?</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

RamosDirigente.propTypes = {
  match: PropTypes.string.isRequired,
};

export default RamosDirigente;
