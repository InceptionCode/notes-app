import React, {Component} from 'react';

function NoteForm(props){

  return (
    <div>
      <form onSubmit = {props.addNote}>
        <textarea onChange={props.inputNote} 
        placeholder= "Add note. . ." value={props.input} />
        <input className="add-tag" type="text" onChange={props.inputTag}
          placeholder="Add tags..." value={props.tags} />
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
}

export default NoteForm