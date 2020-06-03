import React from 'react';
import './RamosDirigente.css';
import avezinhaBanner from '../../assets/images/RamosDirigente/Banner_RamoAvezinha.png';
import aventuraBanner from '../../assets/images/RamosDirigente/Banner_RamoAventura.png';
// import moinhoBanner from '../../assets/images/RamosDirigente/Banner_RamoMoinho.png';
import caravelaBanner from '../../assets/images/RamosDirigente/Banner_RamoCaravela.png';
import dirigenteBanner from '../../assets/images/RamosDirigente/Banner_Dirigente.png';

const RamosDirigente = () => {
  return (
    <div className="RamosDirigente">
      <div className="ramos-banner">
        <div className="ramos-photo-1" />
        <div className="ramos-photo-2" />
        <div className="ramos-photo-3" />
      </div>
      <div className="ramos-sentence">
        <img src={avezinhaBanner} className="banner-sentence" alt="Frase do Ramo" />
      </div>

      {/* AVEZINHA  */}

      <div className="ramos-section avezinha">
        <div className="ramos-text">
            <p><strong>Cor: AMARELO</strong>, cor do sol.</p>
            <p><strong>Simbologia: AVEZINHA</strong>, pequeno pássaro que comandado pelo <strong>SONHO</strong> ganha asas e aprende a voar.</p>
            <p><strong>Estrutura:</strong> 4 a 6 Avezinhas formam um <strong>NINHO</strong> que reunidas com os restantes Ninhos constituem o <strong>BANDO</strong>.</p>
            <p>É num mundo de sonho que cada criança será convidada a <strong>TORNAR-SE AVEZINHA</strong>, ganhar asas e aprender a voar. Considerando o imaginário deste Ramo, as Dirigentes são designadas por Águias e Corujas.</p>
            <p>Sair do ovo e aprender a relacionar-se com o seu Ninho, sempre com o apoio da Águia e das Corujas, permitirá que cada Avezinha ganhe as competências e a autonomia necessárias ao seu Primeiro Voo, fazer a sua PROMESSA DE AVEZINHA. Alegre e curiosa, com vontade de crescer forte e saudável, com gosto pela natureza e sempre disposta a ajudar.</p>
            <p>Capaz de pequenos voos a Avezinha ganha <strong>ASAS</strong> e explora os <strong>VERDES</strong> do bosque, conhece vários animais e é com eles que aprende novos saberes, que aprende a conhecer as árvores e as plantas, as praias e os rios… Descobre os seus gostos, supera alguns receios e desenvolve os seus dons através da realização de <strong>ESPECIALIDADES</strong>, até estar pronta para voar mais alto.</p>
            <p>Já mais autónoma, mais capaz de tomar conta de si própria e de trabalhar com os outros, está na altura da Avezinha deixar as suas <strong>ASAS</strong> cruzarem os <strong>AZUIS</strong> do céu. Para tal terá de olhar em redor de forma atenta (no Ninho, no Bando, na Companhia, em casa, na turma, na escola, na comunidade), definir um destino (escolher onde pode proporcionar uma mudança positiva) e aperfeiçoar as técnicas de voo para sincronizar o bater das asas com o bater do coração, chegada a hora de partilhar, agir, por um mundo melhor.</p>
            <p>Até ao Grande Voo que a conduzirá à sua Primeira Aventura.</p>
        </div>
        <div className="ramos-buttons-section">
          <div>
            <button type="submit" className="ramos-button avezinha blue-border">Palavra aos Pais</button>
          </div>
          <div>
            <button type="submit" className="ramos-button avezinha blue-border">Queres ser Guia ?</button>
          </div>
        </div>
      </div>

      {/* AVENTURA  */}

      <div className="ramos-section aventura">
        <div className="ramos-text">
          <p><strong>Cor: VERDE</strong>, cor da natureza.</p>
          <p><strong>Simbologia: BÚSSOLA</strong>, que ajuda a encontrar o melhor <strong>TRILHO</strong> .</p>
          <p><strong>Estrutura:</strong> 6 a 8 Guias formam uma <strong>PATRULHA</strong> que reunidas com as restantes Patrulhas constituem a <strong>ODISSEIA</strong>.</p>
          <p>Na construção do seu trilho, a Guia Aventura é desafiada a descobrir novas capacidades e a aprender a trabalhar em Patrulha, o grupo que a acompanhará ao longo do caminho, partilhando dificuldades e conquistas. Esse trilho a percorrer é dividido em três etapas: PRIMEIRA AVENTURA, ESCALADA E HORIZONTE.</p>
          <p>Na <strong>PRIMEIRA AVENTURA</strong>, a Guia Aventura atravessa pontes, visita feiras e conquista castelos, desenvolvendo gradualmente a autonomia e a organização necessárias a esta viagem de descoberta de novas técnicas e aprendizagens.</p>
          <p>Durante os acampamentos, cada Patrulha é responsável pela construção e manutenção da sua “casa” (o seu campo), partilhando as tarefas e as responsabilidades com as restantes raparigas da sua idade, oferecendo-lhes a alegria da concretização de pequenos desafios quotidianos.</p>
          <p>A viagem da Primeira Aventura culmina na realização <strong>Promessa de Guia</strong>, em que cada rapariga afirma o seu compromisso para com a Associação e para com a Lei da Guia, passando a assumir os seus valores e princípios como orientadores da sua vida, e afirmando a sua disponibilidade para ajudar o Outro.</p>
          <p>Retemperada das emoções desta viagem, a Guia Aventura parte para a <strong>ESCALADA</strong>, aonde a subida apresenta novas oportunidades de aprendizagens e vivência em grupo, aprofundando os temas da Progressão.</p>
          <p>Nesta fase, por volta dos 11/12 anos, a Guia Aventura já começa a ganhar apetência por alguns temas, e é nesta altura que é convidada a explorar as suas áreas de interesse através da realização de <strong>ESPECIALIDADES</strong> que incentivam a sua criatividade e iniciativa.</p>
          <p>Chegada ao cume da montanha, a Guia Aventura avista um novo <strong>HORIZONTE</strong> de oportunidades. Num trilho já longo, de muito crescimento e descoberta, a Guia Aventura é agora uma rapariga mais autónoma e desperta para o mundo que a rodeia, mais segura dos conhecimentos e técnicas que aprendeu e preparada para realizar tarefas mais complexas.</p>
          <p>Chegada ao final do trilho, a Guia Aventura está pronta para, com a sua Patrulha, embarcar numa nova viagem a bordo de uma Caravela.</p>
        </div>
        <div className="ramos-buttons-section">
          <div>
            <button type="submit" className="ramos-button aventura white-border">Palavra aos Pais</button>
          </div>
          <div>
            <button type="submit" className="ramos-button aventura white-border">Queres ser Guia ?</button>
          </div>
        </div>
      </div>

      {/* CARAVELA  */}

      <div className="ramos-section caravela">
        <div className="ramos-text">
          <p><strong>Cor: LARANJA</strong>, cor do sol poente.</p>
          <p><strong>Simbologia: CARAVELA</strong>, para uma importante  <strong>EXPEDIÇÃO</strong> que levará a lugares longínquos e misteriosos.</p>
          <p><strong>Estrutura:</strong> 4 a 6 Avezinhas formam uma <strong>PATRULHA</strong> que reunidas com os restantes Patrulhas constituem a <strong>FROTA</strong>.</p>
          <p>Nesta <strong>EXPEDIÇÃO</strong>, a Guia Caravela irá partir à descoberta de novos mundos. Ao longo das três etapas: APARELHAGEM, NAVEGAÇÃO E EXPLORAÇÃO e com o auxílio de diferentes instrumentos náuticos – ROL, CARTA DE MAREAR E ÂNCORA, a Guia Caravela irá embarcar numa nova aventura, desenvolver novas capacidades e adquirir novos conhecimentos, contribuindo para o seu crescimento e formação.</p>
          <p>A <strong>APARELHAGEM</strong> é a primeira etapa da Progressão do Ramo e é dedicada à preparação da caravela. Consiste na reciclagem e na confirmação da técnica Guidista e dos conhecimentos adquiridos no Ramo Aventura.Contempla três fases relacionadas com o aprovisionamento da Caravela: reciclagem de conhecimentos; construção da caravela: Casco, Mastro e Leme; e preparação para o Compromisso e renovação da Promessa de Guia.</p>
          <p>A <strong>NAVEGAÇÃO</strong> é a segunda etapa da Progressão do Ramo e é dedicada à aprendizagem de novas áreas do conhecimento. Os temas estão divididos por oito Ondas: técnica guidista, desporto e saúde, arte, vida ao ar livre, casa, país e civismo, cultura geral e cultura religiosa. Nesta etapa, a Guia Caravela irá testar a sua capacidade de planeamento e execução.</p>
          <p>A <strong>EXPLORAÇÃO</strong> é a última etapa da Progressão do Ramo. Aqui, a Guia Caravela irá especializar-se numa área específica de cada tema (Onda). Conhecendo o Mundo que a rodeia e vivendo com os outros, conhecendo-se a si própria e aperfeiçoando-se no que pensa ser o que mais a completa, ela realizará as <strong>ESPECIALIDADES</strong>. </p>
          <p>A Guia Caravela prepara-se para a viagem que a levará à descoberta do Serviço, no Ramo Moinho.</p>
        </div>
        <div className="ramos-buttons-section">
          <div>
            <button type="submit" className="ramos-button caravela white-border">Palavra aos Pais</button>
          </div>
          <div>
            <button type="submit" className="ramos-button caravela white-border">Queres ser Guia ?</button>
          </div>
        </div>
      </div>

      {/* MOINHO  */}

      <div className="ramos-section moinho">
        <div className="ramos-text">
          <p><strong>Cor: AZUL</strong>, cor do céu.</p>
          <p><strong>Simbologia: MOINHO</strong>, construção de base sólida na terra que simboliza a maturidade atingida e o vento que empurra as velas, a força das escolhas que se fazem, tentando construir um amanhã diferente de hoje.</p>
          <p><strong>Estrutura:</strong> 5 a 8 Guias formam uma <strong>PATRULHA</strong>.</p>
          <p>A base de formação do Ramo Moinho é o <strong>SERVIÇO</strong>, em que a Guia vai partir da descoberta do seu Eu e do Outro para ser <strong>Missão</strong> na sua Comunidade e no Mundo. Ao longo das três etapas: MOINHO EM CONSTRUÇÃO, MOINHO BRANCO E MOINHO AZUL as Guias Moinho, jovens adultas, com a sua personalidade construída, capazes de tomar decisões e assumir responsabilidades segundo os seus valores e ideais irão explorar o seu Moinho de Vento que realça os seguintes aspetos:</p>
          <ul className="moinho-lista">
            <li>A CASA – conhecimentos e capacidades;</li>
            <li>AS VELAS – atitudes e valores;</li>
            <li>O VEIO – as atividades;</li>
            <li>A MÓ – a meta;</li>
            <li>O VENTO – o lema.</li>
          </ul>
          <p>O <strong>MOINHO EM CONSTRUÇÃO</strong> é a primeira etapa em que a vivência de Patrulha é o principal objetivo, mas também a valorização do Guidismo como experiência pedagógica. Consiste num consolidar de conhecimentos e projeção de um plano de crescimento e aprendizagem, tendo em conta os seus interesses, desenvolvendo a sua autonomia, iniciativa e responsabilidade. Realizam as suas atividades, aceitam desafios, partem à descoberta. No final desta etapa, a Guia Moinho faz o seu Compromisso reforçando a Promessa e a vontade de se empenhar no serviço à comunidade.</p>
          <p>O <strong>MOINHO BRANCO</strong> é a segunda etapa. Agora, a Guia Moinho prepara-se técnica e pessoalmente para esta experiência, adquire conhecimentos numa área específica à sua escolha – nutrição, património, educação, saúde, paz ou ambiente – e lança-se num trabalho de projeto, procurando ir ao encontro das necessidades da comunidade em que está inserida. Ao longo desta segunda etapa de Progressão, a Guia Moinho é desafiada a encontrar áreas de interesse e a delinear as suas próprias <strong>ESPECIALIDADES</strong>.</p>
          <p>O <strong>MOINHO AZUL</strong> é a última etapa do Ramo. A Guia Moinho é desafiada a ter uma visão mais global e o contacto com as iniciativas promovidas pela Associação Mundial das Guias (WAGGGS) será um incentivo e uma motivação ainda maior para promover o crescimento pessoal, contribuindo para o desenvolvimento da sociedade e permitindo a tomada de consciência do papel que as Guias têm no mundo.</p>
          <p>No final desta caminhada, a Guia Moinho estará preparada para aceitar mais um desafio – ser Dirigente, continuando a sua formação pessoal e proporcionando a outras raparigas a vivência do Guidismo, mantendo viva a Missão da Associação. </p>
        </div>
        <div className="ramos-buttons-section">
          <div>
            <button type="submit" className="ramos-button moinho white-border">Palavra aos Pais</button>
          </div>
          <div>
            <button type="submit" className="ramos-button moinho white-border">Queres ser Guia ?</button>
          </div>
        </div>
      </div>

      {/* DIRIGENTE  */}

      <div className="ramos-section dirigente">
        <div className="ramos-text">
          <p>Ser Dirigente é um desafio, uma missão e uma descoberta, que se traduz em infindáveis acontecimentos permanentes na memória como alegrias, conquistas e aprendizagens. A Progressão da Dirigente sugerida pela Associação compreende três etapas: NÍVEL 3, NÍVEL 2 e NÍVEL 1. Para cada um destes níveis há um conjunto de conhecimentos a adquirir, atividades a realizar/participar, bem como valores, atitudes e capacidades a desenvolver.</p>
          <p>Iniciando o <strong>NÍVEL 3</strong>, a Dirigente Estagiária inicia um período de estágio numa Companhia, em que terá um espaço privilegiado para aprender, com o acompanhamento e o apoio de uma Dirigente mais experiente que será a sua orientadora de estágio. Irá desenvolver a dimensão local, regional e nacional, com uma intervenção faseada. A participação no TAG 3 (formação em Técnicas de Animação Guidista – Nível 3), a frequência de um curso de Primeiros Socorros ou a realização do Atestado de Campo (primeiro acampamento organizado pela Dirigente Estagiária) são momentos imprescindíveis à realização de um bom trabalho com as Guias, adquirindo-se as ferramentas base desta caminhada. No fim desta etapa, é realizado o Compromisso, confirmação da dedicação e envolvimento com a educação das Guias e, por conseguinte, com a sociedade, com o País e com o Guidismo.O amadurecimento da atuação de cada Dirigente, enriquecido pela crescente experiência no trabalho direto com as Guias, permite aprofundar o porquê daquilo que faz e a forma como faz, compreendendo o Método Guidista numa nova dimensão, mais ampla. Nesta responsabilidade crescente, não somente com as Guias, mas também com as Dirigentes Estagiárias que iniciaram a sua caminhada, a Dirigente em <strong>NÍVEL 2</strong> é vista como um exemplo. A orientação de estágio, a execução de Especialidades e a participação no TAG 2 (formação em Técnicas de Animação Guidista – Nível 2) são os momentos primordiais de formação desta etapa.</p>
          <p>No último nível da Progressão da Dirigente, o <strong>NÍVEL 1</strong>, espera-se da Dirigente um olhar e pensamento estratégicos sobre a Região e a Associação, demonstrando uma excelente capacidade de análise e de tomada de decisão, tendo em conta os desígnios de ambas. Neste contexto, surge um espaço de consciencialização desta grandeza de pensamento, a formação em TAG 1 (formação em Técnicas de Animação Guidista – Nível 1) e a oportunidade de a Dirigente integrar ou propor projetos regionais e nacionais. Todos estes momentos fazem parte da Progressão da Dirigente e ilustram as estratégias de capacitação das Dirigentes no seu papel educativo, criando um inestimável capital de jovens voluntárias, essenciais à prossecução da missão da Associação. Este percurso capacita cada uma e nesse conjunto é potenciada uma mudança positiva: em cada uma, nos outros e no Mundo.</p>
        </div>
        <div className="ramos-buttons-section">
          <div>
            <button type="submit" className="ramos-button dirigente white-border">Queres ser Guia ?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamosDirigente;
