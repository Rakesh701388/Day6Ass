import React, { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const AddNote = () => {
  const { addNote } = useContext(NotesContext);
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter note..." 
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)} 
        />
        <button className="btn btn-primary" type="submit">Add Note</button>
      </div>
    </form>
  );
};

export default AddNote;
