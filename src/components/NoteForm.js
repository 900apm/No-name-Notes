import React, { Component } from 'react';
import firebase from '../firebase';
import './NoteForm.css'

// reference to the root of the database
const dbRef = firebase.database().ref();

class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
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
      title: this.state.title,
    };
    // if length of noteList is >= 3
    // remove the first element from dbRef
    // change noteList first then push to dbRef

    console.log(Object.keys(this.state.noteList).length)
    dbRef.push(newNote);
    // clear the form

    this.setState({
      title: "",
    })
  }

  render() {
    return (
      <div className="NoteForm">

        <h1>note taker</h1>

        <form onSubmit={this.handleSubmit} action=''>

          <label htmlFor='note-input'>add a note</label>

          <input
            required
            maxlength="40"
            onChange={this.handleChange}
            type='text'
            id="note-input"
            value={this.state.title} />

          <input type='submit' value='add' />

        </form>

      </div>
    );
  }
}

export default NoteForm;