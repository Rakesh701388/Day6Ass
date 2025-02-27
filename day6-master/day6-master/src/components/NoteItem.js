import React, { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteItem = ({ note }) => {
  const { deleteNote, editNote } = useContext(NotesContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleEdit = () => {
    if (isEditing) {
      editNote(note.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <input 
          type="text" 
          className="form-control me-2" 
          value={editedText} 
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{note.text}</span>
      )}
      <div>
        <button className="btn btn-sm btn-secondary me-2" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => deleteNote(note.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default NoteItem;
