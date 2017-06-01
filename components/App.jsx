import React, {Component} from 'react';
import NoteList from './NoteList.jsx';
import NoteForm from './NoteForm.jsx';
import Filter from './Filter.jsx';

const axios = require('axios');
const url = 'https://reactnotes-ea7bd.firebaseio.com/notes/.json';
const editUrl = 'https://reactnotes-ea7bd.firebaseio.com/notes/';
const fuzzy = require('fuzzy');

function getNotes(url, cb) {
  let promise = axios.get(url);
  
  promise
    .then(result => {
      const notes = [];
      for (let id in result.data) {
        const note = {
            id, tag: result.data[id].tag, 
            text: result.data[id].text
          };
        notes.push(note);
      }
      cb(null, notes);
    }, err => {
      cb(err);
    });
}

function getTags(url,cb) {
  let promise = axios.get(url);
  
  promise
    .then(result => {
      const tags = [];
      for (let id in result.data) {
        const tag = result.data[id].tag || [];
        
        tag.forEach((element,index) => {
          var newTags = tag[index];
          tags.push(newTags);
        });
      }
      //console.log(tags)
      cb(null, tags);
    }, err => {
      cb(err);
    });
}



class App extends Component {
  componentWillMount () {
    getNotes(url, (err, notes) => {
      if (err) {
        return console.log(err);
      }
      this.setState({notes});
    });
    
    getTags(url, (err, tags) => {
      if (err) {
        return console.log(err);
      }
      this.setState({tagLists: tags});
    });
  }
  
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      input: "",
      tags: "",
      tagLists: [],
      search: ''
    };
  }

  inputNote(e) {
    this.setState({input: e.target.value});
  }
  inputTag(e) {
    this.setState({tags: e.target.value});
  }
  inputSearch(e) {
    this.setState({search: e.target.value});
  }
              /* Filter Notes by Tags
              ---------------------- */
  
filterNotes(e) {
    e.preventDefault();
    const tagCategory = this.state.search;
    
    let promise = axios.get(url);
    promise
      .then(result => {
        const notes = [];
        for (let id in result.data) {
          const note = {
              id, tag: result.data[id].tag, 
              text: result.data[id].text
            };
          notes.push(note);
         
        } 
      let newNotes;
      if (tagCategory === '') {
        newNotes = notes;
      }
      else {
        var options = {
          pre: '<'
        , post: '>'
        , extract: function(el) { return el.rompalu; }
      };
      newNotes = fuzzy.filter('bcn', notes,options);
      var matches = newNotes.map(function(el) { return el.string; });
        // newNotes = notes.filter(note => {
        //   return note.tag && note.tag.indexOf(tagCategory) > -1;
        // });
      }
        this.setState({notes: newNotes});
    }, err => {
      console.log(err);
    });
}


                /* Add Tags 
                ------------ */

  
  // UPDATE NOTE NEEDS TO BE FIXED
  updateNote() {
    let notes = this.state.notes;
    let id = this.state.editNoteId;
    let text= this.state.input;
    let tag = this.state.tags;
    let tagList = tag.split(',');
    
    axios.put(editUrl + id + '.json', {text, tag: tagList})
      .then( result => {
        let newNotes = notes.map( note => {
          if(note.id === id){
            note.text = text;
            note.tag = tagList;
          }
          return note;
        });
        this.setState({notes: newNotes, input: '', tags: ''});
      }, err => {
        console.log(err);
      });
    
  }
  

  insertNote() {
    let notes = this.state.notes;
    let text = this.state.input;
    let tags = this.state.tags;
    let tagList = tags.split(',');
    let tagLists = this.state.tagLists;

    axios.post(url, {text, tag: tagList})
     .then(result => {
       notes.push({id: result.data.name, text, tag: tagList});
       tagLists.push(tags);
       
        this.setState({
          notes,
          tagLists,
          input: "",
          tags: '',
        });
     }, err => {
       console.log(err);
     });

  }
  
  addNote(e) {
    e.preventDefault();
    if(this.state.editNoteId){
      this.updateNote();
    }
    else {
      this.insertNote();
    }
  }
  
  deleteNote (note) {
    
    // 7/13/16 jpm - create a new array of notes, by filtering the note to be
    // deleted
    const notes = this.state.notes.filter( n => n.id !== note.id );
    const deleteUrl = 'https://reactnotes-ea7bd.firebaseio.com/notes/';  
    const id = note.id;

    axios.delete(deleteUrl + id + '.json')
        .then(result => {
          this.setState({notes: notes});
        }, err => {
          console.log(err);
        });
  }
  
  editNote (note) {
    let text = note.text;
    let id = note.id;
    let tag = note.tag;
    
    this.setState({
      input: text,
      tags: tag,
      editNoteId: id
    });
  }
  render(){
    return (
      <div>
        <Filter search= {this.state.search} filterNotes={this.filterNotes.bind(this)}
                inputSearch= {this.inputSearch.bind(this)}/>
        <h1>Notes</h1>
        <NoteForm input={this.state.input} inputNote={this.inputNote.bind(this)} 
          addNote={this.addNote.bind(this)} tags= {this.state.tags} 
          inputTag= {this.inputTag.bind(this)}/>
          
        <NoteList notes={this.state.notes} deleteNote = {this.deleteNote.bind(this)}
        editNote = {this.editNote.bind(this)}/>
      </div>
    );
  }
}

export default App