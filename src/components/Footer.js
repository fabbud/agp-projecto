import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

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
        <h5>Contactos</h5>
        <ul>
          <li><a href="https://goo.gl/maps/TGZTgHYotNwLF6wr7">217 938 227</a></li>
          <li><a href="https://goo.gl/maps/TGZTgHYotNwLF6wr7">a.g.p@netcabo.pt</a></li>
        </ul>
      </div>
      <div className="col-sm-3">
        <h5>
          Associação Mundial
          {' '}
          <br />
          {' '}
          WAGGGS
        </h5>
        <ul>
          <li><a href="https://www.wagggs.org">https://www.wagggs.org/</a></li>
        </ul>
      </div>
      <div className="col-sm-3">
        <h5>Legal</h5>
        <ul>
          <li><a href="https://goo.gl/maps/TGZTgHYotNwLF6wr7">Terms of Service</a></li>
          <li><a href="https://goo.gl/maps/TGZTgHYotNwLF6wr7">Terms of Use</a></li>
          <li><a href="https://goo.gl/maps/TGZTgHYotNwLF6wr7">Privacy Policy</a></li>
        </ul>
        <h5><strong>Política de Dados Pessoais</strong></h5>
      </div>
    </div>
    <div className="footer-copyright">
      <p>© 2020 Copyright Associação Guias de Portugal</p>
    </div>
  </footer>
)
};
export default Footer;
