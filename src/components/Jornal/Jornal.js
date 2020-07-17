import React from 'react';
import JornalCapa from './JornalCapa'
import './Jornal.css'
import JSONTransport from 'nodemailer/lib/json-transport';


class Jornal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { edicoes: [] }
    }

    fetchJournal = () => {
        fetch('/journal', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }).then((res) => res.json())
        .then((json) => {
            this.setState({ edicoes: json });
            console.log(json);

        })
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        this.fetchJournal();
    }

    render() {

        return (
            <div className="Jornal">
                <h2 className="oTrevo">Jornal "O Trevo"</h2>
                <p className="textoIntroducao">Publicação semestral da AGP que aborda temas da<br />atualidade e divulga as atividades da associação </p>
                <p className="textoIntroducao">Edições disponíveis para download. Edição mais<br />recente à venda na Companhia mais próxima </p>
                <div className="edicoesJornal">

                    {
                        this.state.edicoes.map((edicao, index) => (
                            <> {edicao.publish === 1 &&
                                < JornalCapa
                                    titulo={edicao.pt_title}
                                    ano={edicao.year}
                                    edicao={edicao.edition}
                                    src={edicao.thumbnail}
                                    // alt={edicao.alt}
                                    pdf={edicao.pdf_link}
                                    temas1_pt={edicao.pt_intro_text_1}
                                    temas2_pt={edicao.pt_intro_text_2}
                                    temas3_pt={edicao.pt_intro_text_3}
                                    temas4_pt={edicao.pt_intro_text_4}
                                    temas5_pt={edicao.pt_intro_text_5}
                                    temas1_en={edicao.en_intro_text_1}
                                    temas2_en={edicao.en_intro_text_2}
                                    temas3_en={edicao.en_intro_text_3}
                                    temas4_en={edicao.en_intro_text_4}
                                    temas5_en={edicao.en_intro_text_5}
                                    index={index}
                                />
                            }</>
                        ))}
                </div>
            </div>
        )

    }
}

// [
//     { "publish": true, "edition": 27, "year": "2020", "pt_title": "Eu e o outro: despertar para uma relação positiva", "en_title": "", "thumbnail": "CoverTREVO_27.jpg", "pdf_link": "TREVO_27.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 26, "year": "2019", "pt_title": "Educar para o empreendedorismo", "en_title": "", "thumbnail": "CoverTREVO_26.jpg", "pdf_link": "TREVO_26.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 25, "year": "2019", "pt_title": "Olave. A criança, a mulher, a chefe mundial das guias", "en_title": "", "thumbnail": "CoverTREVO_25.jpg", "pdf_link": "TREVO_25.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 24, "year": "2018", "pt_title": "Objectivos de desenvolvimento sustentável", "en_title": "", "thumbnail": "CoverTREVO_24.jpg", "pdf_link": "TREVO_24.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 23, "year": "2018", "pt_title": "Jogar o jogo", "en_title": "", "thumbnail": "CoverTREVO_23.jpg", "pdf_link": "TREVO_23.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 22, "year": "2017", "pt_title": "Otimismo. Caminho a seguir", "en_title": "", "thumbnail": "CoverTREVO_22.jpg", "pdf_link": "TREVO_22.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 21, "year": "2017", "pt_title": "Ar Livre. Um laboratório, um livro, um templo", "en_title": "", "thumbnail": "CoverTREVO_21.jpg", "pdf_link": "TREVO_21.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 20, "year": "2016", "pt_title": "Associação Guias de Portugal. 85 anos a educar", "en_title": "", "thumbnail": "CoverTREVO_20.jpg", "pdf_link": "TREVO_20.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 19, "year": "2016", "pt_title": "Jogos Olímpicos. Mais rápido, mais alto e mais forte", "en_title": "", "thumbnail": "CoverTREVO_19.jpg", "pdf_link": "TREVO_19.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 18, "year": "2015", "pt_title": "Política para todos", "en_title": "", "thumbnail": "CoverTREVO_18.jpg", "pdf_link": "TREVO_18.jpg", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 17, "year": "2015", "pt_title": "Internet: navegar é preciso, mas em segurança", "en_title": "", "thumbnail": "CoverTREVO_17.jpg", "pdf_link": "TREVO_17.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" },
//     { "publish": true, "edition": 16, "year": "2014", "pt_title": "Desperdício alimentar da terra até à mesa", "en_title": "", "thumbnail": "CoverTREVO_16.jpg", "pdf_link": "TREVO_16.pdf", "pt_intro_text_1": "Compreender o empreendedorismo", "pt_intro_text_2": "À conversa com Patrícia Jardim da Palma", "pt_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "pt_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "pt_intro_text_5": "", "en_intro_text_1": "Compreender o empreendedorismo", "en_intro_text_2": "À conversa com Patrícia Jardim da Palma", "en_intro_text_3": "A Guia portuguesa que se correspondia com Olave", "en_intro_text_4": "Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo", "en_intro_text_5": "" }
// ]


export default Jornal;
