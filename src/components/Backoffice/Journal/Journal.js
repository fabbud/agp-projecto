import React from 'react';
import './Journal.css';

class Journal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            publish: false,
            edition: '',
            year: '',
            pt_title: '',
            en_title: '',
            thumbnail: '',
            pdf_link: '',
            pt_intro_text_1: '',
            pt_intro_text_2: '',
            pt_intro_text_3: '',
            pt_intro_text_4: '',
            pt_intro_text_5: '',
            en_intro_text_1: '',
            en_intro_text_2: '',
            en_intro_text_3: '',
            en_intro_text_4: '',
            en_intro_text_5: '',
            flash: ''
        }
    }



    componentDidMount = () => {
        window.scrollTo(0, 0);
        const { match } = this.props;
        let getEdition = match.params.edition;
        if (getEdition) {
            fetch(`/journal/${getEdition}`,
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Typge': 'application/json'
                    }),
                })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        edition: res[0].edition,
                        year: res[0].year,
                        pt_title: res[0].pt_title,
                        en_title: res[0].en_title,
                        thumbnail: res[0].thumbnail,
                        pdf_link: res[0].pdf_link,
                        pt_intro_text_1: res[0].pt_intro_text_1,
                        pt_intro_text_2: res[0].pt_intro_text_2,
                        pt_intro_text_3: res[0].pt_intro_text_3,
                        pt_intro_text_4: res[0].pt_intro_text_4,
                        pt_intro_text_5: res[0].pt_intro_text_5,
                        en_intro_text_1: res[0].en_intro_text_1,
                        en_intro_text_2: res[0].en_intro_text_2,
                        en_intro_text_3: res[0].en_intro_text_3,
                        en_intro_text_4: res[0].en_intro_text_4,
                        en_intro_text_5: res[0].en_intro_text_5,
                        publish: res[0].publish,
                    })
                })
        }
    }

    updateField = (event) => {
        event.preventDefault();
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value })
    }

    updatePublish = () => {
        const publish = this.state.publish;
        this.setState({ publish: !publish });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { flash, ...newEdition } = this.state
        const { match } = this.props;
        let getEdition = match.params.edition;
        console.log(getEdition)
        if (getEdition) {
            console.log(newEdition)
            fetch("/journal/editPublication",
                {
                    method: 'PUT',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(newEdition),

                })
                .then(res => res.json())
                .then(
                    res => this.setState({ "flash": res.flash }),
                    err => this.setState({ "flash": err.flash })
                )
            //console.log(JSON.stringify(this.state.journal.flash))
        } else {
            console.log(newEdition)
            fetch("/journal/publish",
                {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(newEdition),
                })
                .then(res => res.json())
                .then(
                    res => this.setState({ "flash": res.flash }),
                    err => this.setState({ "flash": err.flash })
                )
            //console.log(JSON.stringify(this.state.journal.flash))
        }
    }

    render() {
        const {
            publish,
            edition,
            year,
            pt_title,
            en_title,
            thumbnail,
            pdf_link,
            pt_intro_text_1,
            pt_intro_text_2,
            pt_intro_text_3,
            pt_intro_text_4,
            pt_intro_text_5,
            en_intro_text_1,
            en_intro_text_2,
            en_intro_text_3,
            en_intro_text_4,
            en_intro_text_5
        } = this.state;

        console.log("pdf final", pdf_link)

        const { match } = this.props;
        let getEdition = match.params.edition;


        return (
            <div class='body'>


                <form className="NoticiaInput-section" onSubmit={this.handleSubmit}>
                    <div className="NoticiaInput-title">Jornal</div>
                    {!getEdition ? <div className='input'>
                        <div className="input-section-label">Número Edição:</div>
                        <input type='text' name='edition' value={edition} onChange={(event) => this.updateField(event)} />
                    </div> : <div className="input-section-label-edicao">{edition}ª edição</div>}
                    <div className='input'>
                        <div className="input-section-label">Título Pt:</div>
                        <input type='text' name='pt_title' value={pt_title} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título En:</div>
                        <input type='text' name='en_title' value={en_title} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Ano:</div>
                        <input type='text' name='year' value={year} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Imagem:</div>
                        <input type='text' name='thumbnail' value={thumbnail} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Pdf:</div>
                        <input type='text' name='pdf_link' value={pdf_link} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 1 Pt:</div>
                        <input type='text' name='pt_intro_text_1' value={pt_intro_text_1} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 2 Pt:</div>
                        <input type='text' name='pt_intro_text_2' value={pt_intro_text_2} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 3 Pt:</div>
                        <input type='text' name='pt_intro_text_3' value={pt_intro_text_3} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 4 Pt:</div>
                        <input type='text' name='pt_intro_text_4' value={pt_intro_text_4} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 5 Pt:</div>
                        <input type='text' name='pt_intro_text_5' value={pt_intro_text_5} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 1 En:</div>
                        <input type='text' name='en_intro_text_1' value={en_intro_text_1} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 2 En:</div>
                        <input type='text' name='en_intro_text_2' value={en_intro_text_2} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 3 En:</div>
                        <input type='text' name='en_intro_text_3' value={en_intro_text_3} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 4 En:</div>
                        <input type='text' name='en_intro_text_4' value={en_intro_text_4} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label">Título 5 En:</div>
                        <input type='text' name='en_intro_text_5' value={en_intro_text_5} onChange={(event) => this.updateField(event)} />
                    </div>
                    <div className='input'>
                        <div className="input-section-label-publish">Publicar</div>
                        <input type='checkbox' name='publish' value={publish} onChange={this.updatePublish} />
                    </div>
                    <div className="NoticiaInput-section-button">
                        <button className="login-button" variant="contained" color="primary" type='submit'>ENVIAR</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Journal;