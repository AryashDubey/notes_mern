import React, { useState } from "react";
import { deleteNote } from "../../services/notesService";
import "./notes.css";

export default function Notes({ note, onNoteUpdate, onNoteDelete }) {
  const [isFocused, setIsFocused] = useState(false);
  const noteTextUpdated = (e) => {
    const updatedNote = {
      ...note,
      text: e.target.textContent,
    };
    onNoteUpdate(updatedNote);
    setIsFocused(false);
  };
  return (
    <div className={isFocused ? "notes noteFocused" : "notes"}>
      <h1
        className="crossIcon"
        onClick={() => {
          onNoteDelete(note);
        }}
      >
        ❌
      </h1>

      <div
        onBlur={noteTextUpdated}
        onFocus={() => {
          setIsFocused(true);
        }}
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
