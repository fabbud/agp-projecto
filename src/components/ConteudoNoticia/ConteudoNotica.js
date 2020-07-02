import React, { useState, useEffect } from "react";
import "./ConteudoNoticia.css";

const noticiasAgp = [
  {
    id: 1,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/IM55yrI.png",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível. Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível. Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível. Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível. Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível. Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível. Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível. Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível. Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 2,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/IM55yrI.png",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 3,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/IM55yrI.png",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 4,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/IM55yrI.png",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 5,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/IM55yrI.png",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 6,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/IM55yrI.png",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
];

const ConteudoNoticia = (props) => {
  const [imageNoticia, setimageNoticia] = useState("");
  const [titleNoticia, setTitleNoticia] = useState("");
  const [textNoticia, setTextNoticia] = useState("");

  const getNoticia = (id) => {
    // console.log(id);
    const noticiasConteudo = noticiasAgp.filter(
      (element) => element.id === Number(id)
    );
    // console.log(noticiasConteudo);
    const noticiasConteudoMap = noticiasConteudo.map(
      (noticia) => (
        setimageNoticia(`${noticia.image}`),
        setTitleNoticia(`${noticia.title}`),
        setTextNoticia(`${noticia.text}`)
      )
    );
  };

  useEffect(() => {
    const { match } = props;
    const { id } = match.params;
    window.scrollTo(0, 0);
    getNoticia(id);
  });

  return (
    <div className="ConteudoNoticia">
      <div className="CardConteudoNoticia">
        <div className="CardConteudoNoticia2">
          <div className="ImgCardConteudoNoticia">
            <img className="ImagemConteudo" src={imageNoticia} alt="notícia" />
          </div>
          <div className="TitleCardConteudoNoticia">
            <h3>{titleNoticia}</h3>
          </div>
          <div className="TextCardNoticias">
            <p>{textNoticia}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConteudoNoticia;
