import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import './RamosDirigente.css';
import avezinhaBanner from '../../assets/images/RamosDirigente/Banner_RamoAvezinha.png';
import aventuraBanner from '../../assets/images/RamosDirigente/Banner_RamoAventura.png';
import caravelaBanner from '../../assets/images/RamosDirigente/Banner_RamoCaravela.png';
import dirigenteBanner from '../../assets/images/RamosDirigente/Banner_Dirigente.png';
// import moinhoBanner from '../../assets/images/RamosDirigente/Banner_RamoMoinho.png'; - FALTA !!

function RamosDirigente() {
  const { t } = useTranslation();
  const [branchName, setBranchName] = useState('avezinha');
  const [branchBanner, setBranchBanner] = useState(avezinhaBanner);
  const [buttonBorder, setButtonBorder] = useState('blue-border');

  useEffect(() => {

    // Get branch name from the url and setBranchName/setBranchBanner

    if (branchName !== 'avezinha') {
      setButtonBorder('white-border');
    }
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
      <div className="ramos-sentence">
        <img src={branchBanner} className="banner-sentence" alt="Frase do Ramo" />
        <div></div>
      </div>
      <div className={`ramos-section ${branchName}`}>
        <div className="ramos-text">{ReactHtmlParser(t(`pedagogia.${branchName}.text`))}</div>
        <div className="ramos-buttons-section">
          <div>
            <button type="submit" className={`ramos-button ${branchName} ${buttonBorder}`}>Palavra aos Pais</button>
          </div>
          <div>
            <button type="submit" className={`ramos-button ${branchName} ${buttonBorder}`}>Queres ser Guia ?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RamosDirigente;
