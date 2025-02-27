import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotesProvider } from './context/NotesContext';
import Navbar from './components/Navbar.js';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';

function App() {
  return (
    <NotesProvider>
      <Navbar />
      <div className="container mt-4">
        <AddNote />
        <NoteList />
      </div>
    </NotesProvider>
  );
}

export default App;
