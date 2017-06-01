import React, {Component} from 'react';
import Note from './Note.jsx';

function NoteList(props){
  return (
    <ul>
        {
          
          props.notes.map(note => {
            return (
              <Note key={note.id} note={note} deleteNote={props.deleteNote} 
              editNote = {props.editNote}/>
            );
          })
        }
      </ul>
  );
}

export default NoteList