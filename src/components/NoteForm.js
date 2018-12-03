import React, { Component } from 'react';
import firebase from '../firebase';
import './NoteForm.css';

// reference to the root of the database
const dbRef = firebase.database().ref();

class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      noteContent: "",
      noteList: {}
    };
  }
  
  componentDidMount() {
    //attach event listener to firebase
    dbRef.on("value", snapshot => {
      const newNoteList = snapshot.val() === null ? [] : snapshot.val();
      // const newNoteList
      this.setState({
        noteList: newNoteList
      });
    });
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    // prevent default action of form which is to submit it with php
    e.preventDefault();
    //post our new note to firebase
    const newNote = {
      noteContent: this.state.noteContent,
    };

    // clear the form
    dbRef.push(newNote);

    this.setState({
      noteContent: "",
    })
  }

  // removes all the notes from noteList
  removeAll = () =>{
    dbRef.remove();
  }

  render() {
    return (
      <div className="NoteForm">

        <h1>no-name notes</h1>

        <form onSubmit={this.handleSubmit} action=''>

          <label htmlFor='noteContent'>write a note:</label>

          <input
            required
            onChange={this.handleChange}
            type='text'
            id="noteContent"
            value={this.state.noteContent} />

          <input type='submit' value='add note' />

          <button className='removeAll' onClick={this.removeAll}>remove all</button>

        </form>

      </div>
    );
  }
}

export default NoteForm;