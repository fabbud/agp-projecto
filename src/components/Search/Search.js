import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './Search.css';

const Search = (props) => {
  const data = [
    {
      id: 1,
      section: 'Loja',
      title: 'Fardas',
      text: 'Casaco Polar',
    },
    {
      id: 2,
      section: 'Notícias',
      title: 'Fardas à venda',
      text: 'Venda de fardas tem início na segunda-feira dia 23 de Julho de 2020, pelas 18 horas. Venda de fardas tem início na segunda-feira dia 23 de Julho de 2020, pelas 18 horas. Venda de fardas tem início na segunda-feira dia 23 de Julho de 2020, pelas 18 horas. Venda de fardas tem início na segunda-feira dia 23 de Julho de 2020, pelas 18 horas.',
    },
    {
      id: 3,
      section: 'Jornal',
      title: 'Fardas',
      text: 'Comemorações da venda das fardas Comemorações da venda das fardas Comemorações da venda das fardas',
    },
    {
      id: 4,
      section: 'Notícias',
      title: 'Livros à venda',
      text: 'Venda de Livros tem início na segunda-feira dia 30 de Julho de 2020, pelas 18 horas. Venda de Livros tem início na segunda-feira dia 23 de Julho de 2020, pelas 18 horas. Venda de fardas tem início na segunda-feira dia 23 de Julho de 2020, pelas 18 horas. Venda de fardas tem início na segunda-feira dia 23 de Julho de 2020, pelas 18 horas.',
    },
    {
      id: 5,
      section: 'Jornal',
      title: 'Livros à venda',
      text: 'Comemorações da venda dos livros Comemorações ddos livros Comemorações da venda dos livros',
    },
    {
      id: 6,
      section: 'Loja',
      title: 'Livros',
      text: 'Ser Avezinha',
    },
    {
      id: 7,
      section: 'Loja',
      title: 'Livros',
      text: 'Ser Moinho',
    },
    {
      id: 8,
      section: 'Loja',
      title: 'Fardas',
      text: 'Lenço de Guia',
    },
  ];

  const { t } = useTranslation();
  const search = JSON.parse(localStorage.getItem('searchBy'));
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSearchItem(search);
  });

  const handleSearchSelect = (id) => {
    console.log(id);
    props.history.push({ pathname: `/publicações/noticias/${id}` });
    // props.history.push({ pathname: `/publicações/jornal-trevo/${id}` });
    // props.history.push({ pathname: `/loja/${section}` });
    // reencaminha para pagina de jornal ou faz download do jornal ?
  };

  return (
    <div className="Search">
      <div className="search-title-section">
        <div className="search-main-title">{t('search.mainTitle')}</div>
        <div className="search-main-item">{searchItem}</div>
      </div>
      <div className="search-results-section">
        { data
          .filter((item) => item.title.toLowerCase().includes((`${searchItem}`).toLowerCase()) || item.text.toLowerCase().includes((`${searchItem}`).toLowerCase()))
          .map((item) => (
            <button key={item.id} type="button" className="search-item" onClick={() => handleSearchSelect(item.id)}>
              <div className="search-item-section">
                {item.section}
                <FontAwesomeIcon icon={faAngleDoubleRight} className="search-next-icon" />
                {item.title}
              </div>
              <div className="search-item-text">{item.text}</div>
            </button>
          ))}
      </div>
    </div>
  );
};

Search.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Search;
