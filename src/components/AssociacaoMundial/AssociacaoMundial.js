import React, { useEffect } from 'react';
import './AssociacaoMundial.css';
import { Link } from 'react-router-dom';
import worldGuidesLogo from '../../assets/images/AssociacaoMundial/WAGGGS_official_logo_BLUE_ENG.jpg';
import worldMap from '../../assets/images/AssociacaoMundial/mapawagggs.png';
import worldPenny from '../../assets/images/AssociacaoMundial/tostao_mundial2.png';
import worldThought from '../../assets/images/AssociacaoMundial/Dia_mundial_pensaento2.png';

const AssociacaoMundial = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="AssociacaoMundial">
      <div className="world-girls-banner" />
      <div className="world-association">
        <img className="world-logo" src={worldGuidesLogo} alt="World Association Logo" />
        <p className="world-text">
          A WAGGGS – World Association of Girl Guides and Girl Scouts – é a maior organização
          mundial de raparigas e jovens mulheres voluntárias, da qual a AGP é membro.
          Atualmente, integra cerca de 10 milhões de jovens espalhadas por 150 países,
          estando dividida em cinco Regiões:
          <a href="https://www.wagggs.org/en/our-world/africa/" target="_blank" rel="noopener noreferrer"> África</a>
          ,&nbsp;
          <a href="https://www.wagggs.org/en/our-world/arab-region/" target="_blank" rel="noopener noreferrer"> Árabe</a>
          ,&nbsp;
          <a href="https://www.wagggs.org/en/our-world/asia-pacific-region/" target="_blank" rel="noopener noreferrer">Ásia-Pacífico</a>
          ,&nbsp;
          <a href="https://www.wagggs.org/en/our-world/western-hemisphere/" target="_blank" rel="noopener noreferrer">Hemisfério Ocidental</a>
          &nbsp; e &nbsp;
          <a href="https://www.wagggs.org/en/our-world/europe-region/" target="_blank" rel="noopener noreferrer">Europa</a>
          <span>.</span>
        </p>
      </div>
      <div className="voice-sentence">
        10 milhões de raparigas, 1 voz.
      </div>
      <div className="world-objectives">
        <div className="objectives-side">
          <div className="objectives-title">Objetivos da WAGGGS:</div>
          <ul className="objectives-text">
            <li>
              Capacitar as raparigas e jovens mulheres para promover mudanças
              positivas nas suas vidas, nas suas comunidades e países
            </li>
            <li>Ser a voz das raparigas no mundo</li>
            <li>Construir um mundo melhor</li>
          </ul>
        </div>
        <div className="objectives-side">
          <div className="objectives-title">Papel decisivo no desenvolvimento comunitário:</div>
          <ul className="objectives-text">
            <li>Participação nos programas promovidos pela ONU;</li>
            <li>Criação de projetos de educação</li>
            <li>Desenvolvimento de liderança</li>
            <li>Trabalho de advocacia</li>
            <li>Ação comunitária</li>
          </ul>
        </div>
      </div>
      <div className="centers">
        <div className="centers-side">
          <div className="centers-left">
            <div className="centers-title">Centros Mundiais</div>
            <div className="centers-text">
              Os cinco Centros Mundiais da WAGGGS oferecem a oportunidade de uma aventura
              internacional. Aqui, as Guias podem encontrar-se, experienciar um mundo de
              possibilidades em atividades e conhecer outras Guias de outros países,
              embarcando numa jornada de descoberta pessoal através da dimensão internacional.
            </div>
            <ul>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/sangam/" target="_blank" rel="noopener noreferrer">Sangam, Índia</a></li>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/our-chalet" target="_blank" rel="noopener noreferrer">Notre Chalet, Suíça</a></li>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/pax-lodge/" target="_blank" rel="noopener noreferrer">Pax Lodge, Reino Unido</a></li>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/our-cabana/" target="_blank" rel="noopener noreferrer">Nuestra Cabaña, México</a></li>
              <li><a href="https://www.wagggs.org/en/our-world/world-centres/kusafiri/" target="_blank" rel="noopener noreferrer">Kusafiri, em África</a></li>
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
            <div className="penny-title">Dia Mundial do Pensamento</div>
            <div className="penny-text">
              <p>
                “O 22 de fevereiro é um dia de festa, em que fazemos em pensamento
                a volta ao mundo.”
                Baden-Powell
              </p>
              <p>
                O dia 22 de fevereiro é um dia muito especial para todas as Guias do mundo.
                Intitulado
                <strong>‘Dia Mundial do Pensamento’</strong>
                ,é o dia em que todas as Guias se unem em pensamento,
                entre os 150 países onde está presente o Guidismo, para celebrar a amizade e os
                ideais que caracterizam o Movimento, assim como para comemorar o aniversário
                do fundador das Guias, Lord Baden-Powell (em 1857), e da Chefe Mundial, Lady
                Olave Baden-Powell (1889).
              </p>
              <p>
                Esta data, comemorada desde 1926 é ainda um momento para alertar para temas da
                atualidade, especialmente os que afetam as raparigas e jovens mulheres e para
                angariar fundos de apoio à ação da Associação Mundial das Guias (WAGGGS)
                em todo o mundo, em particular para projetos de capacitação das raparigas.
              </p>
              <p>
                É uma oportunidade para cada Guia celebrar a data e ser uma em 10 milhões,
                ser inspirada pela história e o impacto do Guidismo, conectar-se com as Guias
                pelo mundo, criar ações e despertar os outros para questões importantes e fazer
                a diferença, angariando fundos para projetos através do
                <strong>Tostão Mundial</strong>
                .
              </p>
              <p>
                Mais informações sobre o Dia Mundial do Pensamento&nbsp;
                <a href="https://www.worldthinkingday.org" target="_blank" rel="noopener noreferrer">aqui</a>
                &nbsp;.
              </p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="piggy-section">
            <img className="piggy" src={worldPenny} alt="World Penny" />
          </div>
          <div>
            <div className="penny-title">Tostão Mundial</div>
            <div className="penny-text">
              <p>“O 22 de Fevereiro é um dia em que se dá e se partilha.” Baden-Powell</p>
              <p>
                Em 1932, na 7ª Conferência Mundial na Polónia surgiu a ideia de cada Guia doar uma
                contribuição, para além do seu pensamento, como demonstração de amizade e apreço.
                Com o mote &quot;A penny for your thoughts&quot; (Um tostão pelos teus
                pensamentos) foi assim criado o Fundo do Dia do Pensamento,
                também designado por&nbsp;
                <a href="https://www.wagggs.org/en/what-we-do/world-thinking-day/world-thinking-day-fund/" target="_blank" rel="noopener noreferrer">Tostão Mundial</a>
                , com o objetivo de apoiar a promoção do Guidismo no mundo.
              </p>
              <p>
                Durante os primeiros anos, as quantias angariadas foram utilizadas nos países que
                sofriam os efeitos da Segunda Guerra Mundial e mais tarde para restabelecer as
                Associações Nacionais de Guias nos países devastados pela Guerra.
              </p>
              <p>
                Desde essa altura, o Fundo do Dia do Pensamento tem tornado possível a expansão do
                Movimento pelo mundo e tem sido ocasião para todas as Guias ajudarem outras Guias.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="associacao-button-section">
        <Link to="/contactos/formulário"><button type="submit" className="ser-guia-button associacao-button">Queres ser Guia ?</button></Link>
      </div>
    </div>
  );
};

export default AssociacaoMundial;
