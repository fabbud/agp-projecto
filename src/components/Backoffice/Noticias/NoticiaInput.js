import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'rc-datepicker/lib/style.css';
import { Button } from 'react-bootstrap';
import './Noticias/NoticiaInput.css';

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
    };
  }

  updateField = (e) => {
    const { value } = e.target;
    const { name } = e.target;
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
    const { editorStatePT, editorStateEN, ...article } = this.state;
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
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postData();
  };

  setStartDate = (date) => {
    this.setState({ date });
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
    } = this.state;
    return (
      <div className="NoticiaInput">
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <p>Título PT:</p>
            <input
              type="text"
              name="pt_title"
              value={pt_title}
              onChange={this.updateField}
              placeholder="Máximo 80 caracteres"
            />
          </div>
          <div className="input">
            <p>Título EN:</p>
            <input
              type="text"
              name="en_title"
              value={en_title}
              onChange={this.updateField}
              placeholder="Máximo 80 caracteres"
            />
          </div>

          <div className="input">
            <p>Descrição PT:</p>
            <input
              type="text"
              name="pt_intro_text"
              value={pt_intro_text}
              onChange={this.updateField}
              placeholder="Máximo 100 caracteres"
            />
          </div>
          <div className="input">
            <p>Descrrição EN:</p>
            <input
              type="text"
              name="en_intro_text"
              value={en_intro_text}
              onChange={this.updateField}
              placeholder="Máximo 100 caracteres"
            />
          </div>
          <div className="input">
            <p>Data Completa:</p>
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.updateField}
            />
          </div>
          <div className="input">
            <p>Data PT:</p>
            <input
              type="text"
              name="pt_date"
              value={pt_date}
              onChange={this.updateField}
              placeholder="MMM AAAA"
            />
          </div>
          <div className="input">
            <p>Data EN:</p>
            <input
              type="text"
              name="en_date"
              value={en_date}
              onChange={this.updateField}
              placeholder="MMM YYYY"
            />
          </div>
          <div className="input">
            <p>Thumbnail:</p>
            <input
              type="text"
              name="thumbnail"
              value={thumbnail}
              onChange={this.updateField}
              placeholder="Link da imagem"
            />
          </div>
          <div className="input">
            <p>Image:</p>
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.updateField}
              placeholder="Link da imagem"
            />
          </div>
          <p>Conteúdo PT:</p>
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
          <p>Conteúdo EN</p>
          <Editor
            editorState={editorStateEN}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
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
          <div className="Input">
            <label>
              <input type="checkbox" value={publish} onChange={this.handleCheckboxChange} />
              Publicar
            </label>
          </div>
          <div className="button">
            <Button
              className="button"
              variant="contained"
              color="primary"
              type="submit"
            >
              ENVIAR
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoticiaInput;
