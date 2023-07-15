import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = ({children}) => {

    const s1={
        name: "Aditya",
        class: "5b"
    }
    const [state, setstate] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setstate({
              name: "Ayush",
              class: "6d",
            });
        }, timeout);
    }
    return <NoteContext.Provider value={{state, update}}>
        {children}
    </NoteContext.Provider>
}

export default NoteState;