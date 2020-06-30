import React from 'react';
import Livros from './Livros';
import './LojaMaster.css';


let artigos = [
    { id: 1, categoria: 'fardas', descricao: 'farda1', alt: 'altfarda1', src: 'www.farda', preço: '5€' },
    { id: 2, categoria: 'livros', descricao: 'Tornar-se Avezinha', alt: 'Guias de Portugal Livro Tornar-se Avezinha', src: 'TornarSeAvezinha.jpg', preço: '2,5€' },
    { id: 3, categoria: 'livros', descricao: 'Asas Verdes', alt: 'Guias de Portugal Asas Verdes', src: 'AsasVerdes.jpg', preço: '2,5€' },
    { id: 4, categoria: 'livros', descricao: 'Asas Azuis', alt: 'Guias de Portugal Asas Azuis', src: 'AsasAzuis.jpg', preço: '1,5€' },
    { id: 5, categoria: 'livros', descricao: 'Primeira Aventura', alt: 'Guias de Portugal Primeira Aventura', src: 'PrimeiraAventura.jpg', preço: '2,5€' },
    { id: 6, categoria: 'livros', descricao: 'Escalada', alt: 'Guias de Portugal Escalada', src: 'Escalada.jpg', preço: '2,5€' },
    { id: 7, categoria: 'livros', descricao: 'Horizonte', alt: 'Guias de Portugal Horizonte', src: 'Horizonte.jpg', preço: '2,55€' },
    { id: 8, categoria: 'livros', descricao: 'Expedição', alt: 'Guias de Portugal Expedição', src: 'Expedicao.jpg', preço: '9€' },
    { id: 9, categoria: 'livros', descricao: 'Ser Moinho', alt: 'Guias de Portugal Ser Moinho', src: 'SerMoinho.jpg', preço: '4,5€' },
    { id: 10, categoria: 'livros', descricao: 'O Livro da Dirigente', alt: 'Guias de Portugal O livro da Dirigente', src: 'OLivroDaDirigente.jpg', preço: '3,75€' },
    { id: 11, categoria: 'livros', descricao: 'Árvore, Lenha e Fogueiras', alt: 'Guias de Portugal Árvore, Lenha e Fogueiras', src: 'ArvoresLenhaFogueiras.jpg', preço: '2€' },
    { id: 4, categoria: 'diversos', descricao: 'diversos1', alt: 'altlivro1', src: 'www.livro', preço: '2€' },
    { id: 5, categoria: 'fardas', descricao: 'farda1', alt: 'altfarda1', src: 'www.farda', preço: '5€' },
    { id: 6, categoria: 'diversos', descricao: 'diversos1', alt: 'altlivro1', src: 'www.livro', preço: '2€' },
]

class LojaMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = { artigos: artigos, modo: '' }

    }

    componentDidMount = () => {
        // let url = ''
        // fetch(url).then((response) => response.json()).then((json) => this.setState({ artigos: json }));
        console.log(this.props);
        const { match } = this.props;
        let getModo = match.params.modo;
        console.log(getModo)
        this.setState({ modo: getModo })
    }



    render() {
        return (

            <div className="Body" >
                <div>
                    <h2>{this.state.modo}</h2>
                    <p>Catálogo dos produtos à venda no Depósito de Material e Fardamento. <br />Consultar horários da Loja aqui.</p>
                    <div className="loja">

                        {this.state.artigos.map((artigo) => (
                            <> {artigo.categoria === 'livros' &&
                                < Livros
                                    id={artigo.id}
                                    descricao={artigo.descricao}
                                    alt={artigo.alt}
                                    src={artigo.src}
                                    preço={artigo.preço}
                                />}

                            </>

                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default LojaMaster;