// import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
// import { MdEdit } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note">
      <input
        className="text-value"
        value={text}
        onChange={(e) => {
          handleEditNote(e.target.value, id);
        }}
      ></input>
      <div className="note-footer">
        <small>{date}</small>
        <div>
          {/* <MdEdit
            className="delete-icon"
            size="1.3em"
            onClick={handleIsEditClick}
          /> */}
          <MdDeleteForever
            className="delete-icon"
            onClick={() => {
              handleDeleteNote(id);
            }}
            size="1.3em"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
