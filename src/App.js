import React, { Component } from 'react';
import NoteForm from './NoteForm';
import Notes from './Note';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      noteList: {}
    };
  }

  render() {
    return (
      <div className="App">
        <NoteForm />
        <Notes />
      </div>
    );
  }
}

export default App;
