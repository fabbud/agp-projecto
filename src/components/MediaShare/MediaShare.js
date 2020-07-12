import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import './MediaShare.css';

const MediaShare = (props) => {
  const { t } = useTranslation();
  const { page } = props;
  const currentPage = window.location.href;
  const currentPath = window.location.pathname;
  const dataPage = 'https://associacao-guias-de-portugal.netlify.app';
  const mainText = 'Veja esta página da AGP:';
  const emailSubject = 'Associação Guias de Portugal';
  const twitterAccount = 'AGP';

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(props.page);
  }, []);


  return (
    <div className="MediaShare">
      <div className="share-text">
        { page ? `${t('media.partilhaHomepageLabel')}` : `${t('media.partilhaPaginaLabel')}`}
      </div>
      <FacebookShareButton
        className="share-button"
        url={dataPage}
      >
        <FacebookIcon className="share-icon" round size={30} />
      </FacebookShareButton>

      <LinkedinShareButton
        className="share-button"
        url={dataPage}
      >
        <LinkedinIcon className="share-icon" round size={28} />
      </LinkedinShareButton>

      <PinterestShareButton
        className="share-button"
        media={dataPage}
      >
        <PinterestIcon className="share-icon" round size={30} />
      </PinterestShareButton>

      <TwitterShareButton
        className="share-button"
        url={dataPage}
        // via={twitterAccount}
      >
        <TwitterIcon className="share-icon" round size={30} />
      </TwitterShareButton>

      <WhatsappShareButton
        className="share-button"
        url={dataPage}
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

MediaShare.propTypes = {
  page: PropTypes.string.isRequired,
};

export default MediaShare;
