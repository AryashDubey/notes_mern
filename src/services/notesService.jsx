import axios from "axios";
import { NOTES_API_BASE_URL } from "../constants/routes";

export const getNotes = async () => {
  try {
    const response = await axios.get(NOTES_API_BASE_URL);
    return response.data.notes;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createNote = async (newNote) => {
  try {
    const response = await axios.post(NOTES_API_BASE_URL, newNote);
    return response.data.note;
  } catch (err) {
    console.error(err);
  }
};
export const deleteNote = async (newNoteId) => {
  try {
    const url = `${NOTES_API_BASE_URL}/${newNoteId}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
export const updateNote = async (updatedNote) => {
  try {
    const url = `${NOTES_API_BASE_URL}/${updatedNote._id}`;

    const response = await axios.put(url, updatedNote);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
