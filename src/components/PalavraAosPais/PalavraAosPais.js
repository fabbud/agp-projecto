import React from 'react';
import './PalavraAosPais.css';
import missaoBanner from '../../assets/images/PalavraAosPais/missaobanner.jpg';
import ajudamos from '../../assets/images/PalavraAosPais/Ajudamos.jpg';
import ritmo from '../../assets/images/PalavraAosPais/Ritmo.jpg';

const PalavraAosPais = () => {
  return (
    <div className="PalavraAosPais">
      <img className="missaoBanner" src={missaoBanner} alt="Missao Banner" />
      <p className="FilhaGuia">Ter uma filha nas Guias, porque sim?</p>
      <p className="FilhaGuiatext">
        Nas Guias ajudamos as crianças e jovens raparigas a desenvolverem
        {' '}
        <br />
        {' '}
        plenamente o seu potencial como cidadãs universais responsáveis.
      </p>
      <div className="Ajudamos">
        <div className="AjudamosImage">
          <img className="AjudamosImg" src={ajudamos} alt="Ajudamos, não fazemos por elas" />
        </div>
        <div className="AjudamosText">
          <h2 className="AjudamosTextH2">
            <strong> Ajudamos, não o fazemos por elas.</strong>
          </h2>
          <p className="AjudamosTextP">
            Nas Guias aprendemos fazendo. Isto quer dizer que a rapariga faz coisas por ela própria,
            e para si, não ficando apenas a ouvir alguém ou a
            observar passivamente como se faz uma coisa. Fazer algo significa aprender mais depressa
            e melhor, uma vez que a experiência é pessoal e não em ‘segunda mão’.
            <br />
            <br />
            Aprender fazendo fomenta a iniciativa própria e a criatividade, dado que permite à Guia tentar algo diferente
            de fazer as coisas.
            Aprender fazendo permite que ela cometa erros num ambiente seguro, e, se as atividades forem repetidas, demonstrar progressos numa competência, que a encorajarão a tentar ir mais além.
          </p>
        </div>
      </div>
      <div className="Ritmo">
        <div className="RitmoImage">
          <img className="RitmoImg" src={ritmo} alt="Plenamente, mas ao seu próprio ritmo." />
        </div>
        <div className="RitmoText">
          <h2 className="RitmoTextH2">
            <strong> Ajudamos, não o fazemos por elas.</strong>
          </h2>
          <p className="RitmoTextP">
            Nas Guias apresentamos direções possíveis e áreas a explorar, mas é a Guia que escolhe a sua rota, que percorre de acordo com o seu passo, selecionando atividades, experimentando automotivação e liberdade de escolha.
            Desta forma, progride individualmente aprendendo também a interagir com êxito como parte de um grupo, desenvolvendo a sua imaginação e criatividade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PalavraAosPais;
