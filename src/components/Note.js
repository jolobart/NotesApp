import { useState, useRef } from "react";
import { MdDeleteForever, MdEdit, MdCheck, MdRestore } from "react-icons/md";
import { motion } from "framer-motion";

const Note = ({
  id,
  text,
  date,
  isCompleted,
  handleDeleteNote,
  handleEditNote,
  handleIsCompletedNote,
  handleRestoreNote,
}) => {
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
    <motion.div
      initial={{ x: "150vw", transition: { type: "spring", duration: 1 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{ scale: 0.95, transition: { type: "spring", duration: 1 } }}
      exit={{ x: "-90vw", scale: [1, 0] }}
      className={`${isCompleted ? "note complete" : "note"}`}
    >
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
              {isCompleted ? (
                <>
                  <MdRestore
                    className="delete-icon"
                    size="1.3em"
                    onClick={() => handleRestoreNote(id)}
                  />
                  <MdDeleteForever
                    className="delete-icon"
                    onClick={() => {
                      handleDeleteNote(id);
                    }}
                    size="1.3em"
                  />
                </>
              ) : (
                <>
                  <MdEdit
                    className="delete-icon"
                    size="1.3em"
                    onClick={() => changeFocus()}
                  />
                  <MdCheck
                    className="delete-icon"
                    size="1.3em"
                    onClick={() => handleIsCompletedNote(id)}
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
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Note;
