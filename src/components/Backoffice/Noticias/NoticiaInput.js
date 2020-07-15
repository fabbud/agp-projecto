import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'rc-datepicker/lib/style.css';
import './NoticiaInput.css';
import PopUp from '../PopUp/PopUp';

class NoticiaInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pt_title: '',
      en_title: '',
      thumbnail: '',
      image: '',
      pt_intro_text: '',
      en_intro_text: '',
      pt_date: '',
      en_date: '',
      date: '',
      publish: false,
      editorStatePT: EditorState.createEmpty(),
      editorStateEN: EditorState.createEmpty(),
      pt_content: {},
      en_content: {},
      messageStatus: '',
      flash: '',
    };
  }

  updateField = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  onEditorStateChangePT = (editorStatePT) => {
    this.setState({ editorStatePT });
    const { pt_content } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStatePT.getCurrentContent(),
    );
    const HtmlContentPT = draftToHtml(rawContentState);
    this.setState({ pt_content: HtmlContentPT });
    // console.log(pt_content);
  };

  onEditorStateChangeEN = (editorStateEN) => {
    this.setState({ editorStateEN });
    const { en_content } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStateEN.getCurrentContent(),
    );
    const HtmlContentEN = draftToHtml(rawContentState);
    this.setState({ en_content: HtmlContentEN });
    // console.log(en_content);
  };

  handleCheckboxChange = () => {
    const { publish } = this.state;
    this.setState({ publish: !publish });
  };

  postData = () => {
    const { editorStatePT, editorStateEN, messageStatus, flash, ...article } = this.state;
    console.log(article);
    fetch('/news', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(article),
    }).then((res) => res.json());
    // .then(
    //   (res) => this.setState({ flash: res.flash }),
    //   (err) => this.setState({ flash: err.flash })
    // );
    //   this.setState({ flash: 'Ocorreu um erro, por favor tente mais tarde.' })
    //   this.setState({ messageStatus: 'error' })
    //   this.setState({ flash: 'Guardado com sucesso.' }),
    //   this.setState({ messageStatus: 'success' }),
    // );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postData();
  };


  render() {
    const {
      pt_title,
      en_title,
      pt_intro_text,
      en_intro_text,
      pt_date,
      en_date,
      thumbnail,
      image,
      date,
      publish,
      editorStatePT,
      editorStateEN,
      flash,
      messageStatus,
    } = this.state;

    return (
      <div className="NoticiaInput">
        <div className="NoticiaInput-title">Notícias</div>
        <div className="NoticiaInput-section">
          <form onSubmit={this.handleSubmit}>
            <div className="input">
              <div className="input-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_title"
                value={pt_title}
                onChange={this.updateField}
                placeholder="Máximo de 80 caracteres"
                maxLength="80"
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título EN:</div>
              <input
                type="text"
                name="en_title"
                value={en_title}
                onChange={this.updateField}
                placeholder="Maximum of 80 characters"
                maxLength="80"
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Descrição PT:</div>
              <input
                type="text"
                name="pt_intro_text"
                value={pt_intro_text}
                onChange={this.updateField}
                placeholder="Máximo de 100 caracteres"
                maxLength="100"
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Descrição EN:</div>
              <input
                type="text"
                name="en_intro_text"
                value={en_intro_text}
                onChange={this.updateField}
                placeholder="Maximum of 100 characters"
                maxLength="100"
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Data completa:</div>
              <input
                className="label-uppercase"
                type="date"
                name="date"
                value={date}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input-legendas-datas">
              <div className="input">
                <div className="input-section-label">Legenda Data PT:</div>
                <input
                  type="text"
                  name="pt_date"
                  value={pt_date}
                  onChange={this.updateField}
                  placeholder="Ex: ABR 2020"
                  maxLength="8"
                  required
                />
              </div>
              <div className="input">
                <div className="input-section-label">Legenda Data EN:</div>
                <input
                  type="text"
                  name="en_date"
                  value={en_date}
                  onChange={this.updateField}
                  placeholder="Ex: APR 2020"
                  maxLength="8"
                  required
                />
              </div>
            </div>
            <div className="input">
              <div className="input-section-label">Thumbnail:</div>
              <input
                type="text"
                name="thumbnail"
                value={thumbnail}
                onChange={this.updateField}
                placeholder="Link da imagem pequena para a página das notícias"
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Image:</div>
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.updateField}
                placeholder="Link da imagem para o conteúdo da notícia"
                required
              />
            </div>
            <div className="input input-block">
              <div className="input-section-label">Conteúdo PT:</div>
              <Editor
                editorState={editorStatePT}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChangePT}
                toolbar={{
                  options: [
                    'inline',
                    'blockType',
                    'fontSize',
                    'fontFamily',
                    'list',
                    'textAlign',
                    'colorPicker',
                    'link',
                    'embedded' /* , 'emoji' */,
                    'image' /* , 'remove' */,
                    'history',
                  ],
                }}
              />
            </div>
            <div className="input input-block">
              <div className="input-section-label">Conteúdo EN:</div>
              <Editor
                editorState={editorStateEN}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangeEN}
                toolbar={{
                  options: [
                    'inline',
                    'blockType',
                    'fontSize',
                    'fontFamily',
                    'list',
                    'textAlign',
                    'colorPicker',
                    'link',
                    'embedded' /* , 'emoji' */,
                    'image' /* ,  'remove' */,
                    'history',
                  ],
                }}
              />
            </div>
            <div className="input-section-checkbox">
              <div className="input-section-label-checkbox">Publicar:</div>
              <input
                className="input-checkbox"
                type="checkbox"
                value={publish}
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className="NoticiaInput-section-button">
              <button
                className="login-button"
                variant="contained"
                color="primary"
                type="submit"
              >
                GUARDAR
              </button>
            </div>
          </form>
        </div>
        <PopUp flashInput={flash} typeMessage={messageStatus} />
      </div>
    );
  }
}

export default NoticiaInput;
