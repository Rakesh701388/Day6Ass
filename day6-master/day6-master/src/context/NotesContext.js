import React, { createContext, useState, useEffect } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  // Initialize from LocalStorage if available
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Persist notes to LocalStorage on each change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (noteText) => {
    const newNote = { id: Date.now(), text: noteText };
    setNotes(prev => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const editNote = (id, updatedText) => {
    setNotes(prev =>
      prev.map(note => (note.id === id ? { ...note, text: updatedText } : note))
    );
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
};
