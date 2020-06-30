import React from 'react';
import { useTranslation } from 'react-i18next';
import './SedeNacional.css';
import sedeIcon from '../../assets/images/Contactos/casa1.png';
import arrobaIcon from '../../assets/images/Contactos/arroba1.png';
import relogioIcon from '../../assets/images/Contactos/relogio1.png';

const SedeNacional = () => {
  const { t } = useTranslation();

  return (
    <div className="SedeNacional">
      <div className="sede-section">
        <div className="sede-icon">
          <img className="contactos-icon" src={sedeIcon} alt="Sede Icon" />
        </div>
        <div className="sede-text">
          <div className="contactos-title">{t('contactos.sedeNacionalTitulo')}</div>
          <div className="contactos-text">
            <div className="sede-margin">
              <div className="sede-text-bold">{t('contactos.morada1')}</div>
              <div className="sede-text-bold">{t('contactos.morada2')}</div>
              <div className="sede-text-bold">{t('contactos.morada3')}</div>
            </div>
            <div>{t('contactos.telefone')}</div>
            <div><u>{t('contactos.email')}</u></div>
          </div>
        </div>
      </div>
      <div className="sede-section">
        <div className="sede-icon">
          <img className="contactos-icon" src={relogioIcon} alt="Sede Icon" />
        </div>
        <div className="sede-text">
          <div className="contactos-title">{t('contactos.horariosTitulo')}</div>
          <div className="contactos-text">
            <div className="sede-title">{t('contactos.secretariadoTitulo')}</div>
            <div className="sede-margin">{t('contactos.secretariadoHorario')}</div>
            <div className="sede-title">{t('contactos.lojaTitulo')}</div>
            <div className="sede-margin">{t('contactos.lojaHorario')}</div>
          </div>
        </div>
      </div>
      <div className="sede-section">
        <div className="sede-icon">
          <img className="contactos-icon" src={arrobaIcon} alt="Sede Icon" />
        </div>
        <div className="sede-text">
          <div className="contactos-title">{t('contactos.outrosContactosTitulo')}</div>
          <div className="contactos-text">
            <div className="sede-title">{t('contactos.presidenteTitulo')}</div>
            <div className="sede-margin">{t('contactos.presidenteEmail')}</div>
            <div className="sede-title">{t('contactos.internationalTitulo')}</div>
            <div className="sede-margin">{t('contactos.internacionalEmail')}</div>
            <div className="sede-title">{t('contactos.publicacoesTitulo')}</div>
            <div className="sede-margin">{t('contactos.publicacoesEmail')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SedeNacional;
