import React, { useState } from 'react';
import './QueresSerGuia.css';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import dadosPessoaisPDF from '../../assets/pdfs/Política_de_Dados_Pessoais.pdf';
import megafone from '../../assets/images/Contactos/megafone.png';

const QueresSerGuia = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();

  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [emailTypeAlert, setEmailTypeAlert] = useState('success');
  const [messageIcon, setMessageIcon] = useState(faCheck);

  const onSubmit = (data) => {
    axios.post('/email', data)
      .then((response) => {
        if (response.data.code !== 200) {
          setEmailTypeAlert('danger');
          setMessageIcon(faTimes);
        }
        setShowEmailAlert(true);
        window.setTimeout(() => setShowEmailAlert(false), 4000);
      });
  };

  return (
    <div className="QueresSerGuia">
      <div className="guia-text-section">
        <img src={megafone} className="guia-megafone" alt="Megafone" />
        <div className="guia-title">{t('contactosForm.queresSerGuiaTexto')}</div>
        <div className="guia-text">{t('contactosForm.maisInformacoesTexto')}</div>
      </div>
      <div className="guia-form-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="guia-label">{t('contactosForm.nome')}</div>
          <input
            type="text"
            name="nome"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 2 })}
          />
          {errors.nome && <div className="form-error">{errors.nome.message}</div>}
          <div className="guia-label">{t('contactosForm.assunto')}</div>
          <input
            type="text"
            name="assunto"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 5 })}
          />
          {errors.assunto && <div className="form-error">{errors.assunto.message}</div>}
          <div className="guia-label">{t('contactosForm.email')}</div>
          <input
            type="email"
            name="email"
            className="form-control"
            ref={register({
              required: `*${t('contactosForm.campoObrigatorio')}`,
              minLeght: 2,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: t('contactosForm.erroEmailInvalido'),
              },
            })}
          />
          {errors.email && <div className="form-error">{errors.email.message}</div>}
          <div className="guia-label">{t('contactosForm.mensagem')}</div>
          <textarea
            type="textarea"
            name="mensagem"
            rows="3"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 2 })}
          />
          {errors.mensagem && <div className="message-error">{errors.mensagem.message}</div>}
          <div className="recolha-dados-text">
            {ReactHtmlParser(t('contactosForm.recolhaDadosTexto'))}
            <a href={dadosPessoaisPDF} target="_blank" rel="noopener noreferrer">{t('contactosForm.politicaDadosPessoais')}</a>
          </div>
          <div className="form-button-section">
            <button className="guia-form-button" type="submit">{t('contactosForm.botaoEnviar')}</button>
          </div>
          <div className="alert-section">
            <Alert className="form-alert" show={showEmailAlert} variant={emailTypeAlert}>
              <FontAwesomeIcon icon={messageIcon} className="message-icon" />
              { emailTypeAlert === 'success' ? t('contactosForm.envioSucesso') : t('contactosForm.envioErro') }
            </Alert>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueresSerGuia;
