import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import NoticiasCard from './NoticiasCard';
import './Noticias.css';

const Noticias = () => {
  const { t } = useTranslation();
  const [noticiasData, setNoticiasData] = useState([]);

  const getData = () => {
    // Send the request
    axios
      .get('/news')
      // Extract the DATA from the received response
      .then((response) => {
        console.log(response);
        return response.data;
      })
      // Use this data to update the state
      .then((dataresult) => {
        console.log(dataresult);
        setNoticiasData(dataresult);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  return (
    <div className="Noticias">
      <p className="NoticiasTitle">{t('noticias.noticias')}</p>
      <div className="MapNoticias">
        {noticiasData.map((noticia) => (
          <NoticiasCard key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </div>
  );
};

export default Noticias;
