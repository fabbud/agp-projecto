import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Homepage.css';
import avezinhaFoto from '../../assets/images/Homepage/FotoAvezinha.jpg';
import aventuraFoto from '../../assets/images/Homepage/FotoAventura.jpg';
import caravelaFoto from '../../assets/images/Homepage/FotoCaravela.jpg';
import moinhoFoto from '../../assets/images/Homepage/FotoMoinho.jpg';
import avezinhaLogo from '../../assets/images/Homepage/LogoAvezinha.png';
import aventuraLogo from '../../assets/images/Homepage/LogoAventura.png';
import caravelaLogo from '../../assets/images/Homepage/LogoCaravela.png';
import moinhoLogo from '../../assets/images/Homepage/LogoMoinho.png';


const Homepage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="Homepage">
      <div className="">
        <div className="home-video">Video</div>
        <div className="home-ramos">
          <div className="home-modelo-title">Modelo Pedagógico</div>
          <div className="home-ramos-section">
            <Link to="/pedagogia/ramos/avezinha">
              <div className="home-ramos-card">
                <img src={avezinhaFoto} className="home-ramos-img" alt="Ramo Avezinha" />
                <div className="home-ramos-card-info avezinha-card">
                  <img src={avezinhaLogo} className="home-ramos-card-logo" alt="Ramo Avezinha Símbolo" />
                  <div className="home-ramos-card-title">{t('homepage.tituloAvezinha')}</div>
                  <div className="home-ramos-card-text">{t('homepage.idadesAvezinha')}</div>
                </div>
              </div>
            </Link>
            <Link to="/pedagogia/ramos/aventura">
              <div className="home-ramos-card">
                <img src={aventuraFoto} className="home-ramos-img" alt="Ramo Aventura" />
                <div className="home-ramos-card-info aventura-card">
                  <img src={aventuraLogo} className="home-ramos-card-logo" alt="Ramo Aventura Símbolo" />
                  <div className="home-ramos-card-title">{t('homepage.tituloAventura')}</div>
                  <div className="home-ramos-card-text">{t('homepage.idadesAventura')}</div>
                </div>
              </div>
            </Link>
            <Link to="/pedagogia/ramos/caravela">
              <div className="home-ramos-card">
                <img src={caravelaFoto} className="home-ramos-img" alt="Ramo Caravela" />
                <div className="home-ramos-card-info caravela-card">
                  <img src={caravelaLogo} className="home-ramos-card-logo" alt="Ramo Caravela Símbolo" />
                  <div className="home-ramos-card-title">{t('homepage.tituloCaravela')}</div>
                  <div className="home-ramos-card-text">{t('homepage.idadesCaravela')}</div>
                </div>
              </div>
            </Link>
            <Link to="/pedagogia/ramos/moinho">
              <div className="home-ramos-card">
                <img src={moinhoFoto} className="home-ramos-img" alt="Ramo Moinho" />
                <div className="home-ramos-card-info moinho-card">
                  <img src={moinhoLogo} className="home-ramos-card-logo" alt="Ramo Moinho Símbolo" />
                  <div className="home-ramos-card-title">{t('homepage.tituloMoinho')}</div>
                  <div className="home-ramos-card-text">{t('homepage.idadesMoinho')}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-section-palavras">
        <div className="home-section-side">
          <div className="home-section-center">
            <div className="home-section-title">Palavra aos pais</div>
            <div className="home-section-subtitle">Ter uma Filha nas Guias, porque sim?</div>
            <div className="home-section-text">
              Nas Guias ajudamos as crianças e jovens a desenvolverem plenamente o seu potencial
              como cidadãs universais responsáveis...
            </div>
            <div>
              <Link to="/pedagogia/palavra-pais">
                <button type="submit" className="home-button">{t('buttons.lerMais')}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-section-side home-palavras-foto" />
      </div>
      <div className="home-section-jornal">
        <div className="home-section-side home-jornal-foto" />
        <div className="home-section-side">
          <div className="home-section-center">
            <div className="home-section-title">Jornal &quot;O Trevo&quot;</div>
            <div className="home-section-subtitle">&quot;Eu e o Outro: despertar para uma relação positiva&quot;</div>
            <div className="home-section-text">
              Jornal Oficial da Associação
              <br />
              O Trevo - 2020 - 27ª Edição
            </div>
            <div>
              <Link to="/">
                <button type="submit" className="home-button">{t('buttons.lerMais')}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="home-noticias">
        <div className="home-noticia-card">
          <div className="home-noticia-title">Noticia 1</div>
          <div className="home-noticia-text">Texto 1</div>
          <button type="submit" className="home-button">{t('buttons.lerMais')}</button>
        </div>
        <div className="home-noticia-card">
          <div className="home-noticia-title">Noticia 2</div>
          <div className="home-noticia-text">Texto 2</div>
          <button type="submit" className="home-button">{t('buttons.lerMais')}</button>
        </div>
        <div className="home-noticia-card">
          <div className="home-noticia-title">Noticia 3</div>
          <div className="home-noticia-text">Texto 3</div>
          <button type="submit" className="home-button">{t('buttons.lerMais')}</button>
        </div>
      </div> */}
    </div>
  );
};

export default Homepage;
