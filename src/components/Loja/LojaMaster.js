import React from 'react';
import { Link } from 'react-router-dom';
import Livros from './Livros';
import './LojaMaster.css';


let artigos = [
    { id: 1, categoria: 'livros', descricao: 'Tornar-se Avezinha', alt: 'Guias de Portugal Livro Tornar-se Avezinha', src: '1.Livros_Tornar-se_Avezinha.png', preço: '2,5€' },
    { id: 2, categoria: 'livros', descricao: 'Asas Verdes', alt: 'Guias de Portugal Asas Verdes', src: '2.Livros_Asas_Verdes.png', preço: '2,5€' },
    { id: 3, categoria: 'livros', descricao: 'Asas Azuis', alt: 'Guias de Portugal Asas Azuis', src: '3.Livros_Asas_Azuis.png', preço: '1,5€' },
    { id: 4, categoria: 'livros', descricao: 'Primeira Aventura', alt: 'Guias de Portugal Primeira Aventura', src: '4.Livros_Aventura.png', preço: '2,5€' },
    { id: 5, categoria: 'livros', descricao: 'Escalada', alt: 'Guias de Portugal Escalada', src: '5.Livros_Escalada.png', preço: '2,5€' },
    { id: 6, categoria: 'livros', descricao: 'Horizonte', alt: 'Guias de Portugal Horizonte', src: '6.Livros_Horizonte.png', preço: '2,55€' },
    { id: 7, categoria: 'livros', descricao: 'Expedição', alt: 'Guias de Portugal Expedição', src: '7.Livros_Expedicao.png', preço: '9€' },
    { id: 8, categoria: 'livros', descricao: 'Ser Moinho', alt: 'Guias de Portugal Ser Moinho', src: '8.Livros_Ser Moinho.png', preço: '4,5€' },
    { id: 9, categoria: 'livros', descricao: 'O Livro da Dirigente', alt: 'Guias de Portugal O livro da Dirigente', src: '9.Livros_O Livro_da_Dirigente.png', preço: '3,75€' },
    { id: 10, categoria: 'livros', descricao: 'Árvores, Lenha e Fogueiras', alt: 'Guias de Portugal Árvore, Lenha e Fogueiras', src: '10.Livros_Arvores,Lenha_e_Fogueiras.png', preço: '2€' },
    { id: 11, categoria: 'fardas', descricao: 'Lenço de Guia', alt: 'Guias de Portugal Lenço de Guia', src: '1.Fardas_lencos_de_Guia.png', preço: '2,5€/3,5€' },
    { id: 12, categoria: 'fardas', descricao: 'Lenço de Dirigente', alt: 'Guias de Portugal Lenço de Dirigente', src: '2.Fardas_lencos_de_Dirigente.png', preço: '3,5€' },
    { id: 13, categoria: 'fardas', descricao: 'Lenço de Comissária', alt: 'Guias de Portugal Lenço de Comissária', src: '3.Fardas_lenco_de_Comissaria.png', preço: '3,5€' },
    { id: 13, categoria: 'fardas', descricao: 'Lenço de Efectiva', alt: 'Guias de Portugal Lenço de Efectiva', src: '4.Fardas_lenco_de_Efetiva.png', preço: '3,5€' },
    { id: 14, categoria: 'fardas', descricao: 'Tshirt Avezinha', alt: 'Guias de Portugal Tshirt Avezinha', src: '5.Fardas_t-shirt_de_Avezinha.png', preço: '7,5€' },
    { id: 15, categoria: 'fardas', descricao: 'Sweatshirt', alt: 'Guias de Portugal Tshirt Guia', src: '6.Fardas_t-shirt_de_Guia.png', preço: '12€' },
    { id: 16, categoria: 'fardas', descricao: 'Sweatshirt', alt: 'Guias de Portugal Sweatshirt', src: '7.Fardas_sweat-shirt.png', preço: '12€' },
    { id: 17, categoria: 'fardas', descricao: 'Camisola de lã', alt: 'Guias de Portugal Camisola de lã', src: '8.Fardas_camisola_de_la.png', preço: '23,5€' },
    { id: 18, categoria: 'fardas', descricao: 'Casaco Polar', alt: 'Guias de Portugal Casaco Polar', src: '9.Fardas_casaco_polar.png', preço: '17,5€/19,5€' },
    { id: 19, categoria: 'fardas', descricao: 'Panamá', alt: 'Guias de Portugal Panamá', src: '10.Fardas_panama.png', preço: '6,5€' },
    { id: 20, categoria: 'diversos', descricao: 'Faca de Mato', alt: 'Guias de Portugal Faca de Mato', src: '1.Diversos_faca_de_mato.png', preço: '14,5€' },
    { id: 21, categoria: 'diversos', descricao: 'Apito', alt: 'Guias de Portugal Apito', src: '2.Diversos_apito.png', preço: '3,2€' },
    { id: 22, categoria: 'diversos', descricao: 'Colete', alt: 'Guias de Portugal Colete', src: '3.Diversos_colete_AGP.png', preço: '6,5€/7,5€' },
    { id: 23, categoria: 'diversos', descricao: 'Cadernos', alt: 'Guias de Portugal Cadernos', src: '4.Diversos_cadernos_AGP.png', preço: '3,5€' },
    { id: 24, categoria: 'diversos', descricao: 'Caneta', alt: 'Guias de Portugal Caneta', src: '5.Diversos_caneta_AGP.png', preço: '0,50€' },
];


class LojaMaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = { artigos: artigos, modo: '' };

    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        // let url = ''
        // fetch(url).then((response) => response.json()).then((json) => this.setState({ artigos: json }));

        window.scrollTo(0, 0);
        const { match } = this.props;
        console.log(this.props);
        let getModo = match.params.modo;
        this.setState({ modo: getModo });
    }

    componentDidUpdate = () => {
        // let url = ''
        // fetch(url).then((response) => response.json()).then((json) => this.setState({ artigos: json }));
        const { match } = this.props;
        let newModo = match.params.modo;
        if (this.state.modo !== newModo) {
            this.setState({ modo: newModo });
        }
    }


    render() {
        return (

            <div className="Body" >
                <div className="Body-Loja">
                    <h2 class="tituloLoja">{this.state.modo}</h2>
                    <p class="textoLoja">Catálogo dos produtos à venda <br />no Depósito de Material e Fardamento. <br />Consultar horários da Loja
                    <Link to="/contactos/sede"> aqui</Link>
                    .</p>
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
        );
    }
}

export default LojaMaster;
