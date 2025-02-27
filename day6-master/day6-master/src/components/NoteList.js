import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteItem from './NoteItem';

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  if (notes.length === 0) {
    return <p className="text-center">No notes available.</p>;
  }

  return (
    <ul className="list-group">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
