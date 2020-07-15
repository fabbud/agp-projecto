import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import "./ConteudoNoticia.css";
import { useTranslation } from "react-i18next";

const ConteudoNoticia = (props) => {
  const { i18n } = useTranslation();
  const [contNoticiasData, setContNoticiasData] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const getData = async () => {
    const { match } = props;
    const { id } = match.params;
    await axios
      .get("/news")
      .then((response) => {
        //console.log(response);
        return response.data;
      })
      .then((dataresult) => {
        //console.log(dataresult);
        const noticiasConteudo = dataresult.filter(
          (element) => element.id === Number(id)
        );
        setContNoticiasData(noticiasConteudo[0]);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  });

  return (
    <div className="ConteudoNoticia">
      <div className="CardConteudoNoticia">
        <div className="CardConteudoNoticia2">
          <div className="ImgCardConteudoNoticia">
            <img
              className="ImagemConteudo"
              src={contNoticiasData.image}
              alt="notícia"
            />
          </div>
          <div className="TitleCardConteudoNoticia">
            <h3>{contNoticiasData[`${selectedLanguage}_title`]}</h3>
          </div>
          <div className="TextCardNoticias">
            {ReactHtmlParser(contNoticiasData[`${selectedLanguage}_content`])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConteudoNoticia;
