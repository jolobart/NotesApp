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
    const newNotes = [...notes, newNote];
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
        note.isCompleted = true;
      }
      return note;
    });
    setNotes(newNotes);
  };

  const restore = (id) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        note.isCompleted = false;
      }
      return note;
    });
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"} body`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
          handleIsCompletedNote={toggle}
          handleRestoreNote={restore}
        />
      </div>
      <div class="footer-basic">
        <footer>
          {/* <div class="social">
            <a href="#">
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div> */}
          {/* <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul> */}

          <p className="copyright">Jolobart © 2021</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
