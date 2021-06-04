import { useState, useRef } from "react";
import { MdDeleteForever, MdEdit, MdCheck } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(true);

  const changeFocus = () => {
    setEditMode(true);
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (e) => {
    inputRef.current.disabled = true;
    setEditMode(false);
  };

  const moveCaretAtEnd = (e) => {
    var temp_value = e.target.value;
    e.target.value = "";
    e.target.value = temp_value;
  };

  return (
    <div className="note">
      <textarea
        className="text-value"
        ref={inputRef}
        disabled={inputRef}
        defaultValue={text}
        onFocus={moveCaretAtEnd}
        onChange={(e) => {
          handleEditNote(e.target.value, id);
        }}
      />
      <div className="note-footer">
        <small>{date}</small>

        <div>
          {editMode ? (
            <MdCheck
              className="delete-icon"
              size="1.3em"
              onClick={(e) => update(inputRef.current.value, e)}
            />
          ) : (
            <>
              <MdEdit
                className="delete-icon"
                size="1.3em"
                onClick={() => changeFocus()}
              />
              <MdDeleteForever
                className="delete-icon"
                onClick={() => {
                  handleDeleteNote(id);
                }}
                size="1.3em"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
