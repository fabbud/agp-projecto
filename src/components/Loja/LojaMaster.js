import React from 'react';
import Livros from './Livros';
import './LojaMaster.css';


let artigos = [
    { id: 1, categoria: 'Fardas', descricao: 'Camisola de lã', alt: 'Guias de Portugal Camisola de lã', src: 'CamisolaDeLa', preço: '23,5€' },
    { id: 2, categoria: 'livros', descricao: 'Tornar-se Avezinha', alt: 'Guias de Portugal Livro Tornar-se Avezinha', src: 'TornarSeAvezinha.jpg', preço: '2,5€' },
    { id: 3, categoria: 'livros', descricao: 'Asas Verdes', alt: 'Guias de Portugal Asas Verdes', src: 'AsasVerdes.jpg', preço: '2,5€' },
    { id: 4, categoria: 'livros', descricao: 'Asas Azuis', alt: 'Guias de Portugal Asas Azuis', src: 'AsasAzuis.jpg', preço: '1,5€' },
    { id: 5, categoria: 'livros', descricao: 'Primeira Aventura', alt: 'Guias de Portugal Primeira Aventura', src: 'PrimeiraAventura.jpg', preço: '2,5€' },
    { id: 6, categoria: 'livros', descricao: 'Escalada', alt: 'Guias de Portugal Escalada', src: 'Escalada.jpg', preço: '2,5€' },
    { id: 7, categoria: 'livros', descricao: 'Horizonte', alt: 'Guias de Portugal Horizonte', src: 'Horizonte.jpg', preço: '2,55€' },
    { id: 8, categoria: 'livros', descricao: 'Expedição', alt: 'Guias de Portugal Expedição', src: 'Expedicao.jpg', preço: '9€' },
    { id: 9, categoria: 'livros', descricao: 'Ser Moinho', alt: 'Guias de Portugal Ser Moinho', src: 'SerMoinho.jpg', preço: '4,5€' },
    { id: 10, categoria: 'livros', descricao: 'O Livro da Dirigente', alt: 'Guias de Portugal O livro da Dirigente', src: 'OLivroDaDirigente.jpg', preço: '3,75€' },
    { id: 11, categoria: 'livros', descricao: 'Árvores, Lenha e Fogueiras', alt: 'Guias de Portugal Árvore, Lenha e Fogueiras', src: 'ArvoresLenhaFogueiras.jpg', preço: '2€' },
    { id: 12, categoria: 'fardas', descricao: 'Casaco Polar', alt: 'Guias de Portugal Casaco Polar', src: 'CasacoPolar.jpg', preço: '17,5€/19,5€' },
    { id: 13, categoria: 'fardas', descricao: 'Lenço de Efectiva', alt: 'Guias de Portugal Lenço de Efectiva', src: 'LencoDeEfectiva.jpg', preço: '3,5€' },
    { id: 14, categoria: 'fardas', descricao: 'Lenço de Comissária', alt: 'Guias de Portugal Lenço de Comissária', src: 'LencoDeComissaria.jpg', preço: '3,5€' },
    { id: 15, categoria: 'fardas', descricao: 'Lenço de Dirigente', alt: 'Guias de Portugal Lenço de Dirigente', src: 'LencoDeDirigente.jpg', preço: '3,5€' },
    { id: 16, categoria: 'fardas', descricao: 'Lenço de Guia', alt: 'Guias de Portugal Lenço de Guia', src: 'LencoDeGuia.jpg', preço: '2,5€/3,5€' },
    { id: 17, categoria: 'fardas', descricao: 'Panamá', alt: 'Guias de Portugal Panamá', src: 'Panama.jpg', preço: '6,5€' },
    { id: 18, categoria: 'fardas', descricao: 'Sweatshirt', alt: 'Guias de Portugal Sweatshirt', src: 'Sweatshirt.jpg', preço: '12€' },
    { id: 19, categoria: 'fardas', descricao: 'Tshirt Avezinha', alt: 'Guias de Portugal Tshirt Avezinha', src: 'TshirtAvezinha.jpg', preço: '7,5€' },
    { id: 20, categoria: 'diversos', descricao: 'Apito', alt: 'Guias de Portugal Apito', src: 'Apito.jpg', preço: '3,2€' },
    { id: 21, categoria: 'diversos', descricao: 'Cadernos', alt: 'Guias de Portugal Cadernos', src: 'Cadernos.jpg', preço: '3,5€' },
    { id: 22, categoria: 'diversos', descricao: 'Colete', alt: 'Guias de Portugal Colete', src: 'Colete.jpg', preço: '6,5€/7,5€' },
    { id: 23, categoria: 'diversos', descricao: 'Caneta', alt: 'Guias de Portugal Caneta', src: 'Caneta.jpg', preço: '0,50€' },
    { id: 24, categoria: 'diversos', descricao: 'Faca de Mato', alt: 'Guias de Portugal Faca de Mato', src: 'FacaMato.jpg', preço: '14,5€' }
]


class LojaMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = { artigos: artigos, modo: '' }

    }

    componentDidMount = () => {
        // let url = ''
        // fetch(url).then((response) => response.json()).then((json) => this.setState({ artigos: json }));
        const { match } = this.props;
        console.log(this.props)
        let getModo = match.params.modo;
        this.setState({ modo: getModo })
    }

    componentDidUpdate = () => {
        // let url = ''
        // fetch(url).then((response) => response.json()).then((json) => this.setState({ artigos: json }));
        const { match } = this.props;
        let newModo = match.params.modo;
        if (this.state.modo !== newModo) {
            this.setState({ modo: newModo })
        }
    }


    render() {
        return (

            <div className="Body" >
                <div>
                    <h2 class="tituloLoja">{this.state.modo}</h2>
                    <p class="textoLoja">Catálogo dos produtos à venda <br />no Depósito de Material e Fardamento. <br />Consultar horários da Loja <a href="/contactos">aqui</a>.</p>
                    <div className="loja">

                        {
                            this.state.artigos.map((artigo) => (
                                <> {artigo.categoria === this.state.modo &&
                                    < Livros
                                        id={artigo.id}
                                        descricao={artigo.descricao}
                                        alt={artigo.alt}
                                        src={artigo.src}
                                        preço={artigo.preço}
                                        categoria={this.state.modo}
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