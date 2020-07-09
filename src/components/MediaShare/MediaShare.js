import React from 'react';
import { useTranslation } from 'react-i18next';
import { WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import './MediaShare.css';

const MediaShare = (props) => {
  const { t } = useTranslation();
  const currentPage = window.location.href;
  const currentPath = window.location.pathname;
  const dataPage = `https://associacao-guias-de-portugal.netlify.app`;
  const mainText = `Veja esta página da AGP:`;
  const emailSubject = `Associação Guias de Portugal`;
  const facebookHashtag = '#agp';

  return (
    <div className="MediaShare">
      <div className="share-text">{t('media.partilhaLabel')}</div>
      <FacebookShareButton
        className="share-button"
        url={dataPage}
        // quote={mainText}
        // hashtag={facebookHashtag}
      >
        <FacebookIcon className="share-icon" round size={30} />
      </FacebookShareButton>

      <LinkedinShareButton
        className="share-button"
        url={dataPage}
      >
        <LinkedinIcon className="share-icon" round size={30} />
      </LinkedinShareButton>

      <WhatsappShareButton
        className="share-button"
        url={dataPage}
        title={mainText}
      >
        <WhatsappIcon className="share-icon" round size={30} />
      </WhatsappShareButton>

      <EmailShareButton
        className="share-button"
        url={dataPage}
        subject={emailSubject}
        body={mainText}
      >
        <EmailIcon className="share-icon" round size={30} />
      </EmailShareButton>
    </div>
  );
};

export default MediaShare;
