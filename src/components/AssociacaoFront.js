import React from 'react';
import './AssociacaoFront.css'
import Associacao from '../assets/Guias_Portugal_Associacao.jpg'
import Anos20 from '../assets/Guias_Portugal_Anos_20.jpg'
import Anos30 from '../assets/Guias_Portugal_Anos_30.jpg'
import VisitaBPOlaveMadeira from '../assets/Guias_Portugal_Visita_BP_Olave_Madeira.jpg'
import VisitaOlave from '../assets/Guias_Portugal_vista_Olave_Portugal.jpg'
import Anos60 from '../assets/Guias_Portugal_Anos_60.jpg'
import Anos70 from '../assets/Guias_Portugal_Anos_70.jpg'
import Anos80 from '../assets/Guias_Portugal_Anos_80.jpg'
import Anos90 from '../assets/Guias_Portugal_Anos_90.jpg'
import Anos90_V2 from '../assets/Guias_Portugal_Anos_90_V2.jpg'
import Anos2000 from '../assets/Guias_Portugal_Anos_2000.jpg'
import Anos2010 from '../assets/Guias_Portugal_Anos_2010.jpg'
import Actualidade from '../assets/Guias_Portugal_Atualidade.jpg'
import VCV from '../assets/Guias_Portugal_Vozes_Contra_Violência.jpg'



function AssociacaoFront() {
    return (
        <div className="Body">
            <div className="fotoAssociacao"></div>
            <div className="associacao">
                <h1>A ASSOCIAÇÃO</h1>
                <p>A Associação Guias de Portugal <strong>(AGP)</strong> é uma associação de utilidade pública,  assente no voluntariado e que promove o Guidismo – movimento de educação não formal, baseado no <strong>método</strong> criado por Robert Baden-Powell.</p>

                <p> Tem como <strong>missão</strong> proporcionar às raparigas e jovens mulheres a oportunidade de desenvolverem plenamente o seu potencial como cidadãs universais responsáveis,  através de um  <strong className="strong"> método </strong>próprio: atribuição gradual de responsabilidade, fomentando o trabalho de grupo e a sua autonomia, comprometendo-se com a comunidade onde estão inseridas, tendo como espaço privilegiado de formação o ar livre. </p>

                <p>A AGP é membro da Associação Mundial das Guias - <strong>WAGGGS</strong> (World Association of Girl Guides and Girl Scouts) , a que pertencem 10 milhões de Guias espalhadas por 150 países.</p>
            </div>
            <br />
            <div className="guidismo">
                <p>O Guidismo procura contribuir para a formação de carácter, através de uma pedagogia ativa,  baseada no jogo, desenvolvendo capacidades e atitudes e promovendo a vivência de valores fundamentais.</p>
            </div>
            <h2 className="historiaGuidismoH2">História do Guidismo em Portugal</h2>
            <span className="fotosHistoria">
                <div>
                    <h3>Anos 20<br />As Primeiras Guias em Portugal</h3>
                    <p>Em Portugal, o Movimento Guidista surge devido ao entusiasmo de antigas guias inglesas residentes em Portugal que, nos anos 20, juntam grupos de raparigas inglesas e portuguesas, no Porto e depois em Carcavelos e na Madeira, com as quais formam as primeiras Companhias. Estas Companhias estão associadas a colégios ingleses e dependem diretamente da Associação Mundial.</p>
                </div>
                <img src={Anos20} alt="Guias de Portugal Anos 20" />

            </span>
            <span className="fotosHistoriaReverse">
                <div>
                    <h3>1931<br />Primeira visita de BP e Olave a Portugal</h3>
                    <p>Baden-Powell e Olave, os fundadores do Movimento, visitam a Madeira. Neste ano, começam a ser dinamizadas as primeiras Companhias de Guias portuguesas, no continente e na Madeira.</p>
                    <h3>1934<br />Aprovação dos Estatutos da AGP</h3>
                    <p>Os Estatutos da AGP são aprovados pelo Governo e elege-se a primeira Comissária Nacional, Fernanda D' Orey, e a Comissária Internacional, Miss Pope, Guia inglesa que muito ajudou na consolidação da nossa Associação. Este ano foi ainda marcado pela receção do segundo cruzeiro de Guias e Escuteiros Britânicos, cujo último destino era Lisboa.  Nesse dia, cerca de 200 Guias caminharam juntas na cidade, sendo vistas pela primeira vez, pela população. O espírito do Movimento estende-se por Portugal e pelas Províncias Ultramarinas.</p>
                </div>
                <img src={VisitaBPOlaveMadeira} alt="Guias Portugal visita BP Olave Madeira 1931" />
            </span>
            <span className="fotosHistoria">
                <div>
                    <h3>1936<br />Dia Mundial do Pensamento</h3>
                    <p>Comemora-se pela primeira vez em Portugal, o Dia Mundial do Pensamento (22 de fevereiro).</p>
                    <h3>1937<br />Cessação de actividades</h3>
                    <p>A situação da Associação altera-se com o pedido de cessação das atividades feito pelo Governo, motivado pela criação da Mocidade Portuguesa. Agravada com os anos de agitação da Guerra Civil de Espanha e mais tarde com a II Guerra Mundial, o Movimento acaba por ser suspenso no continente e nos Açores. Apenas a Madeira se mantém em plena atividade, dinamizada pela "Chefe Carolina", que desenvolve diversas ações sociais na Ilha, entre elas, a criação da fundação "O Ninho", um lar de apoio a crianças necessitadas, onde as Guias prestavam serviço e para onde eram dirigidos os fundos conseguidos nas atividades por elas planeadas. Esta Fundação ainda se mantém ativa nos dias de hoje.</p>
                </div>
                <img src={Anos30} alt="Guias de Portugal Anos 30"></img>
            </span>
            <span className="fotosHistoriaReverse">
                <div>
                    <h3>1954<br />Reinício das atividades</h3>
                    <p>Por iniciativa de um grupo de antigas Guias que consegue obter o apoio do Patriarcado de Lisboa e do Ministério da Educação, a Associação reinicia as atividades em Lisboa.  O grupo elege como Presidente Maria do Carmo Pombeiro e como Comissária Nacional Isabel de Estarreja, que dão um forte impulso à Associação iniciando um período de grande expansão pelo Continente e Províncias Ultramarinas.</p>
                    <h3>1960<br />Visita da Chefe Mundial das Guias</h3>
                    <p>A AGP recebe a Chefe Mundial das Guias, que passa por Portugal no âmbito de uma viagem que realizou pelos países onde o Guidismo se encontrava em desenvolvimento.</p>
                </div>
                <img src={VisitaOlave} alt="Guias de Portugal visita Olave Portugal 1960" />
            </span>
            <span className="fotosHistoria">
                <div>
                    <h3>1963<br />Membro Aspirante da WAGGGS </h3>
                    <p>A AGP é aceite como Membro Aspirante da WAGGGS - World Association of Girl Guides and Girl Scouts – (Associação Mundial das Guias) na 18ª Conferência Mundial realizada na Dinamarca. Foram, no entanto, necessários 12 anos e uma visita da Associação Mundial a diversas Companhias de Guias do nosso País, para a AGP ser reconhecida como Membro Efetivo da WAGGGS, na 22ª Conferência Mundial, que teve lugar em Brighton, Inglaterra, em 1975.  A nova condição foi motivo de grande alegria para todas, porque se demonstrou que o Guidismo estava, de novo, bem implantado em Portugal.</p>
                    <h3>Anos 70<br />País de lés a lés </h3>
                    <p>Na década de 70, já existiam Companhias de Guias em Viana do Castelo, Porto, Braga, Guarda, Viseu, Aveiro, Leiria, Lisboa, Almada, Beja, Portalegre, Batalha, Faro, Santarém, Castelo Branco, Açores e Madeira.</p>
                </div>
                <img src={Anos60} alt="Guias de Portugal anos 60" />
            </span>
            <span className="fotosHistoriaReverse">
                <div>
                    <h3>1973<br />I Acampamento Nacional</h3>
                    <p>Realiza-se o I Acampamento Nacional, na Quinta do Ripilau, em Vila Chã de Ourique, sob o tema "Na Aventura da Descoberta", que contou com a participação de cerca de 1000 Guias portuguesas, incluindo Guias moçambicanas e Guias angolanas, e com a presença de Guias inglesas e polacas.</p>
                    <h3>1978<br />II Acampamento Nacional</h3>
                    <p>Foi organizado o II Acampamento Nacional com o tema "Festa no Mundo", em que se celebrou a aceitação da AGP como Membro Efetivo da WAGGGS. No Bombarral, encontravam-se Patrulhas com nomes de cidades de todo o mundo e foram convidadas as Guias do México.</p>
                    <h3>1985<br />Conselho Nacional de Juventude</h3>
                    <p>A AGP procurou sempre colaborar com outras organizações juvenis, sendo neste ano um dos membros fundadores do Conselho Nacional de Juventude. Também neste ano foi declarada Associação de Utilidade Pública</p>
                </div>
                <img src={Anos70} alt="Guias de Portugal anos 70" />
            </span>
            <span className="fotosHistoria">
                <div>
                    <h3>1986<br />Conferência Europeia</h3>
                    <p>A AGP, em conjunto com as associações de escuteiros portuguesas, teve a honra de organizar a Conferência Europeia das Guias e Escuteiros que decorreu em Ofir, Esposende, e onde estiveram representadas associações de 24 países da Europa.</p>
                    <h3>1988<br />III Acampamento Nacional</h3>
                    <p>No ano em que se celebraram os 500 anos dos Descobrimentos Marítimos Portugueses, realizou-se o III Acampamento Nacional, no Vale do Zebro (Barreiro), sob o tema “Vale a pena correr o risco”.</p>
                    <h3>1990<br />Apadrinhamento do coala</h3>
                    <p>A AGP apadrinha o coala no Jardim Zoológico de Lisboa, participando em iniciativas para a proteção da espécie em vias de extinçã</p>
                </div>
                <img src={Anos80} alt="Guias de Portugal anos 80" />
            </span>
            <span className="fotosHistoriaReverse">
                <div>
                    <h3>1992<br />Prémio Olave</h3>
                    <p>A Patrulha Poney, do Ramo Moinho, recebe o Prémio Olave, pelo excelente trabalho de serviço comunitário desenvolvido para os refugiados da guerra da Bósnia. Criado para homenagear a memória da Chefe Mundial, este prémio anual procura manter vivo o espírito do “Serviço”.</p>
                    <h3>1994<br />Projecto Pacotes da Paz</h3>
                    <p>A AGP, em colaboração com o Alto Comissariado das Nações Unidas para os Refugiados, promove o Projeto “Pacotes da Paz”, recolhendo e enviando material de higiene pessoal e material escolar para as crianças vítimas da guerra em Angola e Moçambique.</p>
                    <h3>1994<br />IV Acampamento Nacional</h3>
                    <p>Realiza-se o IV Acampamento nacional, no Cartaxo, com o tema “Junta-te às Estrelas”.</p>
                </div>
                <img src={Anos90} alt="Guias de Portugal anos 90" />
            </span>
            <span className="fotosHistoria">
                <div>
                    <h3>1997<br />V Acampamento Nacional</h3>
                    <p>Em Sesimbra, com o tema “Os Oceanos”, acontece o V Acampamento Nacional, denominado Nacional e Internacional, contando com a presença de Guias dos EUA, Irlanda, Japão e Hong-Kong.</p>
                    <h3>1999<br />Projecto SOS Kosovo</h3>
                    <p>As Guias envolvem-se na Missão SOS Kosovo, que consistiu na recolha e organização dos donativos da população - alimentos, roupas e cobertores, para ajudar o tão massacrado e necessitado povo do Kosovo.</p>
                    <h3>1999<br />I Acamp. de Chefes e Subchefes de Patrulha</h3>
                    <p>Realiza-se o I Acampamento Nacional de Chefes e Subchefes de Patrulha dos Ramos Aventura e Caravela, em Belmonte. Este acampamento contou também com a presença de Guias de Moçambique e de São Tomé e Príncipe.</p>
                </div>
                <img src={Anos90_V2} alt="Guias de Portugal anos 90" />
            </span>
            <span className="fotosHistoriaReverse">
                <div>
                    <h3>1999<br />Conferência Olave Baden-Powel Society</h3>
                    <p>Realiza-se em Óbidos, a Conferência da Olave Baden-Powell Society, organização fundada em 1984 com o objetivo de apoiar o desenvolvimento do Guidismo no mundo, lideradapela Princesa Benedikte da Dinamarca.</p>
                    <h3>2001<br />Condecoração da Presidência da República</h3>
                    <p>Por todo o trabalho desenvolvido pelo Movimento Guidista e no âmbito das comemorações dos 70 anos da AGP, Sua Excelência o Presidente da República Dr. Jorge Sampaio, atribuiu à Associação, a Condecoração de Membro Honorário da Ordem de Mérito.</p>
                    <h3>2002<br />VI Acampamento Nacional</h3>
                    <p>Realiza-se o VI Acampamento Nacional, em Viana do Castelo, com o tema “Guidismo É... Crescer, Ser Capaz, Arriscar e Aceitar Desafios”.</p>
                </div>
                <img src={Anos2000} alt="Guias de Portugal anos 2000" />
            </span>
            <span className="fotosHistoria">
                <div>
                    <h3>2005/2016<br />Ação Saca-Rolhas</h3>
                    <p>A AGP lança um projeto ambiental pioneiro em Portugal, a Ação Saca-Rolhas, que consistia na recolha de rolhas, recuperando-as para uma nova utilização. Este projeto contribuiu para várias instituições de cariz social.</p>
                    <h3>2006<br />VII Acampamento Nacional</h3>
                    <p>No ano comemorativo dos 75 anos do Guidismo em Portugal, realiza-se o VII Acampamento Nacional, em Alcochete, sob o tema "Cidadãs do Mundo".</p>
                    <h3>2009/2010<br />Projeto Ter Mãos Grandes </h3>
                    <p>A AGP associa-se à Fundação Fé e Cooperação, participando numa iniciativa de apoio a Timor-Leste, Moçambique e Angola. A Associação angariou fundos suficientes para concretizar três projetos de desenvolvimento local, através da venda de bolachas feitas pelas Guias, no âmbito do Projeto Ter Mãos Grandes.</p>
                </div>
                <img src={Anos2010} alt="Guias de Portugal anos 2010" />
            </span>
            <span className="fotosHistoriaReverse">
                <div>
                    <h3>2012<br />VIII Acampamento Nacional</h3>
                    <p>Realiza-se o VIII Acampamento Nacional, em Soutelo (Braga), com o tema “100 anos a mudar vidas”, assinalando o final das comemorações do Centenário do Guidismo no Mundo. Participaram Guias de Hong-Kong e da Nova Zelândia.</p>
                    <h3>2015<br />II Acamp. de Chefes e Subchefes de Patrulha</h3>
                    <p>Realiza-se o II Acampamento de Chefes e Subchefes de Patrulha dos Ramos Aventura e Caravela, em Santa Margarida (Santarém).</p>
                </div>
                <img src={Actualidade} alt="Guias de Portugal actualidade" />
            </span>
            <span className="fotosHistoria">
                <div>
                    <h3>2015/2017<br />Projeto Vozes Contra a Violência</h3>
                    <p>A AGP implementou o projeto Vozes Contra a Violência, lançado pela WAGGGS, capacitando as Guias como vozes ativas contra a violência, que realizaram mais de 200 ações em cerca de 80 escolas, sensibilizando mais de 5000 crianças e jovens, com idades entre os 6 e os 25 anos, em todo o País.</p>
                    <h3>2017<br />Missão Esperança</h3>
                    <p>A AGP apoiou as vítimas do incêndio de Pedrógão Grande, numa pimeira fase com recolha de bens necessários e numa segunda com a mobilização nacional de Guias para os dois municípios mais afetados, Castanheira de Pera e Figueiró do Vinhos</p>
                </div>
                <img src={VCV} alt="Guias de Portugal Vozes Contra a Violência" />
            </span>
            <div classname="button-section">
            <button type="submit" className="guia-button associacao-button">Queres ser Guia ?</button>
            </div>
        </div >
    )

}

export default AssociacaoFront;