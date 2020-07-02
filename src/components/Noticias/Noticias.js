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
    title: 'Dicas para te manteres ligada às tuas amigas Guias',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'ABR 2020',
    text: 'Descobre algumas ideias para pores em prática com a tua Patrulha em... casa!'
  },
  {
    id: 3,
    title: 'Pandemia por surto de Coronavírus',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'MAR 2020',
    text: 'Atividades Guidistas presenciais suspensas pela necessidade do isolamento social.'
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
    title: 'Dicas para te manteres ligada às tuas amigas Guias',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'ABR 2020',
    text: 'Descobre algumas ideias para pores em prática com a tua Patrulha em... casa!'
  },
  {
    id: 6,
    title: 'Pandemia por surto de Coronavírus',
    image: 'https://i.imgur.com/POH8clD.jpg',
    data: 'MAR 2020',
    text: 'Atividades Guidistas presenciais suspensas pela necessidade do isolamento social.'
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
