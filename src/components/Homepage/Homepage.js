import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import avezinhaFoto from '../../assets/images/Homepage/FotoAvezinha.jpg';
import aventuraFoto from '../../assets/images/Homepage/FotoAventura.jpg';
import caravelaFoto from '../../assets/images/Homepage/FotoCaravela.jpg';
import moinhoFoto from '../../assets/images/Homepage/FotoMoinho.jpg';
import avezinhaLogo from '../../assets/images/Homepage/LogoAvezinha.png';
import aventuraLogo from '../../assets/images/Homepage/LogoAventura.png';
import caravelaLogo from '../../assets/images/Homepage/LogoCaravela.png';
// import moinhoLogo from '../../assets/images/Homepage/LogoMoinho.png';

const Homepage = () => {

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
                <div className="home-ramos-card-info home-ramos-card-back" />
                <div className="home-ramos-card-info home-ramos-card-text">
                  <img src={avezinhaLogo} className="home-ramos-card-logo" alt="Ramo Avezinha Simbolo" />
                  <div>Ramo Avezinha</div>
                  <div>6 aos 10 anos</div>
                </div>
              </div>
            </Link>
            <Link to="/pedagogia/ramos/avezinha">
              <div className="home-ramos-card">
                <img src={aventuraFoto} className="home-ramos-img" alt="Ramo Aventura" />
              </div>
            </Link>
            <Link to="/pedagogia/ramos/avezinha">
              <div className="home-ramos-card">
                <img src={caravelaFoto} className="home-ramos-img" alt="Ramo Caravela" />
              </div>
            </Link>
            <Link to="/pedagogia/ramos/avezinha">
              <div className="home-ramos-card">
                <img src={moinhoFoto} className="home-ramos-img" alt="Ramo Moinho" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          <div>
            <div>Palavra aos pais</div>
            <div>Ter uma filha nas Guias</div>
            <div>
              Nas Guias ajudamos as crianças e jovens a desenvolverem plenamente o seu potencial
              como cidadãs universais responsáveis...
            </div>
            <button type="submit">Ler mais</button>
          </div>
          <div>Foto</div>
        </div>
        <div>
          <div>Foto</div>
          <div>
            <div>Jornal &quot;O Trevo&quot;</div>
            <div>&quot;Eu e o Outro: despertar para uma relação positiva&quot;</div>
            <div>Jornal Oficial da Associação </div>
            <div>O Trevo - 2020 - 27ª Edição</div>
            <button type="submit">Ler mais</button>
          </div>
        </div>
      </div> */}
      <div className="home-noticias">
        <div className="home-noticia-card">
          <div className="home-noticia-title">Noticia 1</div>
          <div className="home-noticia-text">Texto 1</div>
          <button type="submit" className="home-button">Ler mais</button>
        </div>
        <div className="home-noticia-card">
          <div className="home-noticia-title">Noticia 2</div>
          <div className="home-noticia-text">Texto 2</div>
          <button type="submit" className="home-button">Ler mais</button>
        </div>
        <div className="home-noticia-card">
          <div className="home-noticia-title">Noticia 3</div>
          <div className="home-noticia-text">Texto 3</div>
          <button type="submit" className="home-button">Ler mais</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
