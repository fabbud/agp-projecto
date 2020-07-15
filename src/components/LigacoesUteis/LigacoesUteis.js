import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LigacoesUteis.css';

const LigacoesUteis = () => {
  const { t } = useTranslation();
  const links = [
    {
      title: t('ligacoesUteis.WAGGGS'),
      website: 'https://www.wagggs.org/en/',
    },
    {
      title: t('ligacoesUteis.WAGGGSeuropa'),
      website: 'https://www.wagggs.org/en/our-world/europe-region/',
    },
    {
      title: t('ligacoesUteis.centrosMundiais'),
      website: 'https://www.wagggs.org/en/our-world/world-centres/',
    },
    {
      title: t('ligacoesUteis.cançoesGuidistas'),
      website: 'https://myvirtualsongbook.wordpress.com/',
    },
    {
      title: t('ligacoesUteis.cleanUpWorld'),
      website: 'https://www.cleanuptheworld.org/',
    },
    {
      title: t('ligacoesUteis.desenvolvimentoSustentavel'),
      website: 'https://www.un.org/sustainabledevelopment/',
    },
    {
      title: t('ligacoesUteis.apambiente'),
      website: 'http://apambiente.pt/',
    },
    {
      title: t('ligacoesUteis.icnf'),
      website: 'http://www.icnf.pt/',
    },
    {
      title: t('ligacoesUteis.lpn'),
      website: 'https://www.lpn.pt/',
    },
    {
      title: t('ligacoesUteis.quercus'),
      website: 'https://www.quercus.pt/',
    },
    {
      title: t('ligacoesUteis.un'),
      website: 'https://www.un.org/en/',
    },
    {
      title: t('ligacoesUteis.unicef'),
      website: 'https://www.unicef.pt/',
    },
    {
      title: t('ligacoesUteis.ipdj'),
      website: 'https://ipdj.gov.pt/',
    },
    {
      title: t('ligacoesUteis.igeoe'),
      website: 'https://www.igeoe.pt/index.php?id=1',
    },
    {
      title: t('ligacoesUteis.sns'),
      website: 'https://www.sns.gov.pt/',
    },
    {
      title: t('ligacoesUteis.dgs'),
      website: 'https://www.dgs.pt/',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="LigacoesUteis">
      <div className="ligacoes-title">{t('ligacoesUteis.title')}</div>
      <div className="ligacoes-text">{t('ligacoesUteis.intro')}</div>
      <div className="ligacoes-list">
        <ul className="ligacoes-items">
          { links.map((link) => <li><a href={link.website} target="_blank" rel="noopener noreferrer">{link.title}</a></li>)}
        </ul>
      </div>
    </div>
  );
};

export default LigacoesUteis;
