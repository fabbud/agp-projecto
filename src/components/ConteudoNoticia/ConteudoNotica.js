import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./ConteudoNoticia.css";

const noticiasAgp = [
  {
    id: 1,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/POH8clD.jpg",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 2,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/POH8clD.jpg",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 3,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/POH8clD.jpg",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 4,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/POH8clD.jpg",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 5,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/POH8clD.jpg",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
  {
    id: 6,
    title: "O Trevo também fica em casa",
    image: "https://i.imgur.com/POH8clD.jpg",
    data: "JUN 2020",
    text:
      "Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.",
  },
];

const ConteudoNoticia = (props) => {
  const [imageNoticia, setimageNoticia] = useState("");
  const [titleNoticia, setTitleNoticia] = useState("");
  const [dataNoticia, setDataNoticia] = useState("");
  const [textNoticia, setTextNoticia] = useState("");

  const getNoticia = (id) => {
    //console.log(id);
    const noticiasConteudo = noticiasAgp.filter(
      (element) => element.id === Number(id)
    );
    //console.log(noticiasConteudo);
    const noticiasConteudoMap = noticiasConteudo.map(
      (noticia) => (
        setimageNoticia(`${noticia.image}`),
        setTitleNoticia(`${noticia.title}`),
        setDataNoticia(`${noticia.data}`),
        setTextNoticia(`${noticia.text}`)
      ),
    );
  };

  useEffect(() => {
    const { match } = props;
    const { id } = match.params;
    getNoticia(id);
  });

  return (
    <div className="ConteudoNoticia">
      <Card className="CardConteudoNoticia" style={{ width: "800px" }}>
        <Card.Img
          className="ImgCardConteudoNoticia"
          variant="top"
          src={imageNoticia}
        />
        <Card.Title className="TitleCardConteudoNoticia">
          {titleNoticia}
        </Card.Title>
        <Card.Text className="DataCardNoticias">{dataNoticia}</Card.Text>
        <Card.Text className="TextCardNoticias">{textNoticia}</Card.Text>
      </Card>
    </div>
  );
};

export default ConteudoNoticia;
