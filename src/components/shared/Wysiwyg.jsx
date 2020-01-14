import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, contentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class ControlledEditor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editorState: EditorState.createEmpty(),
      };
    }
  
    onEditorStateChange: Function = (editorState) => {
      this.setState({
        editorState,
      });
    };
  
    render() {
      const { editorState } = this.state;
      return (
          <>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
      </>
      )
    }
  }
 
export default ControlledEditor;