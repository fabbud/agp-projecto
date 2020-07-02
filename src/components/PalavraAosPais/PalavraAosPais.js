import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PalavraAosPais.css";
import Ajudamos from "../../assets/images/PalavraAosPais/Ajudamos1.jpg";
import Ritmo from "../../assets/images/PalavraAosPais/Ritmo2.jpg";
import Potencial from "../../assets/images/PalavraAosPais/Potencial3.jpg";
import Cidadas from "../../assets/images/PalavraAosPais/Cidadas4.jpg";
import Responsaveis from "../../assets/images/PalavraAosPais/Responsaveis5.jpg";

const PalavraAosPais = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="PalavraAosPais>">
      <div className="Palavra-aos-pais-banner" />
      <div className="PalavraAosPais1">
        <p className="FilhaGuia">Ter uma filha nas Guias, porque sim?</p>
        <p className="FilhaGuiaText">
          Nas Guias ajudamos as crianças e jovens raparigas a desenvolverem
          plenamente o seu potencial como cidadãs universais responsáveis.
        </p>
      </div>
      <div className="PalavraAosPais2">
        <div className="PalavraAosPais2-side">
          <div className="PalavraAosPais2-TextSide">
            <div className="PalavraAosPais2-title">
              Ajudamos, não o fazemos por elas.
            </div>
            <div className="PalavraAosPais2-text">
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
            </div>
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <img
            className="ImgPalavraAosPais"
            src={Ajudamos}
            alt="Ajudamos, não o fazemos por elas."
          />
        </div>
        <div className="row-reverse">
          <div className="PalavraAosPais2-side">
            <div className="PalavraAosPais2-TextSide">
              <div className="PalavraAosPais2-title">
                Plenamente, mas ao seu próprio ritmo.
              </div>
              <div className="PalavraAosPais2-text">
                Nas Guias apresentamos direções possíveis e áreas a explorar,
                mas é a Guia que escolhe a sua rota, que percorre de acordo com
                o seu passo, selecionando atividades, experimentando
                automotivação e liberdade de escolha. Desta forma, progride
                individualmente aprendendo também a interagir com êxito como
                parte de um grupo, desenvolvendo a sua imaginação e
                criatividade.
              </div>
            </div>
          </div>
          <div className="PalavraAosPais2-side">
            <img
              className="ImgPalavraAosPais"
              src={Ritmo}
              alt="Plenamente, mas ao seu próprio ritmo."
            />
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <div className="PalavraAosPais2-TextSide">
            <div className="PalavraAosPais2-title">
              O seu potencial, mas integrada numa patrulha..
            </div>
            <div className="PalavraAosPais2-text">
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
            </div>
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <img
            className="ImgPalavraAosPais"
            src={Potencial}
            alt="O seu potencial, mas integrada numa patrulha."
          />
        </div>
        <div className="row-reverse">
          <div className="PalavraAosPais2-side">
            <div className="PalavraAosPais2-TextSide">
              <div className="PalavraAosPais2-title">
                Cidadãs universais, atentas às realidades globais e locais.
              </div>
              <div className="PalavraAosPais2-text">
                Nas Guias procuramos deixar o mundo um melhor do que o
                encontrámos – assim, nos pediu o nosso fundador, Baden Powell.
                Nesta tão simples frase se encerra uma grande e desafiante
                missão na qual todas as Guias
                <br />
                são convidadas a participar, por um lado através do seu
                envolvimento e interesse pelas realidades do mundo, mas também,
                à sua medida, no contributo ativo em projetos de serviço.
                <br />
                O trabalho com a comunidade é um importante meio de educação:
                estimula o sentido de responsabilidade da Guia perante o mundo
                em
                <br />
                que se insere, proporciona-lhe a oportunidade de conhecer e
                respeitar diferentes culturas e maneiras de viver e realça a
                influência positiva que ela, como indivíduo, pode exercer no seu
                ambiente.
                <br />
              </div>
            </div>
          </div>
          <div className="PalavraAosPais2-side">
            <img
              className="ImgPalavraAosPais"
              src={Cidadas}
              alt="Cidadãs universais, atentas às realidades globais e locais."
            />
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <div className="PalavraAosPais2-TextSide">
            <div className="PalavraAosPais2-title">
              Responsáveis, com verdadeiro sentido de compromisso.
            </div>
            <div className="PalavraAosPais2-text">
              Nas Guias, valores como palavra de honra, honestidade, confiança,
              verdade, lealdade estão expressos nos Princípios e Lei que cada
              Guia
              <br />
              voluntariamente promete cumprir e pelos quais passa a orientar a
              sua vida.
            </div>
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <img
            className="ImgPalavraAosPais"
            src={Responsaveis}
            alt="Responsáveis, com verdadeiro sentido de compromisso."
          />
        </div>
        <div className="row-reverse">
          <div className="PalavraAosPais2-side">
            <div className="PalavraAosPais2-TextSide">
              <div className="PalavraAosPais2-title">
                O acampamento e o ar livre como espaços de aprendizagem.
              </div>
              <div className="PalavraAosPais2-text">
                Nas Guias, o acampamento e o contacto com a natureza são de
                extrema importância enquanto espaços educativos. Defendia Baden
                Powell que o acampamento é como “uma escola dos esforços e do
                desprendimento, nele as Guias aprendem a bastarem-se a elas
                próprias, suprimindo as carências existentes no campo com os
                meios que a Natureza oferece e com a técnica que aprenderam”.
                <br />
                Um estudo muito recente realizado pela Universidade de Plymouth
                [artigo completo
                <a href="https://www.plymouth.ac.uk/news/study-links-camping-and-happier-children">
                  aqui
                </a>
                ] sugere que crianças que acampam ao ar livre têm melhor
                desempenho escolar, além de serem mais saudáveis e felizes.
                Quatro em cada cinco pais inquiridos afirmou que os acampamentos
                têm um efeito positivo na educação escolar dos seus filhos, 98%
                indicou que os acampamentos fazem os filhos apreciarem a
                natureza, 95% respondeu que os filhos ficam mais felizes quando
                acampam e 93% que o acampamento ajuda no desenvolvimento de
                competências úteis para a vida adulta. Outros pais indicaram que
                os filhos ficam menos dependentes de tecnologias como telemóveis
                e jogos de vídeo e 68% afirmou que os acampamentos ajudam os
                filhos no processo de aprendizagem em sala de aula. A professora
                que coordenou o estudo concluiu que “o acampamento ajuda na
                compreensão do currículo escolar nas matérias de Geografia,
                História e Ciências porque as atividades mais comuns num
                acampamento são de contacto puro com a natureza, nas quais as
                crianças conseguem entender melhor os ecossistemas, respeitando
                assim o meio ambiente”.
              </div>
            </div>
          </div>
          <div className="PalavraAosPais2-side">
            <div className="ImgPalavraAosPaisDiv" />
          </div>
        </div>
      </div>
      <div className="TenhoFilhaGuia">
        <p className="FilhaGuia2">Eu já tenho uma filha Guia...</p>
        <p className="FilhaGuiaText2">
          Impactos partilhados na primeira pessoa.
        </p>
        <div className="FilhaGuiaCard">
          <div className="CardFilhaGuiaTestimony">
            <Card className="CardFilhaGuia" style={{ width: "260px" }}>
              <Card.Text className="CardFilhaGuiaTestimony1">
                <p className="TextFilhaGuiaTestimony">
                  Tornou-se muito responsável. Com quase 16 anos trabalha bem em
                  equipa, tem uma noção do que é justo e sabe defender as suas
                  escolhas.
                  <br />
                  A formação que nós, pais, damos, é auxiliada pela presença das
                  Guias.
                  <br />
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <div className="TextFilhaGuiaNameParents">Ana Paula Rocha</div>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <div className="TextCardFilhaGuiaRelatives">
                  Mãe de uma Guia
                </div>
              </Card.Text>
            </Card>
          </div>
          <div className="CardFilhaGuiaTestimony2">
            <Card className="CardFilhaGuia" style={{ width: "260px" }}>
              <Card.Text className="CardFilhaGuiaTestimony">
                <p className="TextFilhaGuiaTestimony">
                  Tem sido uma caminhada vivida muito intensamente, onde valores
                  <br />
                  como a fé, a amizade, a partilha
                  <br />e a ajuda ao próximo estão sempre presentes.
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <div className="TextFilhaGuiaNameParents">Sílvia Garriapa</div>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <div className="TextCardFilhaGuiaRelatives">
                  Mãe de uma Guia
                </div>
              </Card.Text>
            </Card>
          </div>
          <div className="CardFilhaGuiaTestimony">
            <Card className="CardFilhaGuia" style={{ width: "260px" }}>
              <Card.Text className="CardFilhaGuiaTestimony">
                <p className="TextFilhaGuiaTestimony">
                  Tenho notado que elas têm crescido e evoluído com espírito de
                  grupo, são amigas da natureza, colaboram
                  <br />
                  e isso dá-me imensa satisfação porque
                  <br />
                  estão a preparar-se para enfrentar a realidade da vida.
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <div className="TextFilhaGuiaNameParents">Manuel Cerqueira</div>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <div className="TextCardFilhaGuiaRelatives">
                  Pai de duas Guias
                </div>
              </Card.Text>
            </Card>
          </div>
          <div className="CardFilhaGuiaTestimony">
            <Card className="CardFilhaGuia" style={{ width: "260px" }}>
              <Card.Text className="CardFilhaGuiaTestimony">
                <p className="TextFilhaGuiaTestimony">
                  Serem Guias ajudou-as a adquirir competências de liderança,
                  organização e a desenvolver a criatividade, a entreajuda e o
                  sentido de responsabilidade.
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <div className="TextFilhaGuiaNameParents">
                  Sofia e José Ferreira
                </div>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <div className="TextCardFilhaGuiaRelatives">
                  Pais de duas Guias
                </div>
              </Card.Text>
            </Card>
          </div>
        </div>
        <div className="PalavraPais-button-section">
          <Link to="/contactos/formulário">
            <button
              type="submit"
              className="ser-guia-button PalavraPais-button"
            >
              Queres ser Guia ?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PalavraAosPais;
