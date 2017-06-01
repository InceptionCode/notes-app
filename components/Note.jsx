import React, {Component} from 'react';

function Note(props){
  // 7/13/16 jpm - pull the deleteNote fn and note object out of the props
  // then call deleteNote with this specific note
  const {editNote,deleteNote, note} = props;
  return (
    <div>
    <li>{props.note.text}</li>
      <p>{props.note.tag}</p>
      <span onClick= {() => editNote (note)}> Edit </span> 
      <span onClick= {() => deleteNote(note)}> Delete </span>
      <hr/>
    </div>
  );
}

export default Note