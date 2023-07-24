import { React, useState } from "react";
import NoteContext from "./noteContext";

const NoteState = ({ children }) => {
  const host = "http://127.0.0.1:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // get all notes
  const getNotes = async () => {
    // api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token":
          localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  // add note
  const addNote = async (title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "auth-token":
          localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line no-unused-vars
    const note = await response.json();
    setNotes(notes.concat(note));
    
  };
  //delete note
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
    });
    const json = response.json();
    console.log(json);
    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //edit note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "auth-token":
          localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line no-unused-vars
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    // logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
