import React from 'react';
import PropTypes from 'prop-types';
import './Journal.css';
import PopUp from '../PopUp/PopUp';

class Journal extends React.Component {
    constructor(props) {
        super(props);
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
            flash: '',
            messageStatus: '',
        };
    }



    componentDidMount = () => {
        window.scrollTo(0, 0);
        const { match } = this.props;
        const getEdition = match.params.edition;
        if (getEdition) {
            fetch(`/journal/${getEdition}`,
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Typge': 'application/json',
                    }),
                })
                .then(res => res.json())
                .then(res => {

                    let getPublish = res[0].publish;
                    if (getPublish === 1) {
                        getPublish = true;
                    } else {
                        getPublish = false;
                    }
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
                        publish: getPublish,
                    });
                });
        }
    }

    updateField = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    updatePublish = () => {
        const { publish } = this.state;
        this.setState({ publish: !publish });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { flash, messageStatus, ...newEdition } = this.state;
        const { match, history } = this.props;
        const getEdition = match.params.edition;
        console.log(getEdition);
        if (getEdition) {
            fetch("/journal/editPublication",
                {
                    method: 'PUT',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }),
                    body: JSON.stringify(newEdition),
                })
                .then(res => res.json())
                .then((res) => {
                  this.setState({ messageStatus: 'success' });
                  this.setState({ flash: 'Guardado com sucesso.' });
                })
                .catch((err) => {
                  this.setState({ messageStatus: 'error' });
                  this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.' });
                });
        } else {
            fetch("/journal/publish",
                {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }),
                    body: JSON.stringify(newEdition),
                })
                .then(res => res.json())
                .then((res) => {
                    console.log("1 ok");
                    this.setState({ messageStatus: 'success' });
                    this.setState({ flash: 'Guardado com sucesso.' });
                })
                .catch((err) => {
                    console.log("2 erro");
                    this.setState({ messageStatus: 'error' });
                    this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.' });
                });
        }
        history.push({pathname: '/backoffice/journal/painel' });
    }

    render() {
        const {
            flash,
            messageStatus,
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

        const { match } = this.props;
        const getEdition = match.params.edition;


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
                        <input type='checkbox' name='publish' value={publish} checked={publish} onChange={this.updatePublish} />
                    </div>
                    <div className="NoticiaInput-section-button">
                        <button className="login-button" variant="contained" color="primary" type='submit'>GUARDAR</button>
                    </div>
                </form>
                <PopUp flashInput={flash} typeMessage={messageStatus} />
            </div>
        );
    }

}

Journal.propTypes = {
    match: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired,
  };

export default Journal;
