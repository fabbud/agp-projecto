import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import './Homepage.css';
import avezinhaFoto from '../../assets/images/Homepage/FotoAvezinha.jpg';
import aventuraFoto from '../../assets/images/Homepage/FotoAventura.jpg';
import caravelaFoto from '../../assets/images/Homepage/FotoCaravela.jpg';
import moinhoFoto from '../../assets/images/Homepage/FotoMoinho.jpg';
import avezinhaLogo from '../../assets/images/Homepage/avezinha_white-8.png';
import aventuraLogo from '../../assets/images/Homepage/aventura_white-8.png';
import caravelaLogo from '../../assets/images/Homepage/caravela_white-8.png';
import moinhoLogo from '../../assets/images/Homepage/moinho_white-8.png';
import videoTeaser from '../../assets/videos/teaser_v_site.mp4';

const Homepage = (props) => {
  const { t } = useTranslation();
  const [showNoticias, setShowNoticias] = useState(false);

  const noticiasSection = [
    {
      id: 1,
      title: t('homepage.tituloNoticia1'),
      text: t('homepage.textoNoticia1'),
    },
    {
      id: 2,
      title: t('homepage.tituloNoticia2'),
      text: t('homepage.textoNoticia2'),
    },
    {
      id: 3,
      title: t('homepage.tituloNoticia3'),
      text: t('homepage.textoNoticia3'),
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const numberNews = noticiasSection.length;
    if (numberNews !== 0) {
      setShowNoticias(true);
    }
  }, []);

  const openNoticia = (event) => {
    const newsId = event.target.id;
    props.history.push({ pathname: `/publicações/noticias/${newsId}` });
  };

  return (
    <div className="Homepage">
      {/* VIDEO */}
      <div className="home-video">
        <video controls controlsList="nodownload" autoPlay loop muted width="100%" height="100%">
          <source src={videoTeaser} type="video/mp4" />
        </video>
      </div>

      {/* MODELO */}
      <div className="home-ramos">
        <div className="home-modelo-title">{t('homepage.tituloModeloPedagogico')}</div>
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

      {/* SECÇÃO PAIS E JORNAL */}
      <div className="home-section-palavras">
        <div className="home-section-side">
          <div className="home-section-center">
            <div className="home-section-title">{t('homepage.tituloPalavraPais')}</div>
            <div className="home-section-subtitle">{t('homepage.subtituloPalavraPais')}</div>
            <div className="home-section-text">{t('homepage.textoPalavraPais')}</div>
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
            <div className="home-section-title">{ReactHtmlParser(t('homepage.tituloOjornal'))}</div>
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

      {/* NOTICIAS */}
      { showNoticias
        ? (
          <div className="home-noticias">
            {noticiasSection.map((noticia) => (
              <div className="home-noticia-card">
                <div className="home-noticia-title">{noticia.title}</div>
                <div className="home-noticia-text">{noticia.text}</div>
                <button type="submit" id={noticia.id} className="home-button" onClick={openNoticia}>{t('buttons.lerMais')}</button>
              </div>
            ))}
          </div>
        ) : ''}
    </div>
  );
};

Homepage.propTypes = {
  history: PropTypes.string.isRequired,
};


export default Homepage;
