import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import './ProjetoGuidista.css';

const ProjetoGuidista = (props) => {
  const projetosData = [
    {
      title: 'Ação Saca Rolhas',
      text: '<p>Projeto na área da educação ambiental, através da recolha de rolhas de cortiça usadas, dinamizado pela AGP entre 2005 e 2016.</p><p>Este projeto teve como finalidade contribuir para a preservação do ambiente, reaproveitando um recurso natural, a cortiça, e colaborar com instituições de solidariedade social, uma vez que o valor que resultou da venda das rolhas para novo aproveitamento reverteu a favor destas.</p><p>Em 11 anos, foram recolhidas mais de 32 toneladas, cerca de 8.000 milhões de rolhas.</p><p>Para comemorar os 11 anos do projeto e agradecer a colaboração de toda a comunidade na recolha das rolhas de cortiça, a AGP dinamizou o concurso nacional Rolh’Arte. Cada Companhia criou uma obra de arte, usando rolhas de cortiça, para oferecer ao espaço público. A obra vencedora do Rolh’Arte, uma âncora, foi da autoria das Guias da 1ª Companhia da Apúlia e foi exposta na zona ribeirinha desta vila.</p>',
      image: 'https://drive.google.com/uc?export=view&id=1wORExLJ2z_Jp2RymMGysxKUcgM74i3Kn',
    },
    {
      title: 'Vamos Utopiar',
      text: "<p>Vamos Utopiar foi um projeto que nasceu da iniciativa de cinco entidades de diferentes quadrantes da sociedade, que decidiram juntar-se e formar um coro a favor da participação igualitária de imigrantes e minorias étnicas na sociedade portuguesa:</p><p>Graal - movimento transnacional de mulheres que tem como missão promover uma cultura de cuidado tendo em vista o futuro do planeta e a qualidade de vida da humanidade, procurando criar novos modelos de vida e estimular a participação na sociedade.</p><p>Alto Comissariado para a Imigração e Minorias Étnicas - departamento governamental de apoio e consulta sobre assuntos relacionados com a imigração. Um dos seus eixos fundamentais é a mobilização e reforço da capacidade de intervenção das associações de imigrantes.</p><p>Associação Guias de Portugal - desenvolve um trabalho contínuo na formação para a cidadania de crianças e jovens raparigas. Valoriza a responsabilização pessoal, a troca de experiências e o contacto próximo com as comunidades.</p><p>Luso Temp - empresa especializada no mercado de trabalho temporário, cuja missão é promover o emprego e a formação profissional. Cultiva relações de proximidade e confiança, antecipando necessidades e promovendo o apoio e orientação do imigrante.</p><p>Associação de Melhoramentos e Recreativo do Talude (AMRT) - cria oportunidades de intervenção e desenvolvimento pessoal e coletivo a crianças, jovens e adultos imigrantes e de minorias étnicas residentes na Freguesia de Unhos.</p><p>Este projeto pretendia, primeiro que tudo, que existisse uma maior sensibilização das pessoas para a problemática da discriminação associada ao racismo e à xenofobia. E também que, em última instância, as suas ações provocassem uma mudança de mentalidades.</p><p>Para atingir esse objetivo coletivo, foram organizado e promovido um conjunto de atividades: </p><p>“Educar para o Futuro” - Começou com a sensibilização e abordagem da temática da interculturalidade às Guias entre os seis e os 22 anos, passou depois pelo trabalho conjunto com a AMRT para interação entre jovens raparigas do bairro do Talude e uma Companhia de Guias de Lisboa. O envolvimento dos pais das jovens raparigas foi também um ponto fundamental, uma vez que a valorização da consciência intercultural, nestas faixas etárias, começa no seio da família.</p><p>“Fórum da Interculturalidade” - Evento aberto à comunidade que reuniu todos os parceiros e participantes, incluindo meios de comunicação e atores-chave locais e nacionais. Nele foram apresentadas as perspetivas dos imigrantes e das associações de imigrantes envolvidas nas várias atividades do projeto.</p><p>Foi ainda criado um documento, o <a href='https://drive.google.com/uc?export=view&id=17miN5yAdm_XhwRMd7nx82PkDmhVzC96q' target='_blank'>KIT DA CIDADANIA</a> , com algumas diretrizes para ajudar à implementação de todo o projeto.</p>",
      image: 'https://drive.google.com/uc?export=view&id=1hVZNrdjWg00OSrlvJNz9K6QTs32rW-sp',
    },
    {
      title: 'Portugalta',
      text: '<p>As doenças relacionadas com a nutrição afetam muitas pessoas de todas as idades pelo que é importante promover estilos de vida saudável para contrariar esta tendência.</p><p>Tentando combater uma má alimentação, que se tem vindo a transformar num hábito comum geral, as Guias de Malta desenvolveram, em 2007, um trabalho no âmbito da nutrição que se tornou muito eficaz. Foram realizadas várias atividades envolvendo as Guias, os familiares e as comunidades que as rodeiam, tentando informar e incutir mudanças nos seus estilos de vida.</p><p>Mas o seu espírito Guidista impeliu-as a ir mais além e passaram este testemunho a Portugal. Foi assim que surgiu o Portugalta, que proporcionou às Guias Caravelas e Guias Moinhos uma aprendizagem mais aprofundada sobre o tema, uma intervenção nas suas comunidades e ainda a oportunidade de irem a Malta no verão de 2009 para partilharem o trabalho realizado.</p><p>Depois de levantarem as necessidades das suas comunidades, as Guias realizaram contactos com entidades e projetaram as atividades a realizar. As 12 Patrulhas de Guias Caravelas e Guias Moinhos envolvidas no projeto passaram para a implementação das suas ideias e desenvolveram atividades relacionadas com a nutrição nas suas comunidades. São exemplos dessas atividades um jogo como forma de trabalhar hábitos de higiene com as Avezinhas e Guias Aventuras; uma palestra de higiene e hábitos de alimentação num centro social; atividades Guidistas para os mais pequenos em ATL, relacionadas com o tema; um almoço saudável para a comunidade; medição da tensão arterial junto dos idosos de um lar; uma palestra sobre doenças cardiovasculares; ou a distribuição de maçãs em transportes públicos.</p>',
      image: 'https://drive.google.com/uc?export=view&id=1_tcRDankUus7U54ppt1S1Coro0YxQrrL',
    },
    {
      title: 'Ter mãos grandes',
      text: "<p>Ter Mãos Grandes para Ajudar foi um projeto da AGP de apoio a países de língua oficial portuguesa. Concretamente, esta ação visou a implementação de três projetos de desenvolvimento local: “Um futuro para Nambuangongo”, para reabilitar um internato, em Angola, e aumentar a escolaridade de jovens raparigas; “Juntos Aprendemos”, para revitalizar uma biblioteca destinada a promover atividades lúdicas e a aulas de recuperação escolar para 50 crianças, em Moçambique; e “Padaria Comunitária”, para reabilitar o edifício de uma padaria e formar os responsáveis pela sua gestão, em Timor Leste. </p><p>Tendo como parceiro a <a href='http://www.fecongd.org/' target='_blank'>Fundação Fé e Cooperação</a> este projeto englobou outro mais vasto levado a cabo por esta organização: “agir para desenvolver”.  O objetivo era enquadrar o projeto num programa local de educação para o desenvolvimento, e sensibilizar para o cumprimento dos Objetivos de Desenvolvimento do Milénio.</p><p>A primeira fase decorreu entre novembro de 2009 e abril de 2010, na qual as Guias confecionaram e venderam bolachas, cuja receita da venda reverteu, integralmente, para o fundo criado para este projeto. Esta fase permitiu angariar, em apenas seis meses, mais de 51 mil euros.</p><p>Em 2013, surgiu a possibilidade de financiamento da viagem em missão de uma Patrulha de Guias Caravela ou Guias Moinhos, a um país africano de língua portuguesa. Através da parceria com a Fundação Fé e Cooperação, elegeu-se Cabo Verde por apresentar as condições mais favoráveis para esta viagem de missão.</p><p>Entre 2013 e 2014, as Guias desenvolveram projetos locais específicos e os dois projetos vencedores tiveram o privilégio de representar a AGP em Cabo Verde (Cidade da Praia). Assim, entre em agosto de 2014, sete Guias acompanhadas de três Dirigentes desenvolveram projetos de desenvolvimento local em áreas como a saúde, nutrição, ambiente e cidadania. </p>",
      image: 'https://drive.google.com/uc?export=view&id=1OZrhM2RoXg3sJ9gPvT8zHs3wVRLjp6xf',
    },
    {
      title: 'Vozes contra a violência',
      text: "<p>Vozes Contra a Violência (Voices Against Violence) é uma iniciativa da Associação Mundial das Guias (WAGGGS) com o objetivo de promover à escala global um movimento de reflexão e de mudança de comportamentos em torno do tema da violência sobre as raparigas e jovens mulheres.</p><p>Com esse objetivo, a <a href='http://localhost:3000/sobre/associacao-mundial'>WAGGGS</a> desenvolveu, em parceria com a Organização das Nações Unidas (ONU), um programa educacional específico sobre este tema, que até ao ano de 2020 será implementado junto de mais de cinco milhões de crianças e jovens de todo o mundo.</p><p>A Associação Guias de Portugal foi também parceira desta iniciativa, estando empenhada na sua disseminação, desde logo por via da formação das suas Dirigentes, responsáveis por liderar a implementação do programa Vozes Contra a Violência nas várias regiões do País, quer pelo consequente envolvimento de todas as Guias, famílias e comunidade em geral na defesa dos direitos das raparigas.</p><p>Alinhada com a missão das Guias, de proporcionar às raparigas e jovens mulheres a oportunidade de desenvolverem plenamente o seu potencial como cidadãs universais responsáveis, a implementação deste programa assenta na capacitação das raparigas e jovens mulheres de forma a conseguirem mais facilmente identificar as diferentes formas de violência, a entender as suas causas, a reconhecer os seus direitos e a adquirir as capacidades e a confiança necessárias para serem agentes ativas na reivindicação desses direitos.</p><p>Estima-se que 7 em cada 10 raparigas em todo o mundo experienciam algum tipo de violência ao longo da sua vida. As raparigas e jovens mulheres são particularmente vulneráveis à violência, que ocorre na esfera privada e pública e assume muitas formas, incluindo a violência no namoro, o bullying, entre outras. Em Portugal, 85% das vítimas de violência doméstica são mulheres, na sua grande maioria sendo o autor o próprio parceiro.</p><div style='background-color: #1aa3db; color: #fff; font-size: 28px; font-weight: 500; text-align: center; padding: 50px 0px; margin: 40px 0px'>O Projecto Stop The Violence</div><p>A iniciativa Vozes Contra a Violência integra um projeto mais vasto lançado em julho de 2011 pela WAGGGS em parceria com a ONU, designado de “Stop the Violence, speak out for girls rights” (Vamos pôr fim à violência, defendendo os direitos das raparigas), que tem por grande objetivo acabar com os vários tipos de violência contra raparigas e jovens mulheres em todo o mundo.</p><p>O projeto intervém a vários níveis e junto de vários públicos, conciliando iniciativas de âmbito mais alargado, como sejam campanhas de sensibilização e a disponibilização de recursos sobre o tema da violência sobre as raparigas e jovens mulheres, com a produção de conhecimento e investigação e o exercício de influência junto dos agentes e decisores políticos nestes domínios.</p><p>É também neste contexto que o programa educacional “Vozes Contra a Violência” se apresenta como uma peça fundamental, na medida em que permitirá uma implementação consistente do projeto no terreno e a sua disseminação a uma escala mais local.</p><p>Para que todos juntem a sua voz contra a violência!</p><p>Saber mais sobre o Vozes contra a Violência <a href='https://www.wagggs.org/en/what-we-do/stop-the-violence/' target='_blank'>aqui</a>.</p>",
      image: 'https://drive.google.com/uc?export=view&id=1Uy3_clZhYoxu5xUKwvFyuXbEMeoWt0ub',
    },
  ];

  const [projetoSelected, setProjetoSelected] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const { match } = props;
    const projetoPath = match.params.projeto.replace(/-/g, ' ');
    setProjetoSelected(projetoPath);
  });

  return (
    <div className="ProjetoGuidista">
      {projetosData.filter((projeto) => projeto.title.toLowerCase().includes(projetoSelected))
        .map((projeto) => (
          <div className="projeto-post-box">
            <div className="projeto-post-image">
              <img src={projeto.image} alt={projeto.title} />
            </div>
            <div className="projeto-post-info">
              <div className="projeto-post-title">{projeto.title}</div>
              <div className="projeto-post-text">{ReactHtmlParser(projeto.text)}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

ProjetoGuidista.propTypes = {
  match: PropTypes.string.isRequired,
};

export default ProjetoGuidista;
