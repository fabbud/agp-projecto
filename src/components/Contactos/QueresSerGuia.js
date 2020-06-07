import React from 'react';
import './QueresSerGuia.css';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';

const QueresSerGuia = () => {
  const { t } = useTranslation();

  return (
    <div className="QueresSerGuia">
      <div className="guia-text-section">
        {/* <div><img src="" alt="" /></div> */}
        <div className="guia-title">Queres ser Guia?</div>
        <div className="guia-text">Para mais informações, entre em contacto connosco.</div>
      </div>
      <div className="form-section">
        <form>
          <label htmlFor="nome">
            <p>Nome</p>
            <input type="text" id="nome" name="nome" />
          </label>
          <label htmlFor="assunto">
            <p>Assunto</p>
            <input type="text" id="assunto" name="assunto" />
          </label>
          <label htmlFor="email">
            <p>E-mail</p>
            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="mensagem">
            <p>Mensagem</p>
            <input type="textarea" id="mensagem" name="mensagem" />
          </label>
        </form>
        <div className="recolha-dados-text">{ReactHtmlParser(t('contactosForm.recolhaDadosTexto'))}</div>
        <div className="form-button-section">
          <button className="form-button" type="submit">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default QueresSerGuia;
