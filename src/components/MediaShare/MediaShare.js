import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FacebookMessengerShareButton, FacebookMessengerIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import './MediaShare.css';

const MediaShare = (props) => {
  const { t } = useTranslation();
  const pageURL = window.location.href;
  console.log(pageURL);
  // const pagePath = window.location.pathname;
  // put the path
  const dataURL = 'http://www.guiasdeportugal.org/';
  const mainText = 'Veja esta página da AGP:';
  const emailSubject = 'Associação Guias de Portugal';
  const facebookAppId = '12345';

  const { currentPath } = props;

  return (
    <div className="MediaShare">
      <div className="share-text">
        { currentPath ? `${t('media.partilhaHomepageLabel')}` : `${t('media.partilhaPaginaLabel')}`}
      </div>
      <div>
        <FacebookShareButton
          className="share-button"
          url={dataURL}
        >
          <FacebookIcon className="share-icon" round size={30} />
        </FacebookShareButton>
        <TwitterShareButton
          className="share-button"
          url={dataURL}
        >
          <TwitterIcon className="share-icon" round size={30} />
        </TwitterShareButton>
        <LinkedinShareButton
          className="share-button"
          url={dataURL}
        >
          <LinkedinIcon className="share-icon" round size={28} />
        </LinkedinShareButton>
        <PinterestShareButton
          className="share-button"
          url={dataURL}
          media={dataURL}
        >
          <PinterestIcon className="share-icon" round size={30} />
        </PinterestShareButton>
        <WhatsappShareButton
          className="share-button"
          url={dataURL}
        >
          <WhatsappIcon className="share-icon" round size={30} />
        </WhatsappShareButton>
        <FacebookMessengerShareButton
          className="share-button"
          url={dataURL}
          // appId={facebookAppId}
        >
          <FacebookMessengerIcon className="share-icon" round size={30} />
        </FacebookMessengerShareButton>
        <EmailShareButton
          className="share-button"
          url={dataURL}
          subject={emailSubject}
          body={mainText}
        >
          <EmailIcon className="share-icon" round size={30} />
        </EmailShareButton>
      </div>
    </div>
  );
};

MediaShare.propTypes = {
  currentPath: PropTypes.string.isRequired,
};

export default MediaShare;
