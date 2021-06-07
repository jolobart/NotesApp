import { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import { AnimatePresence } from "framer-motion";

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
  handleIsCompletedNote,
  handleRestoreNote,
}) => {
  const [sort, setSort] = useState("active");

  return (
    <>
      <div className="sort-buttons">
        <button className="save" onClick={() => setSort("all")}>
          All
        </button>
        <button className="save" onClick={() => setSort("active")}>
          Active
        </button>
        <button className="save" onClick={() => setSort("completed")}>
          Completed
        </button>
      </div>

      <div className="notes-list">
        <AddNote handleAddNote={handleAddNote} />

        <AnimatePresence>
          {notes.length > 0 && sort === "active"
            ? notes.map((note) => {
                return (
                  note.isCompleted === false && (
                    <Note
                      key={note.id}
                      id={note.id}
                      text={note.text}
                      isCompleted={note.isCompleted}
                      date={note.date}
                      handleDeleteNote={handleDeleteNote}
                      handleEditNote={handleEditNote}
                      handleIsCompletedNote={handleIsCompletedNote}
                      handleRestoreNote={handleRestoreNote}
                    />
                  )
                );
              })
            : null}

          {notes.length > 0 && sort === "all"
            ? notes.map((note) => (
                <Note
                  key={note.id}
                  id={note.id}
                  text={note.text}
                  isCompleted={note.isCompleted}
                  date={note.date}
                  handleDeleteNote={handleDeleteNote}
                  handleEditNote={handleEditNote}
                  handleIsCompletedNote={handleIsCompletedNote}
                  handleRestoreNote={handleRestoreNote}
                />
              ))
            : null}

          {notes.length > 0 && sort === "completed"
            ? notes.map((note) => {
                return (
                  note.isCompleted === true && (
                    <Note
                      key={note.id}
                      id={note.id}
                      text={note.text}
                      isCompleted={note.isCompleted}
                      date={note.date}
                      handleDeleteNote={handleDeleteNote}
                      handleEditNote={handleEditNote}
                      handleIsCompletedNote={handleIsCompletedNote}
                      handleRestoreNote={handleRestoreNote}
                    />
                  )
                );
              })
            : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NotesList;
