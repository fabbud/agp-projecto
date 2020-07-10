import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './MetodoGuidista.css';
import aprenderFazendo from '../../assets/images/MetodoGuidista/Aprender_Fazendo2.png';
import atividadesArLivre from '../../assets/images/MetodoGuidista/Atividades_ao_Ar_Livre2.png';
import autoDesenvolvimento from '../../assets/images/MetodoGuidista/Autodesenvolvimento_Progressivo2.png';
import compromisso from '../../assets/images/MetodoGuidista/Compromisso2.png';
import servicoComunitario from '../../assets/images/MetodoGuidista/Serviço_Comunitário2.png';
import simbolismo from '../../assets/images/MetodoGuidista/Simbolismo2.png';
import sistemaPatrulhas from '../../assets/images/MetodoGuidista/Sistema_de_Patrulhas2.png';
import cooperacaoAtiva from '../../assets/images/MetodoGuidista/Cooperação_Ativa2.png';

const MetodoGuidista = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Metodo-Guidista">
      <div className="guidista-banner" />
      <div className="guidista-intro">
        <div className="guidista-intro-title">{t('metodoGuidista.introTitulo')}</div>
        <div className="guidista-intro-text">{t('metodoGuidista.introTexto')}</div>
      </div>
      <div className="guidista-metodos">
        <div className="metodos-title">{t('metodoGuidista.oitoFerramentasTitulo')}</div>
        <div className="metodo-box-group">
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.compromisso')}</div>
            <img className="metodo-box-img" src={compromisso} alt="Compromisso" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.sistemaPatrulhas')}</div>
            <img className="metodo-box-img" src={sistemaPatrulhas} alt="Patrulha" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.aprenderFazendo')}</div>
            <img className="metodo-box-img" src={aprenderFazendo} alt="Fazer" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.autodesenvolvimento')}</div>
            <img className="metodo-box-img" src={autoDesenvolvimento} alt="Autodesenvolvimento" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.simbolismo')}</div>
            <img className="metodo-box-img" src={simbolismo} alt="Simbolismo" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.cooperacaoAtiva')}</div>
            <img className="metodo-box-img" src={cooperacaoAtiva} alt="Cooperação" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.atividadesArLivre')}</div>
            <img className="metodo-box-img" src={atividadesArLivre} alt="Atividades" />
          </div>
          <div className="metodo-box">
            <div className="metodo-box-title">{t('metodoGuidista.servicoComunitario')}</div>
            <img className="metodo-box-img" src={servicoComunitario} alt="Comunitário" />
          </div>
        </div>
      </div>
      <div className="guidista-intro">
        <div className="guidista-intro-title">{t('metodoGuidista.constantesTitulo')}</div>
        <div className="guidista-intro-text">{t('metodoGuidista.constantesTexto')}</div>
      </div>
      {/* <div className="constantes-imagens">
        <div className="constantes-img constantes-img-1">
          <div className="constante-title">Vida em grupo</div>
          <div className="constante-text">empenho</div>
        </div>
        <div className="constantes-img constantes-img-2">
          <div className="constante-title">Vida em grupo</div>
          <div className="constante-text">empenho</div>
        </div>
        <div className="constantes-img constantes-img-3">
          <div className="constante-title">Vida em grupo</div>
          <div className="constante-text">empenho</div>
        </div>
        <div className="constantes-img constantes-img-4">
          <div className="constante-title">Vida em grupo</div>
          <div className="constante-text">empenho</div>
        </div>
      </div> */}
      <div className="atividades-box">
        <div className="atividades-title">Atividades</div>
        <div className="atividades-text">As Ferramentas do Método Guidista e as Quatro Constantes são vividas através das várias atividades proporcionadas pela Associação.</div>
      </div>



      <div className="associacao-button-section">
        <Link to="/contactos/formulário"><button type="submit" className="ser-guia-button associacao-button">{t('buttons.queresSerGuia')}</button></Link>
      </div>
    </div>
  );
};

export default MetodoGuidista;
