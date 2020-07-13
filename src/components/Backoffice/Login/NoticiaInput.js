import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Calendar from "react-calendar";
import { Button } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";

class NoticiaInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pt_title: "",
      en_title: "",
      thumbnail: "",
      image: "",
      pt_intro_text: "",
      en_intro_text: "",
      pt_date: "",
      en_date: "",
      date: "",
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

  onChange = (date) => {
    const newDate = date.toISOString().substr(0, 10);
    console.log(newDate);
    this.setState({ date: newDate });
  };

  onEditorStateChangePT = (editorStatePT) => {
    this.setState({ editorStatePT });
    const { pt_content } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStatePT.getCurrentContent()
    );
    const HtmlContentPT = draftToHtml(rawContentState);
    this.setState({ pt_content: HtmlContentPT });
    console.log(pt_content);
    // console.log({
    //   pt_content: draftToHtml(convertToRaw(pt_content.getCurrentContent())),
    // });
  };

  onEditorStateChangeEN = (editorStateEN) => {
    this.setState({ editorStateEN });
    const { en_content } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStateEN.getCurrentContent()
    );
    const HtmlContentEN = draftToHtml(rawContentState);
    this.setState({ en_content: HtmlContentEN });
    console.log(en_content);
    // console.log({
    //   en_content: draftToHtml(convertToRaw(en_content.getCurrentContent())),
    // });
  };

  postData = () => {
    const { editorStatePT, editorStateEN, ...article } = this.state;
    console.log(article);
    fetch("/news", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
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
      editorStatePT,
      editorStateEN,
    } = this.state;
    return (
      <div className="NoticiaInput">
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <p>title PT:</p>
            <input
              type="text"
              name="pt_title"
              value={pt_title}
              onChange={this.updateField}
            />
          </div>
          <div className="input">
            <p>title EN:</p>
            <input
              type="text"
              name="en_title"
              value={en_title}
              onChange={this.updateField}
            />
          </div>
          <div className="input">
            <p>description PT:</p>
            <input
              type="text"
              name="pt_intro_text"
              value={pt_intro_text}
              onChange={this.updateField}
            />
          </div>
          <div className="input">
            <p>description EN:</p>
            <input
              type="text"
              name="en_intro_text"
              value={en_intro_text}
              onChange={this.updateField}
            />
          </div>
          <div className="input">
            <p>date PT:</p>
            <input
              type="text"
              name="pt_date"
              value={pt_date}
              onChange={this.updateField}
            />
          </div>
          <div className="input">
            <p>date EN:</p>
            <input
              type="text"
              name="en_date"
              value={en_date}
              onChange={this.updateField}
            />
          </div>
          <div>
            <Calendar onChange={this.onChange} value={date} />
          </div>
          <div className="input">
            <p>thumbnail:</p>
            <input
              type="text"
              name="thumbnail"
              value={thumbnail}
              onChange={this.updateField}
            />
          </div>
          <div className="input">
            <p>image:</p>
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.updateField}
            />
          </div>
          <p>Content PT:</p>

          <Editor
            editorState={editorStatePT}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChangePT}
            toolbar={{
              options: [
                "inline",
                "blockType",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "embedded" /* , 'emoji' */,
                "image" /* , 'remove' */,
                "history",
              ],
            }}
          />
          <p>Content EN</p>
          <Editor
            editorState={editorStateEN}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChangeEN}
            toolbar={{
              options: [
                "inline",
                "blockType",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "embedded" /* , 'emoji' */,
                "image" /* ,  'remove' */,
                "history",
              ],
            }}
          />
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
