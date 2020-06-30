import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Noticias.css";
import { Link } from "react-router-dom";

const NoticiasCard = (props) => {
  const { noticia } = props;
  const link = `/publicações/noticias/${noticia.id}`;
  return (
    <div className="CardsNoticias">
      <Card className="CardNoticias" style={{ width: '325px' }}>
        <Card.Title className="TitleCardNoticias">{noticia.title}</Card.Title>
        <Card.Img
          className="ImgCardNoticias"
          variant="top"
          src={noticia.image}
        />
        <Card.Text className="DataCardNoticias">{noticia.data}</Card.Text>
        <Card.Text className="TextCardNoticias">{noticia.text}</Card.Text>
        <Button className="ButtonCardNoticias" variant="primary">
          <Link to={link}>Ler mais</Link>
        </Button>
      </Card>
    </div>
  );
};

NoticiasCard.propTypes = {
  noticia: PropTypes.string.isRequired,
};

export default NoticiasCard;
