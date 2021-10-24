import "./App.css";
import { useEffect, useState } from "react";
import Notes from "./components/notes/notes";
import {
  createNote,
  getNotes,
  deleteNote,
  updateNote,
} from "./services/notesService";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
function App() {
  const [notesList, setNotesList] = useState([]);
  const [newNote, setNewNote] = useState({ text: "", link: "" });
  useEffect(() => {
    getNotesFromServices();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const deleteNoteFunction = async (noteToBeDeleted) => {
    var newNoteList = [];

    newNoteList = notesList.filter((note) => {
      return note._id !== noteToBeDeleted._id;
    });
    setNotesList(newNoteList);
    await deleteNote(noteToBeDeleted._id);
  };
  const addNewNote = async () => {
    await createNote(newNote);
    setNotesList([...notesList, newNote]);
    handleClose();
    setNewNote({ text: "", link: "" });
  };
  const handleShow = () => setShow(true);

  const onNoteUpdate = async (newItem) => {
    console.log('dadada')
    await updateNote(newItem);

  };
  async function getNotesFromServices() {
    const notes = await getNotes();
    setNotesList(notes);
  }
  return (
    <div className="App">
      <Button variant="primary" onClick={handleShow}>
        Add A Note{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please enter all the information.
          <FloatingLabel
            controlId="floatingTextarea"
            label="Add Title"
            className="mb-3"
          >
            <div style={{ margin: "8px" }}></div>
            <Form.Control
              as="textarea"
              placeholder="Add Title"
              onChange={(e) => {
                const newVal = e.currentTarget.value;

                setNewNote({
                  ...newNote,
                  text: newVal,
                });
              }}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Add Link">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              onChange={(e) => {
                const newVal = e.currentTarget.value;

                setNewNote({
                  ...newNote,
                  link: newVal,
                });
              }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button variant="primary" onClick={addNewNote}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>NOTES APP</h1>
      <div className="notesList">
        {notesList.map((data, index) => {
          return (
            <Notes
              key={index}
              note={data}
              onNoteUpdate={onNoteUpdate}
              onNoteDelete={deleteNoteFunction}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
