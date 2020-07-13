import React from 'react';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot,
} from '@material-ui/lab';
import { Link } from 'react-router-dom';
import './TimelineGuidista.css';

const TimelineGuidista = () => {
  const timelineData = [
    {
      date: 'Década de 70, 1985 e 1996',
      title: 'Maratona do Quadrado de Lã',
      text: 'Confeção de mantas, a partir de pequenos quadrados de lã feitos pelas Guias e pelas comunidades de todo o País e que foram distribuídas aos sem abrigo e outras pessoas carenciadas.',
      image: 'https://drive.google.com/uc?export=view&id=199aNfL6xoQUKMWWPOEEdFKC8I0h5FF1H',
      link: '',
    },
    {
      date: '1985',
      title: 'Bola de Neve',
      text: 'Projeto realizado em colaboração com a UNICEF, para recolha de alimentos para serem enviados para as crianças da Etiópia, flageladas pela fome.',
      image: 'https://drive.google.com/uc?export=view&id=1qq8yRTlg2z6EdPFvZzHSN1wJcn4iFd3N',
      link: '',
    },
    {
      date: '1992',
      title: 'Apoio aos refugiados vindos da Bósnia',
      text: 'Esta iniciativa mereceu o Prémio Olave, o mais importante dado pela Associação Mundial das Guias (WAGGGS) para projetos de serviço ao próximo.',
      image: 'https://drive.google.com/uc?export=view&id=1PEf3CpPX1-31lwq4jMS_MuqXmALE528_',
      link: '',
    },
    {
      date: '1994',
      title: 'Pacotes da Paz',
      text: 'Projeto realizado em colaboração com o Alto Comissariado das Nações Unidas para os Refugiados, para recolha e envio de material de higiene pessoal e material escolar para as crianças atingidas pela guerra em Angola e Moçambique.',
      image: 'https://drive.google.com/uc?export=view&id=1sz0_z6EVy79ljWSvYn4ohcNRB0HFKruT',
      link: '',
    },
    {
      date: '1999',
      title: 'SOS Kosovo',
      text: 'Colaboração na recolha, triagem e embalagem de alimentos e cobertores para o Kosovo, país onde se vivia uma grave crise humanitária, motivada pela guerra.',
      image: 'https://drive.google.com/uc?export=view&id=171fzBZsBrdgJORIFGi-gAfC6BPn7vkUE',
      link: '',
    },
    {
      date: '2005 a 2016',
      title: 'Ação Saca-Rolhas',
      text: 'Projeto de recolha de rolhas usadas, sendo doadas a instituições de solidariedade social, que as recuperaram para uma nova utilização, promovendo a angariação de fundos, tendo uma dupla finalidade: contribuir para a preservação do ambiente, reaproveitando um recurso natural (cortiça) e colaborar com instituições de solidariedade social, numa perspetiva de comunidade.',
      image: 'https://drive.google.com/uc?export=view&id=1i3St8lunBQJcbnrjb0Jk3UmKkscbkEyv',
      link: 'ação-saca-rolhas',
    },
    {
      date: '2005 a 2009',
      title: 'Vamos Utopiar',
      text: 'Projeto de sensibilização para a problemática da discriminação associada ao racismo e à xenofobia, incentivando ações que gerassem a mudança de mentalidades, em pareceria com o Graal, o Alto Comissariado para a Imigração e Minorias Étnicas, a Luso Temp e a Associação de Melhoramentos e Recreativo do Talude.',
      image: 'https://drive.google.com/uc?export=view&id=19RcfxwdIvJjXHt8ZGTzguCOLr34U9xQV',
      link: 'vamos-utopiar',
    },
    {
      date: '2008 e 2009',
      title: 'Portugalta',
      text: 'Projeto realizado em parceria com as Guias de Malta com o objetivo de promover uma alimentação saudável, envolvendo uma aprendizagem aprofundada sobre o tema e uma intervenção nas comunidades com atividades sobre nutrição.',
      image: 'https://drive.google.com/uc?export=view&id=1_clkQWCesA6MWFKUUDQy2EUIq0KNDoSO',
      link: 'portugalta',
    },
    {
      date: '2009/2010 e 2013/2014',
      title: 'Ter Mãos Grandes',
      text: 'Projeto de apoio a três países de língua oficial portuguesa (Timor-Leste, Moçambique e Angola), através da angariação de fundos para realizar projetos de desenvolvimento local em parceria com a Fundação Fé e Cooperação. Missão em Cabo Verde, na comunidade da Achada de S. Filipe, em parceria com os Irmãos Missionários e a FEC, enquadrada num programa local de educação para o desenvolvimento e na sensibilização para o cumprimento dos Objetivos de Desenvolvimento do Milénio.',
      image: 'https://drive.google.com/uc?export=view&id=16i705zJNWs1ZqaBlFNImdJkuENSgqzPi',
      link: 'ter-mãos-grandes',
    },
    {
      date: '2015 a 2017',
      title: 'Vozes Contra a Violência',
      text: 'Projeto lançado pela Associação Mundial com o objetivo de promover à escala global um movimento de reflexão e de mudança de comportamentos em torno do tema da violência sobre as raparigas e jovens mulheres.',
      image: 'https://drive.google.com/uc?export=view&id=1lPy59QhbWdxbCcsPtXk5yNHo7cKmug8B',
      link: 'vozes-contra-a-violência',
    },
  ];

  const dataLength = timelineData.length;
  const windowSize = window.innerWidth;

  return (
    <div className="TimelineGuidista">
      <Timeline align={windowSize < 1000 ? 'left' : 'alternate'}>
        {timelineData.map((timeline, index) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <img className="timeline-image" src={timeline.image} alt={timeline.title} />
              </TimelineDot>
              <TimelineConnector className={(index === (dataLength - 1)) ? 'timeline-last-connector' : 'timeline-connector'} />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline-box">
                <div className="timeline-date">{timeline.date}</div>
                <div className="timeline-title">
                  { timeline.link
                    ? <Link to={`/pedagogia/metodo-guidista/projetos/${timeline.link}`}>{timeline.title}</Link>
                    : `${timeline.title}` }
                </div>
                <div className="timeline-text">{timeline.text}</div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimelineGuidista;
