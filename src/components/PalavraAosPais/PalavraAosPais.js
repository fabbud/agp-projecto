import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './PalavraAosPais.css';
import Ajudamos from '../../assets/images/PalavraAosPais/Ajudamos1.jpg';
import Ritmo from '../../assets/images/PalavraAosPais/Ritmo2.jpg';
import Potencial from '../../assets/images/PalavraAosPais/Potencial3.jpg';
import Cidadas from '../../assets/images/PalavraAosPais/Cidadas4.jpg';
import Responsaveis from '../../assets/images/PalavraAosPais/Responsaveis5.jpg';

const PalavraAosPais = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  return (
    <div className="PalavraAosPais>">
      <div className="Palavra-aos-pais-banner" />
      <div className="PalavraAosPais1">
        <p className="FilhaGuia">{t('palavraAosPais.terUmaFilhaGuia')}</p>
        <p className="FilhaGuiaText">
          {t('palavraAosPais.terUmaFilhaGuiaText')}
        </p>
      </div>
      <div className="PalavraAosPais2">
        <div className="PalavraAosPais2-side">
          <div className="PalavraAosPais2-TextSide">
            <div className="PalavraAosPais2-title">
              {t('palavraAosPais.ajudamos')}
            </div>
            <div className="PalavraAosPais2-text">
              {ReactHtmlParser(t('palavraAosPais.ajudamosText'))}
            </div>
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <img
            className="ImgPalavraAosPais"
            src={Ajudamos}
            alt={t('palavraAosPais.ajudamos')}
          />
        </div>
        <div className="row-reverse">
          <div className="PalavraAosPais2-side">
            <div className="PalavraAosPais2-TextSide">
              <div className="PalavraAosPais2-title">
                {t('palavraAosPais.ritmo')}
              </div>
              <div className="PalavraAosPais2-text">
                {ReactHtmlParser(t('palavraAosPais.ritmoText'))}
              </div>
            </div>
          </div>
          <div className="PalavraAosPais2-side">
            <img
              className="ImgPalavraAosPais"
              src={Ritmo}
              alt={t('palavraAosPais.ritmo')}
            />
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <div className="PalavraAosPais2-TextSide">
            <div className="PalavraAosPais2-title">
              {t('palavraAosPais.potencial')}
            </div>
            <div className="PalavraAosPais2-text">
              {ReactHtmlParser(t('palavraAosPais.potencialText'))}
            </div>
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <img
            className="ImgPalavraAosPais"
            src={Potencial}
            alt={t('palavraAosPais.potencial')}
          />
        </div>
        <div className="row-reverse">
          <div className="PalavraAosPais2-side">
            <div className="PalavraAosPais2-TextSide">
              <div className="PalavraAosPais2-title">
                {t('palavraAosPais.cidada')}
              </div>
              <div className="PalavraAosPais2-text">
                {ReactHtmlParser(t('palavraAosPais.cidadaText'))}
              </div>
            </div>
          </div>
          <div className="PalavraAosPais2-side">
            <img
              className="ImgPalavraAosPais"
              src={Cidadas}
              alt={t('palavraAosPais.cidada')}
            />
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <div className="PalavraAosPais2-TextSide">
            <div className="PalavraAosPais2-title">
              {t('palavraAosPais.responsaveis')}
            </div>
            <div className="PalavraAosPais2-text">
              {t('palavraAosPais.responsaveisText')}
            </div>
          </div>
        </div>
        <div className="PalavraAosPais2-side">
          <img
            className="ImgPalavraAosPais"
            src={Responsaveis}
            alt={t('palavraAosPais.responsaveis')}
          />
        </div>
        <div className="row-reverse">
          <div className="PalavraAosPais2-side">
            <div className="PalavraAosPais2-TextSide">
              <div className="PalavraAosPais2-title">
                {t('palavraAosPais.acampamento')}
              </div>
              <div className="PalavraAosPais2-text">
                {ReactHtmlParser(t('palavraAosPais.acampamentoText'))}
              </div>
            </div>
          </div>
          <div className="PalavraAosPais2-side">
            <div className="ImgPalavraAosPaisDiv" />
          </div>
        </div>
      </div>
      <div className="TenhoFilhaGuia">
        <p className="FilhaGuia2">
          {t('palavraAosPais.euJatenhoUmaFilhaGuia')}
        </p>
        <p className="FilhaGuiaText2">{t('palavraAosPais.impactos')}</p>
        <div className="FilhaGuiaCard">
          <div className="CardFilhaGuiaTestimony">
            <Card className="CardFilhaGuia" style={{ width: '260px' }}>
              <Card.Text className="CardFilhaGuiaTestimony1">
                <p className="TextFilhaGuiaTestimony">
                  {t('palavraAosPais.textFilhaGuiaTestimony1')}
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <div className="TextFilhaGuiaNameParents">Ana Paula Rocha</div>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <div className="TextCardFilhaGuiaRelatives">
                  {t('palavraAosPais.textCardFilhaGuiaRelatives1')}
                </div>
              </Card.Text>
            </Card>
          </div>
          <div className="CardFilhaGuiaTestimony2">
            <Card className="CardFilhaGuia" style={{ width: '260px' }}>
              <Card.Text className="CardFilhaGuiaTestimony">
                <p className="TextFilhaGuiaTestimony">
                  {t('palavraAosPais.textFilhaGuiaTestimony2')}
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <div className="TextFilhaGuiaNameParents">Sílvia Garriapa</div>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <div className="TextCardFilhaGuiaRelatives">
                  {t('palavraAosPais.textCardFilhaGuiaRelatives2')}
                </div>
              </Card.Text>
            </Card>
          </div>
          <div className="CardFilhaGuiaTestimony">
            <Card className="CardFilhaGuia" style={{ width: '260px' }}>
              <Card.Text className="CardFilhaGuiaTestimony">
                <p className="TextFilhaGuiaTestimony">
                  {t('palavraAosPais.textFilhaGuiaTestimony3')}
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <div className="TextFilhaGuiaNameParents">Manuel Cerqueira</div>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <div className="TextCardFilhaGuiaRelatives">
                  {t('palavraAosPais.textCardFilhaGuiaRelatives3')}
                </div>
              </Card.Text>
            </Card>
          </div>
          <div className="CardFilhaGuiaTestimony">
            <Card className="CardFilhaGuia" style={{ width: '260px' }}>
              <Card.Text className="CardFilhaGuiaTestimony">
                <p className="TextFilhaGuiaTestimony">
                  {t('palavraAosPais.textFilhaGuiaTestimony4')}
                </p>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaNames">
                <div className="TextFilhaGuiaNameParents">
                  Sofia e José Ferreira
                </div>
              </Card.Text>
              <Card.Text className="CardFilhaGuiaRelatives">
                <div className="TextCardFilhaGuiaRelatives">
                  {t('palavraAosPais.textCardFilhaGuiaRelatives4')}
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
              {t('palavraAosPais.buttonPalavraAosPais')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PalavraAosPais;
