import React from "react";
import { Card } from "react-bootstrap";
import "./PalavraAosPais.css";
import missaoBanner from "../../assets/images/PalavraAosPais/missaobanner.jpg";
import ajudamos from "../../assets/images/PalavraAosPais/Ajudamos.jpg";
import ritmo from "../../assets/images/PalavraAosPais/Ritmo.jpg";
import potencial from "../../assets/images/PalavraAosPais/Potencia.jpg";
import cidada from "../../assets/images/PalavraAosPais/Cidadas.jpg";
import responsaveis from "../../assets/images/PalavraAosPais/Responsaveis.jpg";
import acampamento from "../../assets/images/PalavraAosPais/Acampamento.jpg";

const PalavraAosPais = () => {
  return (
    <div className="PalavraAosPais">
      <img className="missaoBanner" src={missaoBanner} alt="Missao Banner" />
      <p className="FilhaGuia">Ter uma filha nas Guias, porque sim?</p>
      <p className="FilhaGuiaText">
        Nas Guias ajudamos as crianças e jovens raparigas a desenvolverem <br />{" "}
        plenamente o seu potencial como cidadãs universais responsáveis.
      </p>
      <div className="TextAndPicturesPalavaraAosPais">
        <div className="Ajudamos">
          <div className="AjudamosImage">
            <img
              className="AjudamosImg"
              src={ajudamos}
              alt="Ajudamos, não fazemos por elas"
            />
          </div>
          <div className="TextPalavraAosPais">
            <h2 className="TextH2">
              <strong> Ajudamos, não o fazemos por elas.</strong>
            </h2>
            <p className="AjudamosTextP">
              Nas Guias aprendemos fazendo. Isto quer dizer que a rapariga faz
              coisas por ela própria, e para si, não ficando apenas a ouvir
              alguém ou a observar passivamente como se faz uma coisa. Fazer
              algo significa aprender mais depressa e melhor, uma vez que a
              experiência é pessoal e não em ‘segunda mão’.
              <br />
              <br />
              Aprender fazendo fomenta a iniciativa própria e a criatividade,
              dado que permite à Guia tentar algo diferente de fazer as coisas.
              Aprender fazendo permite que ela cometa erros num ambiente seguro,
              e, se as atividades forem repetidas, demonstrar progressos numa
              competência, que a encorajarão a tentar ir mais além.
            </p>
          </div>
        </div>
        <div className="Ritmo">
          <div className="RitmoImage">
            <img
              className="RitmoImg"
              src={ritmo}
              alt="Plenamente, mas ao seu próprio ritmo."
            />
          </div>
          <div className="TextPalavraAosPais">
            <h2 className="TextH2">
              <strong> Ajudamos, não o fazemos por elas.</strong>
            </h2>
            <p className="RitmoTextP">
              Nas Guias apresentamos direções possíveis e áreas a explorar, mas
              é a Guia que escolhe a sua rota, que percorre de acordo com o seu
              passo, selecionando atividades, experimentando automotivação e
              liberdade de escolha. Desta forma, progride individualmente
              aprendendo também a interagir com êxito como parte de um grupo,
              desenvolvendo a sua imaginação e criatividade.
            </p>
          </div>
        </div>
        <div className="Potencial">
          <div className="PotencialImage">
            <img
              className="PotencialImg"
              src={potencial}
              alt="O seu potencial, mas integrada numa patrulha."
            />
          </div>
          <div className="TextPalavraAosPais">
            <h2 className="TextH2">
              <strong> O seu potencial, mas integrada numa patrulha.</strong>
            </h2>
            <p className="PotencialTextP">
              Nas Guias a rapariga é integrada numa patrulha, no âmbito da qual
              aprende com outras raparigas da mesma idade, num ambiente familiar
              e favorável, promovendo o espírito 
              <br />
              de grupo e a cooperação; desenvolvimento 
              <br />
              da atribuição, aceitação e partilha de responsabilidades;
              aquisição de capacidades
              <br />
              de liderança; prática de competências democráticas, incluindo
              formas de tomada
              <br />
              de decisão e sua implementação.
              <br />
              Desde o primeiro dia, é chamada a tomar responsabilidade por
              pequenos aspetos da vida da patrulha e das suas atividades, 
              <br />
              e, gradualmente, a alargar e aumentar 
              <br />
              essa responsabilidade.
              <br />
            </p>
          </div>
        </div>
        <div className="Cidada">
          <div className="CidadaImage">
            <img
              className="CidadaImg"
              src={cidada}
              alt="Cidadãs universais, atentas às realidades globais e locais"
            />
          </div>
          <div className="TextPalavraAosPais">
            <h2 className="TextH2">
              <strong>
                Cidadãs universais, atentas às realidades globais e locais.
              </strong>
            </h2>
            <p className="CidadaTextP">
              Nas Guias procuramos deixar o mundo um melhor do que o encontrámos
              – assim, nos pediu o nosso fundador, Baden Powell. Nesta tão
              simples frase se encerra uma grande e desafiante missão na qual
              todas as Guias
              <br />
              são convidadas a participar, por um lado através do seu
              envolvimento e interesse pelas realidades do mundo, mas também, à
              sua medida, no contributo ativo em projetos de serviço.
              <br /> 
              O trabalho com a comunidade é um importante meio de educação:
              estimula o sentido de responsabilidade da Guia perante o mundo em
              <br />
              que se insere, proporciona-lhe a oportunidade de conhecer e
              respeitar diferentes culturas e maneiras de viver e realça a
              influência positiva que ela, como indivíduo, pode exercer no seu
              ambiente.
              <br />
            </p>
          </div>
        </div>
        <div className="Responsaveis">
          <div className="ResponsaveisImage">
            <img
              className="ResponsaveisImg"
              src={responsaveis}
              alt="Responsáveis, com verdadeiro sentido de compromisso."
            />
          </div>
          <div className="TextPalavraAosPais">
            <h2 className="TextH2">
              <strong>
                Responsáveis, com verdadeiro sentido de compromisso.
              </strong>
            </h2>
            <p className="ResponsaveisTextP">
              Nas Guias, valores como palavra de honra, honestidade, confiança,
              verdade, lealdade estão expressos nos Princípios e Lei que cada
              Guia
              <br />
              voluntariamente promete cumprir e pelos quais passa a orientar a
              sua vida.
              <br />
            </p>
          </div>
        </div>
        <div className="Acampamento">
          <div className="AcampamentoImage">
            <img
              className="AcampamentoImg"
              src={acampamento}
              alt="O acampamento e o ar livre como espaços de aprendizagem."
            />
          </div>
          <div className="TextPalavraAosPais">
            <h2 className="TextH2">
              <strong>
                O acampamento e o ar livre como espaços de aprendizagem.
              </strong>
            </h2>
            <p className="AcampamentoTextP">
              Nas Guias, o acampamento e o contacto com a natureza são de
              extrema importância enquanto espaços educativos. Defendia Baden
              Powell que o acampamento é como “uma escola dos esforços e do
              desprendimento, nele as Guias
              <br />
              aprendem a bastarem-se a elas próprias, suprimindo as carências
              existentes no
              <br />
              campo com os meios que a Natureza oferece
              <br />
              e com a técnica que aprenderam”.
              <br />
              <br />
              Um estudo muito recente realizado pela Universidade de Plymouth
              [artigo completo
              <a href="https://www.plymouth.ac.uk/news/study-links-camping-and-happier-children"> aqui</a>
              ] sugere que crianças que acampam ao ar livre têm melhor
              desempenho escolar, além de serem mais saudáveis e felizes.
              <br />
              <br />
              Quatro em cada cinco pais inquiridos afirmou que os acampamentos
              têm um efeito positivo na educação escolar dos seus filhos, 98%
              indicou que os acampamentos fazem os filhos apreciarem a natureza,
              95% respondeu que os filhos ficam mais felizes quando acampam e
              93% que o acampamento ajuda no desenvolvimento de competências
              úteis para a vida adulta. Outros pais indicaram que os filhos
              ficam menos dependentes de tecnologias como telemóveis
              <br />
              e jogos de vídeo e 68% afirmou que os acampamentos ajudam os filhos
              no processo
              <br />
              de aprendizagem em sala de aula. A professora que coordenou o
              estudo concluiu que “o acampamento ajuda na compreensão do
              currículo escolar nas matérias de Geografia, História e Ciências
              porque as atividades mais comuns num acampamento são de contacto
              puro com a natureza, nas quais as crianças conseguem entender
              melhor os ecossistemas, respeitando assim o meio ambiente”.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="TenhoFilhaGUia">
        <p className="FilhaGuia2">Eu já tenho uma filha Guia...</p>
        <p className="FilhaGuiaText2">
          Impactos partilhados na primeira pessoa.
        </p>
        <div className="FilhaGuiaCard">
          <div className="CardFilhaGuiaTestimony">
            <Card className="CardFilhaGuia" style={{ width: '270px' }}>
              <Card.Text className="CardFilhaGuiaTestimony1">
                <p className="TextFilhaGuiaTestimony">
                  Tornou-se muito responsável. Com quase 16 anos trabalha bem em
                  equipa, tem uma noção do que é justo e sabe defender as suas
                  escolhas.
                  <br />
                  A formação que nós, pais, damos, é auxiliada pela presença das Guias.
                  <br />
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <p className="TextFilhaGuiaNameParents">
                  <strong>Ana Paula Rocha</strong>
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <p className="TextCardFilhaGuiaRelatives">
                  <strong>Mãe de uma Guia</strong>
                </p>
              </Card.Text>
            </Card>
          </div>
          <div className="CardFilhaGuiaTestimony2">
            <Card className="CardFilhaGuia" style={{ width: '270px' }}>
              <Card.Text className="CardFilhaGuiaTestimony">
                <p className="TextFilhaGuiaTestimony">
                  Tem sido uma caminhada vivida muito intensamente, onde valores
                  <br />
                  como a fé, a amizade, a partilha
                  <br />
                  e a ajuda ao próximo estão sempre presentes.
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <p className="TextFilhaGuiaNameParents">
                  <strong>Sílvia Garriapa</strong>
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <p className="TextCardFilhaGuiaRelatives">
                  <strong>Mãe de uma Guia</strong>
                </p>
              </Card.Text>
            </Card>
          </div>
          <div className="CardFilhaGuiaTestimony">
            <Card className="CardFilhaGuia" style={{ width: '270px' }}>
              <Card.Text className="CardFilhaGuiaTestimony">
                <p className="TextFilhaGuiaTestimony">
                  Tenho notado que elas têm crescido e evoluído com espírito de grupo, são amigas da natureza, colaboram 
                  <br />
                  e isso dá-me imensa satisfação porque
                  <br />
                  estão a preparar-se para enfrentar a realidade da vida.
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <p className="TextFilhaGuiaNameParents">
                  <strong>Manuel Cerqueira</strong>
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <p className="TextCardFilhaGuiaRelatives">
                  <strong>Pai de duas Guia</strong>
                </p>
              </Card.Text>
            </Card>
          </div>
          <div className="CardFilhaGuiaTestimony">
            <Card className="CardFilhaGuia" style={{ width: '270px' }}>
              <Card.Text className="CardFilhaGuiaTestimony">
                <p className="TextFilhaGuiaTestimony">
                  Serem Guias ajudou-as a adquirir competências de liderança, organização e a desenvolver a criatividade, a entreajuda e o sentido de responsabilidade.
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <p className="TextFilhaGuiaNameParents">
                  <strong>Sofia e José Ferreira</strong>
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <p className="TextCardFilhaGuiaRelatives">
                  <strong>Pais de duas Guia</strong>
                </p>
              </Card.Text>
            </Card>
          </div>
        </div>
        <div className="button-section">
          <button type="submit" className="guia-button">
            Queres ser Guia ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default PalavraAosPais;
