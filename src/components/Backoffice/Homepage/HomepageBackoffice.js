import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopUp from '../PopUp/PopUp';
import './HomepageBackoffice.css';

const HomepageBackoffice = () => {
  const [journalData, setJournalData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [homepageData, setHomepageData] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState(0);
  const [selectedNews1, setSelectedNews1] = useState(0);
  const [selectedNews2, setSelectedNews2] = useState(0);
  const [selectedNews3, setSelectedNews3] = useState(0);
  const [flash, setFlash] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  useEffect(() => {
    axios.get('/news')
      .then((res) => {
        setNewsData(res.data);
      });
    axios.get('/journal')
      .then((res) => {
        setJournalData(res.data);
      });

    axios.get('/homepage')
      .then((res) => {
        setHomepageData(res.data[0]);
        setSelectedNews1(res.data[0].article_1);
        setSelectedNews2(res.data[0].article_2);
        setSelectedNews3(res.data[0].article_3);
        setSelectedJournal(res.data[0].journal_edition);
      });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newValue = Number(value);
    let jornalValue = selectedJournal;
    let news1Value = selectedNews1;
    let news2Value = selectedNews2;
    let news3Value = selectedNews3;

    if (name === 'journal') {
      jornalValue = newValue;
      setSelectedJournal(jornalValue);
    }
    if (name === 'noticia-1') {
      news1Value = newValue;
      setSelectedNews1(news1Value);
    }
    if (name === 'noticia-2') {
      news2Value = newValue;
      setSelectedNews2(news2Value);
    }
    if (name === 'noticia-3') {
      news3Value = newValue;
      setSelectedNews3(news3Value);
    }
    setHomepageData({
      journal_edition: jornalValue,
      article_1: news1Value,
      article_2: news2Value,
      article_3: news3Value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('/homepage', homepageData)
      .then((res) => {
        console.log(res);
        console.log("update ok");
        setMessageStatus('success');
        setFlash('Guardado com sucesso.');
      })
      .catch((err) => {
        setMessageStatus('error');
        setFlash('Ocorreu um erro, por favor tente mais tarde.');
      });
  };

  return (
    <div className="HomepageBackoffice">
      <div className="homepage-title">Homepage</div>
      <div className="homepage-section">
        <form onSubmit={handleSubmit}>
          <div className="homepage-section-title">Secção Jornal</div>
          <div className="homepage-section-input">
            <div className="homepage-section-label">Edição Jornal:</div>
            <select name="journal" value={selectedJournal} onChange={handleChange}>
              <option value={0}>Escolher edição a publicar....</option>
              {journalData.map((journal) => (
                <option key={journal.edition} value={journal.edition}>
                  {`Edição ${journal.edition} - ${journal.pt_title}`}
                </option>
              ))}
            </select>
          </div>
          <div className="homepage-section-title">Secção Notícias</div>
          <div className="homepage-section-news">
            <div className="homepage-section-input">
              <div className="homepage-section-label">Notícia 1:</div>
              <select name="noticia-1" value={selectedNews1} onChange={handleChange}>
                <option value={0}>Nenhuma....</option>
                {newsData.map((news) => (
                  <option key={news.id} value={news.id}>
                    {news.date} - {news.pt_title}
                  </option>
                ))}
              </select>
            </div>
            <div className="homepage-section-input">
              <div className="homepage-section-label">Notícia 2:</div>
              <select name="noticia-2" value={selectedNews2} onChange={handleChange}>
                <option value={0}>Nenhuma....</option>
                {newsData.map((news) => (
                  <option key={news.id} value={news.id}>
                    {news.date} - {news.pt_title}
                  </option>
                ))}
              </select>
            </div>
            <div className="homepage-section-input">
              <div className="homepage-section-label">Notícia 3:</div>
              <select name="noticia-3" value={selectedNews3} onChange={handleChange}>
                <option value={0}>Nenhuma....</option>
                {newsData.map((news) => (
                  <option key={news.id} value={news.id}>
                    {news.date} - {news.pt_title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="homepage-section-button">
            <button className="login-button" type="submit">Guardar</button>
          </div>
        </form>
      </div>
      <PopUp flashInput={flash} typeMessage={messageStatus} />
    </div>
  );
};

export default HomepageBackoffice;
