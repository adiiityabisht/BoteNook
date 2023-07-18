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
    headers: 
    {"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMTExYTg5OTUwNTFlOTlmNGYzNTMyIn0sImlhdCI6MTY4OTMzMTM3M30.rPpNpUDGnQmWEk9PjjtxvdRxkfOubXQNWO_vbl8n_R0",
    "Content-Type" : "application/json"},
  });
  const json = await response.json(); 
  console.log(json)
  setNotes(json)

  };
  // add note
  const addNote = async (title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      
    method: "POST",
    headers: 
    {"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMTExYTg5OTUwNTFlOTlmNGYzNTMyIn0sImlhdCI6MTY4OTMzMTM3M30.rPpNpUDGnQmWEk9PjjtxvdRxkfOubXQNWO_vbl8n_R0",
    "Content-Type" : "application/json"},
    body: JSON.stringify({title,description,tag})
  });
  // eslint-disable-next-line no-unused-vars
  const json = response.json(); 
    console.log("Note has been added");
    const note = {
      _id: "64b4fff42042e0bf6a090d1a4",
      user: "64b111a8995051e99f4f3532",
      title: title,
      description: description,
      tag: tag,
      date: "2023-07-17T08:46:44.644Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //delete note
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      
    method: "DELETE",
    headers: 
    {"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMTExYTg5OTUwNTFlOTlmNGYzNTMyIn0sImlhdCI6MTY4OTMzMTM3M30.rPpNpUDGnQmWEk9PjjtxvdRxkfOubXQNWO_vbl8n_R0",
    "Content-Type" : "application/json"},
  });
  const json = response.json(); 
    console.log(json);
    console.log("deleting the note with id" + id);
    const newNotes=notes.filter((note)=> {return note._id!==id})
    setNotes(newNotes);
  };
  //edit note 
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      
    method: "POST",
    headers: 
    {"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMTExYTg5OTUwNTFlOTlmNGYzNTMyIn0sImlhdCI6MTY4OTMzMTM3M30.rPpNpUDGnQmWEk9PjjtxvdRxkfOubXQNWO_vbl8n_R0",
    "Content-Type" : "application/json"},
    body: JSON.stringify({title, description, tag})
  });
  // eslint-disable-next-line no-unused-vars
  const json = response.json(); 
  
    // logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element.id===id){
        element.title=title;
        element.description=description;
        element.tag=tag;
      }
      
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
