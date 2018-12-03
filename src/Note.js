import React, { Component } from 'react';
import firebase from './firebase';

// reference to the root of the database
const dbRef = firebase.database().ref();

class Notes extends Component {
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

  deleteNote = (e) => {
    // delete the note from firebase
    const firebaseKey = e.target.id;
    const noteRef = firebase.database().ref(`/${firebaseKey}`);
    noteRef.remove();
  }

  render() {
    // const noteLength = Object.keys(this.state.noteList).length;
    // console.log(noteLength)

    return (
      
      <div className='Notes'>

        {

          Object.entries(this.state.noteList).map(note => {

            // if (this.state.noteList.length > 3){
            //   this.state.noteList.shift();
            // }
            
            return (
              <div key={note[0]}>
                <h2>{note[1].title}</h2>
                <button id={note[0]} onClick={this.deleteNote}>Delete this note</button>
              </div>
            )

          })
        }

      </div>

    );
  }
}

export default Notes;