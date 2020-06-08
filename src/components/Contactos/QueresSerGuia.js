import React from 'react';
import './QueresSerGuia.css';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import { useForm } from 'react-hook-form';

const QueresSerGuia = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="QueresSerGuia">
      <div className="guia-text-section">
        {/* <div><img src="" alt="" /></div> */}
        <div className="guia-title">Queres ser Guia?</div>
        <div className="guia-text">Para mais informações, entre em contacto connosco.</div>
      </div>
      <div className="guia-form-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="guia-label">Nome</div>
          <input
            type="text"
            name="nome"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 2 })}
          />
          {errors.nome && <div className="form-error">{errors.nome.message}</div>}
          <div className="guia-label">Assunto</div>
          <input
            type="text"
            name="assunto"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 2 })}
          />
          {errors.assunto && <div className="form-error">{errors.assunto.message}</div>}
          <div className="guia-label">Email</div>
          <input
            type="email"
            name="email"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 2 })}
          />
          {errors.email && <div className="form-error">{errors.email.message}</div>}
          <div className="guia-label">Mensagem</div>
          <textarea
            type="textarea"
            name="mensagem"
            rows="3"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 2 })}
          />
          {errors.mensagem && <div className="message-error">{errors.mensagem.message}</div>}
          <div className="recolha-dados-text">{ReactHtmlParser(t('contactosForm.recolhaDadosTexto'))}</div>
          <div className="guia-button-section">
            <button className="guia-form-button" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueresSerGuia;
