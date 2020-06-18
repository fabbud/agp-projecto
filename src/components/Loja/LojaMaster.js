import React from 'react';

// let artigos = [
//     { id: 1, categoria: 'fardas', descricao: 'farda1', alt: 'altfarda1', src: 'www.farda', preço: '5€'},
//     { id: 2, categoria: 'livros', descricao: 'livro1', alt: 'altlivro1', src: 'www.livro', preço: '2€'},
//     { id: 3, categoria: 'livros', descricao: 'livro2', alt: 'altfarda1', src: 'www.farda', preço: '5€'},
//     { id: 4, categoria: 'diversos', descricao: 'diversos1', alt: 'altlivro1', src: 'www.livro', preço: '2€'},
//     { id: 5, categoria: 'fardas', descricao: 'farda1', alt: 'altfarda1', src: 'www.farda', preço: '5€'},
//     { id: 6, categoria: 'diversos', descricao: 'diversos1', alt: 'altlivro1', src: 'www.livro', preço: '2€'},
// ]

class Loja extends React.Component {
    constructor(props) {
        super(props);
        this.state = { artigos: [] }
    }

    componentDidMount() {
        let url = ''
        fetch(url).then((response) => response.json()).then((json) => this.setState({ artigos: json }));
        console.log(response.json())
    }

    render() {
        return (

            <div className="Body" >
                <div>
                    {/* <h2>{this.state.titulos.livros}</h2> */}
                    <p>Catálogo dos produtos à venda no Depósito de Material e Fardamento. <br />Consultar horários da Loja aqui.</p>
                    {artigos.filter((artigo) => {
                        artigo.categoria === 'livros'
                        return (
                            < Livros
                                id={artigo.id}
                                descricao={artigo.descricao}
                                alt={artigo.alt}
                                scr={artigo.scr}
                                preço={artigo.preço}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Loja;