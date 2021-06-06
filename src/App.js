import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNoted = JSON.parse(localStorage.getItem("react-note-app-data"));
    if (savedNoted) {
      setNotes(savedNoted);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-note-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      isCompleted: false,
      date: date.toLocaleDateString(),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (text, id) => {
    const date = new Date();
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        note.text = text;
        note.date = date.toLocaleDateString();
      }
      return note;
    });
    setNotes(newNotes);
  };

  const toggle = (id) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        note.isCompleted = !false;
      }
      return note;
    });
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
          handleIsCompletedNote={toggle}
        />
      </div>
    </div>
  );
};

export default App;
