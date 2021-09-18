import React from "react";
import "./notes.css";
export default function Notes({ note, onNoteUpdate }) {
  const noteTextUpdated = (e) => {
    const updatedNote = {
      ...note,
      text: e.target.textContent,
    };
    onNoteUpdate(updatedNote);
  };
  return (
    <div className="notes">
      <div
        onBlur={noteTextUpdated}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="notesText"
      >
        {note.text}
      </div>
      <div className="notesLink">
        <a href={note.link}>{note.link}</a>
      </div>
    </div>
  );
}
