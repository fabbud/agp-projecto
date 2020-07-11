import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './MetodoGuidista.css';
import aprenderFazendo from '../../assets/images/MetodoGuidista/Aprender_Fazendo2.png';
import atividadesArLivre from '../../assets/images/MetodoGuidista/Atividades_ao_Ar_Livre2.png';
import autoDesenvolvimento from '../../assets/images/MetodoGuidista/Autodesenvolvimento_Progressivo2.png';
import compromisso from '../../assets/images/MetodoGuidista/Compromisso2.png';
import servicoComunitario from '../../assets/images/MetodoGuidista/Serviço_Comunitário2.png';
import simbolismo from '../../assets/images/MetodoGuidista/Simbolismo2.png';
import sistemaPatrulhas from '../../assets/images/MetodoGuidista/Sistema_de_Patrulhas2.png';
import cooperacaoAtiva from '../../assets/images/MetodoGuidista/Cooperação_Ativa2.png';
const MetodoGuidista = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Metodo-Guidista">
      <div className="guidista-banner" />
      <div className="guidista-intro">
        <div className="guidista-intro-title">{t('metodoGuidista.introTitulo')}</div>
        <div className="guidista-intro-text">{t('metodoGuidista.introTexto')}</div>
      </div>
      <div className="guidista-metodos">
        <div className="metodos-title">{t('metodoGuidista.oitoFerramentasTitulo')}</div>
        <div className="metodo-box-group">
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.compromisso')}</div>
            <img className="metodo-box-img" src={compromisso} alt="Compromisso" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.sistemaPatrulhas')}</div>
            <img className="metodo-box-img" src={sistemaPatrulhas} alt="Patrulha" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.aprenderFazendo')}</div>
            <img className="metodo-box-img" src={aprenderFazendo} alt="Fazer" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.autodesenvolvimento')}</div>
            <img className="metodo-box-img" src={autoDesenvolvimento} alt="Autodesenvolvimento" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.simbolismo')}</div>
            <img className="metodo-box-img" src={simbolismo} alt="Simbolismo" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.cooperacaoAtiva')}</div>
            <img className="metodo-box-img" src={cooperacaoAtiva} alt="Cooperação" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.atividadesArLivre')}</div>
            <img className="metodo-box-img" src={atividadesArLivre} alt="Atividades" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.servicoComunitario')}</div>
            <img className="metodo-box-img" src={servicoComunitario} alt="Comunitário" />
          </div>
        </div>
      </div>
      <div className="guidista-intro">
        <div className="guidista-intro-title">{t('metodoGuidista.constantesTitulo')}</div>
        <div className="guidista-intro-text">{t('metodoGuidista.constantesTexto')}</div>
      </div>
      {/* <div className="constantes-imagens">
        <div className="constantes-img constantes-img-1">
          <div className="constante-title">Vida em grupo</div>
          <div className="constante-text">empenho</div>
        </div>
        <div className="constantes-img constantes-img-2">
          <div className="constante-title">Vida em grupo</div>
          <div className="constante-text">empenho</div>
        </div>
        <div className="constantes-img constantes-img-3">
          <div className="constante-title">Vida em grupo</div>
          <div className="constante-text">empenho</div>
        </div>
        <div className="constantes-img constantes-img-4">
          <div className="constante-title">Vida em grupo</div>
          <div className="constante-text">empenho</div>
        </div>
      </div> */}
      <div className="atividades-sentence">
        <div className="atividades-sentence-title">Atividades</div>
        <div className="atividades-sentence-text">As Ferramentas do Método Guidista e as Quatro Constantes são vividas através das várias atividades proporcionadas pela Associação.</div>
      </div>
      <div className="atividades-section">
        <div className="atividades-section-text">
          <div className="atividades-title">Atividades em Campo</div>
          <div className="atividades-subtitle">Acampamento</div>
          <div className="atividades-text">Baden-Powell dizia que o Acampamento “é a escola dos esforços e do desprendimento, nele as Guias aprendem a bastarem-se a si próprias, suprimindo as carências existentes no campo, com os meios que a Natureza oferece e com a técnica que aprenderam.”</div>
          <div className="atividades-text">A vida no campo é a grande aventura cheia de desafios que proporciona a cada Guia aprender a vencer dificuldades através das competências adquiridas e transformar o campo onde se encontra na “casa” onde vai viver durante cinco a sete dias.</div>
          <div className="atividades-subtitle">Acantonamento</div>
          <div className="atividades-text">O Acantonamento é uma atividade dentro de casa com a duração mínima de um fim de semana. É realizado no inverno, no período das férias de Natal, com a duração de quatro ou cinco dias e ao longo do ano em pequenas atividades.</div>
          <div className="atividades-subtitle">Bivaque</div>
          <div className="atividades-text">O Bivaque é um pequeno acampamento de Patrulha, que habitualmente inclui a dormida num abrigo construído pelas Guias e refeições de cozinha sem panelas.</div>
          <div className="atividades-subtitle">Raid</div>
          <div className="atividades-text">O Raid é uma grande caminhada pelo campo, praia ou serra, em que se visitam pontos de interesse da região, conhecendo as suas características (história, clima, vegetação, etc.). São entregues mensagens às Guias, com propostas de tarefas para realizar ao longo do percurso e com indicações sobre o mesmo, em cifra ou através de orientação por carta topográfica.</div>
        </div>
        <div className="atividades-section-img atividade-img-1" />
      </div>
      <div className="atividades-section-two">
        <div className="atividades-section-img atividade-img-2" />
        <div className="atividades-section-text">
          <div className="atividades-title">Atividades da Sede</div>
          <div className="atividades-text">As Guias organizam-se localmente em Companhias e reúnem-se todas as semanas. <br/> A sede da Companhia é o local onde cada Ninho/Patrulha tem o seu canto e onde trabalham em conjunto.</div>
          <div className="atividades-text">A reunião semanal tem vários momentos: a reunião de Companhia (momento de encontro dos vários Ramos); o Conselho de Honra (reunião das Dirigentes com as Chefes e Sub-Chefes de Patrulha, em que se programam e avaliam as atividades e em que é dada formação); e a reunião de Patrulha (distribuição de tarefas de acordo com os cargos atribuídos e trabalho sobre a Progressão com a ajuda da Chefe e Sub-Chefe da Patrulha).</div>
        </div>
      </div>
      <div className="atividades-section">
        <div className="atividades-section-text">
          <div className="atividades-title">Atividades de Cidade</div>
          <div className="atividades-text">As atividades de cidade permitem conhecer novos locais, novas gentes, novas culturas e novas formas de pensar. O jogo de conhecimento da cidade proporciona às Guias a oportunidade de conhecerem a História e as histórias do local, através da população, de visitarem museus, exposições e outros locais de interesse, vivendo, desta forma, o Princípio “A Guia ama a sua Pátria”.</div>
        </div>
        <div className="atividades-section-img atividade-img-3" />
      </div>
      <div className="atividades-section-two">
        <div className="atividades-section-img atividade-img-4" />
        <div className="atividades-section-text">
          <div className="atividades-title">Serviço Comunitário</div>
          <div className="atividades-text">Na essência do Guidismo está a convicção no valor do serviço ao próximo como componente importante para uma cidadania responsável. Assim, o Movimento Guidista tenta aproximar as raparigas da comunidade onde estão inseridas e procura sensibilizar para a responsabilidade do futuro e para o bem comum. Assim, as Guias realizam atividades como projetos de desenvolvimento comunitário junto da população mais carenciada, peditórios e recolha de bens ou alimentos, campanhas de sensibilização sobre uma área (higiene, alfabetização, ambiente, etc) ou atividades de preservação ambiental (recolha de lixo, limpeza de praias e florestas, plantação de árvores, como por exemplo o <a href='https://www.cleanuptheworld.org/about-us' target='_blank'>Clean Up the World</a>).</div>
          <div className="atividades-text">Muitos destes projetos estão alinhados com os <a href='https://sustainabledevelopment.un.org/?menu=1300' target='_blank'>Objetivos de Desenvolvimento Sustentável</a>, contribuindo também o Guidismo para as metas de 2030.</div>
        </div>
      </div>
      <div className="projetos-section">
        <div className="projetos-title">Projetos realizados a nível nacional</div>
        <div className="projetos-text">Paralelamente aos programas pedagógicos que a Associação propõe às Guias e às iniciativas de cada Companhia a nível local, no âmbito do seu Plano Anual de Atividades, a AGP lança com regularidade projetos de implementação nacional, cumprindo o lema SEMPRE ALERTA. Alguns dos projetos são propostos pela Associação Mundial das Guias (WAGGGS), enquanto membro efetivo de vários Comités das Nações Unidas.</div>
      </div>

      {/* MAP SECTION */}

      <div className="atividades-section">
        <div className="atividades-section-text">
          <div className="atividades-title">Experiências internacionais</div>
          <div className="atividades-text">O Guidismo promove o respeito, a empatia e a tolerância pelos outros e a responsabilidade pelo mundo em que vivemos, também através da educação internacional. Ao aprender como vivem as pessoas de outras culturas e religiões, a Guia adquire um entendimento e aceitação das diferentes formas de pensar e de viver, e ao estabelecer amizade com pessoas de diferentes culturas e histórias de vida, desenvolve um sentido de responsabilidade e um conhecimento da interdependência da sua vida em relação à vida dos outros. A educação internacional é também importante como forma de fortalecer a educação para a paz, valor fortemente promovido pelo Guidismo.</div>
          <div className="atividades-text">As experiências internacionais tanto podem acontecer durante uma reunião de Patrulha, através de um contacto no bairro, ou num campo internacional, no estrangeiro. Ou ainda em atividades internacionais como o <a href='https://www.jotajoti.info/' target='_blank'>JOTA-JOTI</a> (Jamboree On The Air - Jamboree On The Internet), evento realizado anualmente, no terceiro fim de semana do mês de outubro, desde as 00h00 de sábado até às 24h00 de domingo (hora local), num total de 48 horas, que promove a comunicação entre Guias e Escuteiros de vários países do mundo, via radio amador e internet.</div>
        </div>
        <div className="atividades-section-img atividade-img-5" />
      </div>
      <div className="associacao-button-section">
        <Link to="/contactos/formulário"><button type="submit" className="ser-guia-button associacao-button">{t('buttons.queresSerGuia')}</button></Link>
      </div>
    </div>
  );
};

export default MetodoGuidista;
