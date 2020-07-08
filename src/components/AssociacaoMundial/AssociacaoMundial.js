import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './AssociacaoMundial.css';
import worldGuidesLogo from '../../assets/images/AssociacaoMundial/WAGGGS_official_logo_BLUE_ENG.jpg';
import worldMap from '../../assets/images/AssociacaoMundial/mapawagggs.png';
import worldPenny from '../../assets/images/AssociacaoMundial/tostao_mundial2.png';
import worldThought from '../../assets/images/AssociacaoMundial/Dia_mundial_pensaento2.png';

const AssociacaoMundial = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="AssociacaoMundial">
      <div className="world-girls-banner" />
      <div className="world-association">
        <img className="world-logo" src={worldGuidesLogo} alt="World Association Logo" />
        <p className="world-text">
          {t('associacaoMundial.introRegiaoText')}
          <a href="https://www.wagggs.org/en/our-world/africa/" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.regiaoAfrica')}</a>
          ,&nbsp;
          <a href="https://www.wagggs.org/en/our-world/arab-region/" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.regiaoArabe')}</a>
          ,&nbsp;
          <a href="https://www.wagggs.org/en/our-world/asia-pacific-region/" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.regiaoAsia')}</a>
          ,&nbsp;
          <a href="https://www.wagggs.org/en/our-world/western-hemisphere/" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.regiaoOcidental')}</a>
          &nbsp;
          {t('associacaoMundial.regiaoE')}
          &nbsp;
          <a href="https://www.wagggs.org/en/our-world/europe-region/" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.regiaoEuropa')}</a>
          <span>.</span>
        </p>
      </div>
      <div className="voice-sentence">
        {t('associacaoMundial.fraseVoz')}
      </div>
      <div className="world-objectives">
        <div className="objectives-side">
          <div className="objectives-title">{t('associacaoMundial.objetivosTitulo')}</div>
          <ul className="objectives-text">
            <li>{t('associacaoMundial.objetivosLista1')}</li>
            <li>{t('associacaoMundial.objetivosLista2')}</li>
            <li>{t('associacaoMundial.objetivosLista3')}</li>
          </ul>
        </div>
        <div className="objectives-side">
          <div className="objectives-title">{t('associacaoMundial.papelDecisivoTitulo')}</div>
          <ul className="objectives-text">
            <li>{t('associacaoMundial.papelDecisivoLista1')}</li>
            <li>{t('associacaoMundial.papelDecisivoLista2')}</li>
            <li>{t('associacaoMundial.papelDecisivoLista3')}</li>
            <li>{t('associacaoMundial.papelDecisivoLista4')}</li>
            <li>{t('associacaoMundial.papelDecisivoLista5')}</li>
          </ul>
        </div>
      </div>
      <div className="centers">
        <div className="centers-side">
          <div className="centers-left">
            <div className="centers-title">{t('associacaoMundial.centrosMundiaisTitulo')}</div>
            <div className="centers-text">{t('associacaoMundial.centrosMundiaisTexto')}</div>
            <ul>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/sangam/" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.centrosIndia')}</a></li>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/our-chalet" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.centrosSuiça')}</a></li>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/pax-lodge/" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.centrosUK')}</a></li>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/our-cabana/" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.centrosMexico')}</a></li>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/kusafiri/" target="_blank" rel="noopener noreferrer">{t('associacaoMundial.centrosAfrica')}</a></li>
            </ul>
          </div>
        </div>
        <div className="centers-side">
          <img className="world-centers" src={worldMap} alt="World Association Map" />
        </div>
      </div>
      <div className="thought-section">
        <div className="left-section">
          <div className="clover-section">
            <img className="clover" src={worldThought} alt="World Thought" />
          </div>
          <div>
            <div className="penny-title">{t('associacaoMundial.diaPensamentoTitulo')}</div>
            <div className="penny-text">
              <p>{ReactHtmlParser(t('associacaoMundial.pensamentoTexto1'))}</p>
              <p>{ReactHtmlParser(t('associacaoMundial.pensamentoTexto2'))}</p>
              <p>{ReactHtmlParser(t('associacaoMundial.pensamentoTexto3'))}</p>
              <p>{ReactHtmlParser(t('associacaoMundial.pensamentoTexto4'))}</p>
              <p>
                {ReactHtmlParser(t('associacaoMundial.pensamentoTexto5'))}
                <a href="https://www.worldthinkingday.org" target="_blank" rel="noopener noreferrer">
                  {ReactHtmlParser(t('associacaoMundial.pensamentoTexto6'))}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="piggy-section">
            <img className="piggy" src={worldPenny} alt="World Penny" />
          </div>
          <div>
            <div className="penny-title">{t('associacaoMundial.tostaoMundialTitulo')}</div>
            <div className="penny-text">
              <p>{ReactHtmlParser(t('associacaoMundial.tostaoTexto1'))}</p>
              <p>
                {ReactHtmlParser(t('associacaoMundial.tostaoTexto2'))}
                <a href="https://www.wagggs.org/en/what-we-do/world-thinking-day/world-thinking-day-fund/" target="_blank" rel="noopener noreferrer">
                  {ReactHtmlParser(t('associacaoMundial.tostaoTexto3'))}
                </a>
                {ReactHtmlParser(t('associacaoMundial.tostaoTexto4'))}
              </p>
              <p>{ReactHtmlParser(t('associacaoMundial.tostaoTexto5'))}</p>
              <p>{ReactHtmlParser(t('associacaoMundial.tostaoTexto6'))}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="associacao-button-section">
        <Link to="/contactos/formulário"><button type="submit" className="ser-guia-button associacao-button">{t('buttons.queresSerGuia')}</button></Link>
      </div>
    </div>
  );
};

export default AssociacaoMundial;
