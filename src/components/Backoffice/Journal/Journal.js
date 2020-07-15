import React from 'react';

class Journal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            journal: {
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
    }



    componentDidMount = () => {
        window.scrollTo(0, 0);
        const { match } = this.props;
        let getEdition = match.params.edition;
        if (getEdition) {
            fetch('/journal/24',
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        journal: res[0]
                    })
                })
        }
    }

    updateField = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value })
        console.log(name)
        console.log(value)
    }

    updatePublish = () => {
        const publish = this.state.journal.publish;
        this.setState({ publish: !publish });
    }


    

    handleSubmit = (event) => {
        event.preventDefault()
        const { flash, ...newEdition } = this.state.journal
        const { match } = this.props;
        let getEdition = match.params.edition;
        console.log(getEdition)
        if (getEdition) {
            fetch("/editPublication",
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
            console.log(JSON.stringify(this.state.journal.flash))
            console.log(newEdition)
        } else {
            fetch("/publish",
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
            console.log(JSON.stringify(this.state.journal.flash))

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
        } = this.state.journal;
        console.log(this.state.journal)

        return (
            <div>
                <h2>Jornal</h2>

                <form onSubmit={this.handleSubmit}>
                    <div>Número Edição:</div>
                    <input type='text' name='journal.edition' defaultValue={edition} onChange={(event) => this.updateField(event)} />
                    <div>Título Pt:</div>
                    <input type='text' name='journal.pt_title' defaultValue={pt_title} onChange={(event) => this.updateField(event)} />
                    <div>Título En:</div>
                    <input type='text' name='journal.en_title' vadefaultValuelue={en_title} onChange={(event) => this.updateField(event)} />
                    <div>Ano:</div>
                    <input type='text' name='journal.year' valdefaultValueue={year} onChange={(event) => this.updateField(event)} />
                    <div>Imagem:</div>
                    <input type='text' name='journal.thumbnail' defaultValue={thumbnail} onChange={(event) => this.updateField(event)} />
                    <div>Pdf:</div>
                    <input type='text' name='journal.pdf_link' defaultValue={pdf_link} onChange={(event) => this.updateField(event)} />
                    <div>Título 1 Pt:</div>
                    <input type='text' name='journal.pt_intro_text_1' defaultValue={pt_intro_text_1} onChange={(event) => this.updateField(event)} />
                    <div>Título 2 Pt:</div>
                    <input type='text' name='journal.pt_intro_text_2' defaultValue={pt_intro_text_2} onChange={(event) => this.updateField(event)} />
                    <div>Título 3 Pt:</div>
                    <input type='text' name='journal.pt_intro_text_3' defaultValue={pt_intro_text_3} onChange={(event) => this.updateField(event)} />
                    <div>Título 4 Pt:</div>
                    <input type='text' name='journal.pt_intro_text_4' defaultValue={pt_intro_text_4} onChange={(event) => this.updateField(event)} />
                    <div>Título 5 Pt:</div>
                    <input type='text' name='journal.pt_intro_text_5' defaultValue={pt_intro_text_5} onChange={(event) => this.updateField(event)} />
                    <div>Título 1 En:</div>
                    <input type='text' name='journal.en_intro_text_1' defaultValue={en_intro_text_1} onChange={(event) => this.updateField(event)} />
                    <div>Título 2 En:</div>
                    <input type='text' name='journal.en_intro_text_2' defaultValue={en_intro_text_2} onChange={(event) => this.updateField(event)} />
                    <div>Título 3 En:</div>
                    <input type='text' name='journal.en_intro_text_3' defaultValue={en_intro_text_3} onChange={(event) => this.updateField(event)} />
                    <div>Título 4 En:</div>
                    <input type='text' name='journal.en_intro_text_4' defaultValue={en_intro_text_4} onChange={(event) => this.updateField(event)} />
                    <div>Título 5 En:</div>
                    <input type='text' name='journal.en_intro_text_5' defaultValue={en_intro_text_5} onChange={(event) => this.updateField(event)} />
                    <div>Publicar</div>
                    <input type='checkbox' name='publish' defaultValue={publish} onChange={this.updatePublish} />
                    <button type='submit'>ENVIAR</button>
                </form>
            </div>
        )
    }

}

export default Journal;