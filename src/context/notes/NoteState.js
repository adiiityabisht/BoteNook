import {React, useState} from "react";
import NoteContext from "./noteContext";

const NoteState = ({children}) => {
    const notesInitial = [
      {
        _id: "64b260c1a6e43e7ebc0f2cfd",
        user: "64b111a8995051e99f4f3532",
        title: "my title",
        description: "this is a description",
        tag: "tag",
        date: "2023-07-15T09:02:57.852Z",
        __v: 0,
      },
      {
        _id: "64b4fff42042e0bf6a090d1a",
        user: "64b111a8995051e99f4f3532",
        title: "my title2",
        description: "this is a description2",
        tag: "tag2",
        date: "2023-07-17T08:46:44.644Z",
        __v: 0,
      },
      {
        _id: "64b4fff42042e0bf6a090d1a",
        user: "64b111a8995051e99f4f3532",
        title: "my title2",
        description: "this is a description2",
        tag: "tag2",
        date: "2023-07-17T08:46:44.644Z",
        __v: 0,
      },
      {
        _id: "64b4fff42042e0bf6a090d1a",
        user: "64b111a8995051e99f4f3532",
        title: "my title2",
        description: "this is a description2",
        tag: "tag2",
        date: "2023-07-17T08:46:44.644Z",
        __v: 0,
      },
      {
        _id: "64b4fff42042e0bf6a090d1a",
        user: "64b111a8995051e99f4f3532",
        title: "my title2",
        description: "this is a description2",
        tag: "tag2",
        date: "2023-07-17T08:46:44.644Z",
        __v: 0,
      },
      {
        _id: "64b4fff42042e0bf6a090d1a",
        user: "64b111a8995051e99f4f3532",
        title: "my title2",
        description: "this is a description2",
        tag: "tag2",
        date: "2023-07-17T08:46:44.644Z",
        __v: 0,
      },
    ];
    const [notes, setnotes] = useState(notesInitial)
    return <NoteContext.Provider value={{notes, setnotes}}>
        {children}
    </NoteContext.Provider>
}

export default NoteState;