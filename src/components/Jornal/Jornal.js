import React from 'react';
import JornalCapa from './JornalCapa'
import './Jornal.css'

let titulo = ''

let edicoes = [
    { publicar: true, edicao: 27, ano: '2020', titulo: 'Eu e o outro: despertar para uma relação positiva', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_27.jpg', pdf: 'TREVO_27.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 26, ano: '2019', titulo: 'Educar para o empreendedorismo', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_26.jpg', pdf: 'TREVO_26.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 25, ano: '2019', titulo: 'Olave. A criança, a mulher, a chefe mundial das guias', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_25.jpg', pdf: 'TREVO_25.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 24, ano: '2018', titulo: 'Objectivos de desenvolvimento sustentável', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_24.jpg', pdf: 'TREVO_24.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 23, ano: '2018', titulo: 'Jogar o jogo', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_23.jpg', pdf: 'TREVO_23.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 22, ano: '2017', titulo: 'Otimismo. Caminho a seguir', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_22.jpg', pdf: 'TREVO_22.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 21, ano: '2017', titulo: 'Ar Livre. Um laboratório, um livro, um templo', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_21.jpg', pdf: 'TREVO_21.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 20, ano: '2016', titulo: 'Associação Guias de Portugal. 85 anos a educar', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_20.jpg', pdf: 'TREVO_20.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 19, ano: '2016', titulo: 'Jogos Olímpicos. Mais rápido, mais alto e mais forte', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_19.jpg', pdf: 'TREVO_19.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 18, ano: '2015', titulo: 'Política para todos', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_18.jpg', pdf: 'TREVO_18'.pdf, temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 17, ano: '2015', titulo: 'Internet: navegar é preciso, mas em segurança', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_17.jpg', pdf: 'TREVO_17.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
    { publicar: true, edicao: 16, ano: '2014', titulo: 'Desperdício alimentar da terra até à mesa', alt: 'Guias de Portugal Jornal O Trevo', src: 'CoverTREVO_16.jpg', pdf: 'TREVO_16.pdf', temas: ['Compreender o empreendedorismo', 'À conversa com Patrícia Jardim da Palma', 'A Guia portuguesa que se correspondia com Olave', 'Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo'] },
]

class Jornal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { edicoes: edicoes }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }



    render() {
        return (
            <div className="Jornal">
                <h2 className="oTrevo">Jornal "O Trevo"</h2>
                <p className="textoIntroducao">Publicação semestral da AGP que aborda temas da<br />atualidade e divulga as atividades da associação </p>
                <p className="textoIntroducao">Edições disponíveis para download. Edição mais<br />recente à venda na Companhia mais próxima </p>
                <div className="edicoesJornal">
                    {
                        this.state.edicoes.map((edicao) => (
                            <> {edicao.publicar === true &&
                                < JornalCapa
                                    titulo={edicao.titulo}
                                    ano={edicao.ano}
                                    edicao={edicao.edicao}
                                    src={edicao.src}
                                    alt={edicao.alt}
                                    pdf={edicao.pdf}
                                    temas={edicao.temas}
                                />
                            }</>
                        ))}
                </div>
            </div>
        )

    }
}



export default Jornal