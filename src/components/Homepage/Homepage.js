import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Homepage.css';
import avezinhaFoto from '../../assets/images/Homepage/FotoAvezinha.jpg';
import aventuraFoto from '../../assets/images/Homepage/FotoAventura.jpg';
import caravelaFoto from '../../assets/images/Homepage/FotoCaravela.jpg';
import moinhoFoto from '../../assets/images/Homepage/FotoMoinho.jpg';
import avezinhaLogo from '../../assets/images/Homepage/avezinha_white-8.png';
import aventuraLogo from '../../assets/images/Homepage/aventura_white-8.png';
import caravelaLogo from '../../assets/images/Homepage/caravela_white-8.png';
import moinhoLogo from '../../assets/images/Homepage/moinho_white-8.png';
import homepageTeaser from '../../assets/videos/teaser_v_site.mp4';

const Homepage = (props) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [showNoticias, setShowNoticias] = useState(false);
  const [jornalData, setJornalData] = useState([]);
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get('/homepage/journal')
      .then((res) => {
        setJornalData(res.data[0]);
      });

    axios.get('/homepage/news')
      .then((res) => {
        setArticlesData(res.data);
        const newsLength = Object.keys(res.data).length;
        if (newsLength !== 0) {
          setShowNoticias(true);
        }
      });
  }, []);

  const openNoticia = (event) => {
    const newsId = event.target.id;
    props.history.push({ pathname: `/publicações/noticias/${newsId}` });
  };

  return (
    <div className="Homepage">
      {/* VIDEO */}
      <span className="home-video-section">
        <div className="home-video">
          <video controls controlsList="nodownload" autoPlay loop width="100%" height="100%">
            <source src={homepageTeaser} type="video/mp4" />
          </video>
        </div>
      </span>

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
            <div className="home-section-title">{ReactHtmlParser(t('homepage.tituloJornal'))}</div>
            <div className="home-section-subtitle">
              &quot;
              {jornalData[`${selectedLanguage}_title`]}
              &quot;
            </div>
            <div className="home-section-text">
              {t('homepage.infoJornal')}
              <br />
              O Trevo -
              {' '}
              {jornalData.edition}
              {t('homepage.edicaoJornal')}
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
            {articlesData.map((article) => (
              <div key={article.id} className="home-noticia-card">
                <div className="home-noticia-title">{article[`${selectedLanguage}_title`]}</div>
                <div className="home-noticia-text">{article[`${selectedLanguage}_intro_text`]}</div>
                <button type="submit" id={article.id} className="home-button" onClick={openNoticia}>{t('buttons.lerMais')}</button>
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

export default withRouter(Homepage);
