import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Noticias.css';

const NoticiasCard = (props) => {
  const { noticia } = props;
  return (
    <div className="CardsNoticias">
      <Card className="CardNoticias" style={{ width: '300px' }}>
        <Card.Title className="TitleCardNoticias">{noticia.title}</Card.Title>
        <Card.Img
          className="ImgCardNoticias"
          variant="top"
          src={noticia.image}
        />
        <Card.Text className="DataCardNoticias">{noticia.data}</Card.Text>
        <Card.Text className="TextCardNoticias">{noticia.text}</Card.Text>
        <Button className="ButtonCardNoticias" variant="primary">
          Ler mais
        </Button>
      </Card>
    </div>
  );
};

NoticiasCard.propTypes = {
  noticia: PropTypes.string.isRequired,
};

export default NoticiasCard;
