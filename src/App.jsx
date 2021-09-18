import "./App.css";
//import axios from "axios";
import { useState } from "react";
import DUMMY_NOTES from "./accessories/dummyNotes";
import Notes from "./components/notes/notes";
function App() {
  const [notesList] = useState(DUMMY_NOTES);
  const onNoteUpdate = (newItem) => {
  };
  return (
    <div className="App">
      <h1>NOTES APP</h1>
      <div className="notesList">
        {notesList.map((data, index) => {
          return <Notes key={index} note={data} onNoteUpdate={onNoteUpdate} />;
        })}
      </div>
    </div>
  );
}

export default App;
