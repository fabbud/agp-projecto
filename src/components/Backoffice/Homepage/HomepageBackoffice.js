import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomepageBackoffice.css';

const HomepageBackoffice = () => {
  const [journalData, setJournalData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [homepageData, setHomepageData] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState(0);
  const [selectedNews1, setSelectedNews1] = useState(0);
  const [selectedNews2, setSelectedNews2] = useState(0);
  const [selectedNews3, setSelectedNews3] = useState(0);

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
    console.log(typeof value);
    const newValue = Number(value);
    console.log(typeof newValue);
    if (name === 'journal') {
      setSelectedJournal(newValue);
    }
    if (name === 'noticia-1') {
      setSelectedNews1(newValue);
    }
    if (name === 'noticia-2') {
      setSelectedNews2(newValue);
    }
    if (name === 'noticia-3') {
      setSelectedNews3(newValue);
    }
    setHomepageData({
      journal_edition: selectedJournal,
      article_1: selectedNews1,
      article_2: selectedNews2,
      article_3: selectedNews3,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(homepageData);
    axios.put('/homepage', homepageData)
      .then((res) => {
        console.log("update ok");
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
    </div>
  );
};

export default HomepageBackoffice;
