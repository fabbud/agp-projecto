import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import './FerramentasGuidista.css';

const FerramentasGuidista = (props) => {
  const { t } = useTranslation();
  const data = [
    {
      title: 'Compromisso',
      text: "<p>Cada Guia é convidada a afirmar o seu compromisso com o Guidismo, declarando voluntariamente aceitar e viver segundo os seus Princípios e fazer da Lei a sua orientação de vida. É assim que, conscientemente, no momento da Promessa/Compromisso, a Guia diz a todos que é de sua livre vontade que o faz.</p><p>Os Princípios, a Lei e a Promessa são valores transversais à vida de cada Guia, e reiteram o voluntarismo, o altruísmo, a dedicação e a integridade.</p><p>O Compromisso no Guidismo implica também a garantia de uma dedicação ao Movimento e à sua missão. Cada Guia parte da Associação Guias de Portugal (AGP) de forma voluntária e “fazer parte” significa estar presente nas atividades, cumprir as responsabilidades com brio, ter orgulho no trabalho desenvolvido e estar consciente do seu valor.</p><div style='text-transform: uppercase; text-decoration: underline'>Divisa</div><p>Sempre Alerta.</p><div style='text-transform: uppercase; text-decoration: underline'>Princípios</div><div>A Guia vive a sua fé.</div><div>A Guia ama a sua pátria.</div><div>O dever da Guia começa em casa.</div><p>A Guia vive a sua fé.</p><div style='text-transform: uppercase; text-decoration: underline'>Lei da Guia</div><ol><li>O sentimento de honra da Guia é sagrado, a sua palavra merece toda a confiança.</li><li>A Guia é leal.</li><li>A Guia é útil e pratica diariamente uma boa ação.</li><li>A Guia é amiga de todos e irmã de todas as Guias.</li><li>A Guia é atenciosa e delicada.</li><li>A Guia vê a obra de Deus na natureza e protege as plantas e os animais.</li><li>A Guia é obediente.</li><li>A Guia tem sempre boa disposição de espírito.</li><li>A Guia é económica, amiga do arranjo e da ordem e respeitadora do bem alheio.</li><li>A Guia é pura em pensamentos, palavras e ações.</li></ol>",
    },
    {
      title: 'Sistema de Patrulhas',
      text: '<p>Desde o primeiro dia, que cada Guia é acompanhada pela Patrulha, pequeno grupo de 6 a 8 elementos, com os quais cumpre tarefas, debate temas, partilha ideias, vive experiências muito diversas e, por isso, com quem cresce.</p><p>A Patrulha encoraja as Guias a aprenderem umas com as outras e proporciona um ambiente em que todas desempenham um papel e têm responsabilidades dentro do grupo.</p><p>Trabalhar com este núcleo cria um forte sentido de pertença e aceitação. Aprende‑se a encorajar o outro, a tomar decisões de forma democrática, a saber transmitir opiniões e necessidades e a resolver problemas, por outras palavras, trabalham‑se capacidades fundamentais de liderança. O trabalho em grupo é assim mais eficaz e é nas responsabilidades atribuídas que se torna mais fácil conseguir reconhecer e melhor atingir o potencial individual de cada Guia.</p><p>Os proveitos educativos que se retiram deste sistema são vários: envolvimento de uma forma ativa; aprender com outras raparigas da mesma idade, num ambiente familiar e favorável, promovendo o espírito de grupo e a cooperação; desenvolvimento da atribuição, aceitação e partilha de responsabilidades; aquisição de capacidades de liderança; prática de competências democráticas, incluindo formas de tomada de decisão e sua implementação.</p><p>As Guias da Patrulha acompanham‑se, por vezes, durante um longo período de tempo, tendo um forte impacto nos seus valores e no percurso que escolhem para a sua própria vida.</p>',
    },
    {
      title: 'Aprender Fazendo',
      text: '<p>A metodologia de aprender através da experimentação está no centro da essência dos movimentos de educação não formal. Aprender fazendo no Guidismo significa que cada rapariga faz coisas por ela própria, e para si, não ficando apenas a ouvir alguém ou a observar passivamente como se faz uma coisa.</p><p>Esta forma de aprendizagem ativa incute grande motivação em cada Guia. Cada experiência de aprendizagem vivenciada impacta a sua vida pessoal e capacita‑a para aprender o que precisa, de forma mais prática, autónoma e sem receios.</p><p>O aprender fazendo estimula a autonomia e fomenta uma aprendizagem mais rápida e melhor, a iniciativa própria e a criatividade, que permitem a cada Guia tentar algo diferente e experimentar novas maneiras de fazer as coisas. Permite ainda que a Guia cometa erros e tente de novo num ambiente seguro, e, se as atividades forem repetidas, demonstrar progressos numa competência, que a encorajarão a tentar ir mais além.</p><p>A Dirigente assume o papel de supervisora ou consultora e não de participante de categoria superior, acompanhando cada Guia durante o processo.</p>',
    },
    {
      title: 'Autodesenvolvimento Progressivo',
      text: "<p>O autodesenvolvimento progressivo significa que cada Guia determina o seu percurso de crescimento, ao seu ritmo, estando envolvida nas atividades em que participa. Para tal, é importante compreender que cada Guia tem um ritmo de desenvolvimento próprio e que aprende de formas muito diferentes.</p><p>Ao envolver as próprias Guias na escolha e no planeamento de atividades, o Guidismo oferece a oportunidade de aprender sem a pressão de atingir marcos definidos. Assim, ao participar numa atividade, cada Guia terá objetivos pessoais distintos, alguns definidos por elas, outros pela Dirigente, que os deve saber identificar e ajudar a atingir.</p><p>Para um eficaz autodesenvolvimento progressivo é importante que cada Guia seja convidada a identificar, no seu percurso de crescimento, o que quer ainda desenvolver, encorajando a sua Progressão e a tomada de decisão. Esta participação ativa da Guia no seu desenvolvimento deve também estender‑se à decisão sobre a forma como o vai realizar, ou seja, as Guias devem ser ativamente envolvidas na preparação das atividades, pois ao serem responsabilizadas por pequenas tarefas estão, na verdade, a ser responsabilizadas pelo seu próprio desenvolvimento.</p><p>O modelo pedagógico apresenta direções possíveis e áreas a explorar, e a Guia escolhe a sua rota, que percorre de acordo com o seu passo, selecionando atividades, trabalhando automotivação, liberdade de escolha e criatividade. Desta forma, cada Guia progride individualmente aprendendo também a interagir com êxito como parte de um grupo. O envolvimento das Guias no planeamento garante ainda que as atividades vão ao encontro dos seus interesses e necessidades individuais, deixando‑as mais realizadas e motivadas.</p><p>O autodesenvolvimento progressivo melhora capacidades como autodisciplina, responsabilidade por si própria e iniciativa e também desenvolve a aptidão para o trabalho em grupo, a tomada de decisão, a resolução de conflitos, a democracia e a ação individual.</p><p>A Dirigente ajuda a Guia a traçar o seu caminho e a refletir sobre os progressos realizados e ainda a criar novas metas.</p><p>Para mais informações sobre a Progressão: <a href='http://localhost:3000/pedagogia/ramos/avezinha'>Ramo Avezinha</a>, <a href='http://localhost:3000/pedagogia/ramos/aventura'>Ramo Aventura</a>, <a href='http://localhost:3000/pedagogia/ramos/caravela'>Ramo Caravela</a>, <a href='http://localhost:3000/pedagogia/ramos/moinho'>Ramo Moinho</a>, <a href='http://localhost:3000/pedagogia/dirigente'>Dirigente</a>.</p>",
    },
    {
      title: 'Simbolismo',
      text: '<p>O simbolismo compreende todos os elementos que, no Guidismo, criam o sentimento de pertença e a coesão do grupo. Os símbolos são uma codificação própria, que comportam um significado forte para todas as Guias. A farda que a Guia utiliza, e que permite que seja reconhecida na rua; o Trevo, emblema mundial do Guidismo, nas suas variações em cada país, mas com um significado comum; a Promessa que realiza; a Lei e a Divisa que segue como diretrizes na sua vida.</p><p>O simbolismo do Guidismo inclui também outros elementos, como o imaginário próprio de cada Ramo ou os símbolos de Patrulha, o Cerimonial de Promessas, o hino da Companhia, as tradições de cada Companhia ou Região, uma saudação especial, uma canção, uma bandeira de Patrulha ou uma forma de encerramento no fogo de conselho.</p><p>O Guidismo promove o valor e a força destes símbolos e tradições, numa continuidade ao longo da história, unindo assim várias gerações na partilha de um significado especial.</p>',
    },
    {
      title: 'Cooperação ativa entre jovens e adultos',
      text: '<p>O simbolismo compreende todos os elementos que, no Guidismo, criam o sentimento de pertença e a coesão do grupo. Os símbolos são uma codificação própria, que comportam um significado forte para todas as Guias. A farda que a Guia utiliza, e que permite que seja reconhecida na rua; o Trevo, emblema mundial do Guidismo, nas suas variações em cada país, mas com um significado comum; a Promessa que realiza; a Lei e a Divisa que segue como diretrizes na sua vida.</p><p>O simbolismo do Guidismo inclui também outros elementos, como o imaginário próprio de cada Ramo ou os símbolos de Patrulha, o Cerimonial de Promessas, o hino da Companhia, as tradições de cada Companhia ou Região, uma saudação especial, uma canção, uma bandeira de Patrulha ou uma forma de encerramento no fogo de conselho.</p><p>O Guidismo promove o valor e a força destes símbolos e tradições, numa continuidade ao longo da história, unindo assim várias gerações na partilha de um significado especial.</p>',
    },
    {
      title: 'Atividades ao ar livre',
      text: "<p>O ar livre é o espaço, por excelência, para o desenrolar das atividades Guidistas. As últimas décadas assistiram a um progressivo abandono do ar livre como local de recreio, mas desde a sua origem que o Guidismo vem invertendo essa tendência, oferecendo às raparigas oportunidades de vivenciarem a Natureza como poucas vezes lhes é permitido.</p><p>É na Natureza que se encontra o espaço mais acertado para realizar as atividades Guidistas, em que a Guia aprende habilidades que lhe serão úteis no seu quotidiano, mas também para promover competências associadas à formação do caráter e ao desenvolvimento progressivo, como a confiança ou a observação. A Natureza pode ser uma força libertadora, ajudando as raparigas e jovens a conhecer as suas forças, limitações e a descobrir a sua própria espiritualidade.</p><p>De todas as experiências de ar livre que o Guidismo proporciona, o acampamento é sem dúvida a mais rica que oferece a uma rapariga. Todas as atividades realizadas durante o acampamento utilizam a Natureza como estratégia para o desenvolvimento de capacidades: montar a sua ‘casa’ com materiais da natureza, cozinhar com fogo, observar as estrelas, fazer grandes caminhadas ou jogos noturnos. O ar livre oferece espaço para as atividades físicas, mas permite também criar um espaço de intimidade, por exemplo, numa velada, junto a uma fogueira. </p><p>As mais valiosas atividades de ar livre podem ser muito simples, como por exemplo, aprender a conhecer diferentes tipos de árvores num parque da localidade ou compreender o funcionamento de um sistema ecológico através do estudo do jardim de uma casa. </p><p>Ao serem estimuladas a gostar de estar ao ar livre e ao experienciarem a Natureza de forma tão próxima, as Guias acabarão por estar também mais atentas às ameaças a que esse espaço está hoje sujeito, aprendendo princípios ecológicos básicos e ganhando uma forte consciência ambiental e tornando‑se um elemento ativo na sua defesa e valorização. </p><p>Saber mais sobre o AR LIVRE <a href=''>aqui</a>.</p>",
    },
    {
      title: 'Serviço Comunitário',
      text: '<p>O serviço comunitário incute um sentido de responsabilidade pela sociedade, em que a Guia compreende que é parte integrante de uma grande comunidade e de que existem responsabilidades inerentes. Proporciona à Guia a oportunidade de conhecer e respeitar diferentes culturas e maneiras de viver, e realça a influência que ela, como indivíduo, pode exercer no seu ambiente.</p><p>O serviço é uma oportunidade para a Guia crescer como pessoa, pois permite um alargamento de horizontes, um sentido de realização pessoal e um reconhecimento do outro. </p><p>Ao se empenhar na construção e participação em projetos na comunidade local, nacional ou internacional, cada Guia envolve‑se na defesa das causas que mais lhes interessam e preocupam, tornando‑se cidadãs mais interventivas e responsáveis. </p>',
    },
  ];
  const [cssFerramenta, setCSSferramenta] = useState('');
  const [ferramentaSelected, setFerramentaSelected] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const { match } = props;
    const ferramentaPath = match.params.ferramenta.replace(/-/g, ' ');
    setFerramentaSelected(ferramentaPath);
    setCSSferramenta(match.params.ferramenta);
  });

  return (
    <div className="FerramentasGuidista">
      {data.filter((ferramenta) => ferramenta.title.toLowerCase().includes(ferramentaSelected))
        .map((ferramenta) => (
          <div className="ferramenta-section">
            <div className="ferramenta-info-section">
              <div className="ferramenta-title">{ferramenta.title}</div>
              <div className="ferramenta-text">
                {ReactHtmlParser(ferramenta.text)}
              </div>
              <div className="ferramenta-back">
                <Link to="/pedagogia/metodo-guidista">{t('metodoGuidista.voltar')}</Link>
              </div>
            </div>
            <div className={`ferramenta-image ${cssFerramenta}-image`} />
          </div>
        ))}
    </div>
  );
};

FerramentasGuidista.propTypes = {
  match: PropTypes.string.isRequired,
};


export default FerramentasGuidista;

