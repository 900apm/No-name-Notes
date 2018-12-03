import React, { Component } from 'react';
import NoteForm from './components/NoteForm';
import Notes from './components/Note';


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
