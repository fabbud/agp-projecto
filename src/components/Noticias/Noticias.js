import React from 'react';
import NoticiasCard from './NoticiasCard';

const noticiasAgp = [
  {
    id: 1,
    title: 'O Trevo também fica em casa',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'JUN 2020',
    text: 'Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.'
  },
  {
    id: 2,
    title: 'O Trevo também fica em casa',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'JUN 2020',
    text: 'Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.'
  },
  {
    id: 3,
    title: 'O Trevo também fica em casa',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'JUN 2020',
    text: 'Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.'
  },
  {
    id: 4,
    title: 'O Trevo também fica em casa',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'JUN 2020',
    text: 'Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.'
  },
  {
    id: 5,
    title: 'O Trevo também fica em casa',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'JUN 2020',
    text: 'Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.'
  },
  {
    id: 6,
    title: 'O Trevo também fica em casa',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'JUN 2020',
    text: 'Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.'
  },
];


class Noticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noticiasData: noticiasAgp,
    };
  }

  render() {
    const { noticiasData } = this.state;
    return (
      <div className="Noticias">
        <p className="NoticiasTitle">Notícias</p>
        <div className="MapNoticias">
          {noticiasData.map((noticia) => <NoticiasCard key={noticia.id} noticia={noticia} />)}
        </div>
      </div>
    );
  }
}
export default Noticias;
