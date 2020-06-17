import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Noticias.css';

class Noticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleCard: 'O Trevo também fica em casa',
      imageCard: 'https://i.imgur.com/POH8clD.jpg',
      dataCard: 'JUN 2020',
      textCard: 'Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.',
    };
  }

  render() {
    const {
      titleCard,
      imageCard,
      dataCard,
      textCard,
    } = this.state;

    return (
      <div className="Noticias">
        <p className="NoticiasTitle">Notícias</p>
        <div className="CardsNoticias">
          <div className="CardsNoticiasFirstLine">
            <Card className="CardNoticias" style={{ width: '300px'}}>
              <Card.Title className="TitleCardNoticias">
                {titleCard}
              </Card.Title>
              <Card.Img className="ImgCardNoticias" variant="top" src={imageCard} />
              <Card.Text className="DataCardNoticias">
                {dataCard}
              </Card.Text>
              <Card.Text className="TextCardNoticias">
                {textCard}
              </Card.Text>
              <Button className="ButtonCardNoticias" variant="primary">Ler mais</Button>
            </Card>
            <Card className="CardNoticias" style={{ width: '300px'}}>
              <Card.Title className="TitleCardNoticias">
                {titleCard}
              </Card.Title>
              <Card.Img className="ImgCardNoticias" variant="top" src={imageCard} />
              <Card.Text className="DataCardNoticias">
                {dataCard}
              </Card.Text>
              <Card.Text className="TextCardNoticias">
                {textCard}
              </Card.Text>
              <Button className="ButtonCardNoticias" variant="primary">Ler mais</Button>
            </Card>
            <Card className="CardNoticias" style={{ width: '300px'}}>
              <Card.Title className="TitleCardNoticias">
                {titleCard}
              </Card.Title>
              <Card.Img className="ImgCardNoticias" variant="top" src={imageCard} />
              <Card.Text className="DataCardNoticias">
                {dataCard}
              </Card.Text>
              <Card.Text className="TextCardNoticias">
                {textCard}
              </Card.Text>
              <Button className="ButtonCardNoticias" variant="primary">Ler mais</Button>
            </Card>
          </div>
          <div className="CardsNoticiasSecondLine">
            <Card className="CardNoticias" style={{ width: '300px'}}>
              <Card.Title className="TitleCardNoticias">
                {titleCard}
              </Card.Title>
              <Card.Img className="ImgCardNoticias" variant="top" src={imageCard} />
              <Card.Text className="DataCardNoticias">
                {dataCard}
              </Card.Text>
              <Card.Text className="TextCardNoticias">
                {textCard}
              </Card.Text>
              <Button className="ButtonCardNoticias" variant="primary">Ler mais</Button>
            </Card>
            <Card className="CardNoticias" style={{ width: '300px'}}>
              <Card.Title className="TitleCardNoticias">
                {titleCard}
              </Card.Title>
              <Card.Img className="ImgCardNoticias" variant="top" src={imageCard} />
              <Card.Text className="DataCardNoticias">
                {dataCard}
              </Card.Text>
              <Card.Text className="TextCardNoticias">
                {textCard}
              </Card.Text>
              <Button className="ButtonCardNoticias" variant="primary">Ler mais</Button>
            </Card>
            <Card className="CardNoticias" style={{ width: '300px'}}>
              <Card.Title className="TitleCardNoticias">
                {titleCard}
              </Card.Title>
              <Card.Img className="ImgCardNoticias" variant="top" src={imageCard} />
              <Card.Text className="DataCardNoticias">
                {dataCard}
              </Card.Text>
              <Card.Text className="TextCardNoticias">
                {textCard}
              </Card.Text>
              <Button className="ButtonCardNoticias" variant="primary">Ler mais</Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }
};

export default Noticias;
