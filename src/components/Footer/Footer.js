import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import facebook from '../../assets/images/SocialMedia/facebook_white_round.png';
import instagram from '../../assets/images/SocialMedia/instagram_white_round.png';
import dadosPessoaisPDF from '../../assets/pdfs/Política_de_Dados_Pessoais.pdf';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="col-sm-3">
          <h5>{t('footer.sedeNacional')}</h5>
          <ul>
            <li>
              <a href="https://goo.gl/maps/TGZTgHYotNwLF6wr7" target="_blank" rel="noopener noreferrer">
                Av. Miguel Bombarda
                <br />
                <span className="footerMorada">
                  Nº 128, R/C Esq.
                </span>
                <br />
                <span className="footerMorada">
                  1050-167 Lisboa.
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>{t('footer.contactos')}</h5>
          <ul>
            <li><span className="footer-contactos">{t('contactos.telefone')}</span></li>
            <li>
              <span className="footer-contactos">
                <a href="mailto:a.g.p@netcabo.pt">
                  {t('contactos.email')}
                </a>
              </span>
            </li>
          </ul>
          <div className="footer-social">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={facebook} className="footer-social-icon" alt="Facebook Link" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className="footer-social-icon" alt="Instagram Link" />
            </a>
          </div>
        </div>
        <div className="col-sm-3">
          <h5>
            {t('footer.associaçãoMundial')}
            {' '}
            <br />
            {t('footer.WAGGGS')}
          </h5>
          <ul>
            <li><a href="https://www.wagggs.org">https://www.wagggs.org/</a></li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>{t('footer.legal')}</h5>
          <ul>
            <li><a href="https://goo.gl/maps/TGZTgHYotNwLF6wr7">{t('footer.legal1')}</a></li>
            <li><a href="https://goo.gl/maps/TGZTgHYotNwLF6wr7">{t('footer.legal2')}</a></li>
            <li><a href="https://goo.gl/maps/TGZTgHYotNwLF6wr7">{t('footer.legal3')}</a></li>
          </ul>
          <h5 className="Dados">
            <a href={dadosPessoaisPDF} target="_blank" rel="noopener noreferrer">{t('footer.dados')}</a>
          </h5>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2020 Copyright Associação Guias de Portugal</p>
      </div>
    </footer>
  );
};
export default Footer;
