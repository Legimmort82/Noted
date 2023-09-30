import EmptyNote from "./EmptyNote";
import NoteForm from "./NoteForm";
import "./Note.css";
import { useContext } from "react";
import { noteProvide } from "@/providers/NoteProvider";
function Note() {
  const { selectedNoteId, notes,updateNote } = useContext(noteProvide);
  const selectedNote = notes.find((n) => n.id === selectedNoteId);
  console.log(selectedNote);
  return (
    <>
      {selectedNoteId === 0 ? (
        <EmptyNote />
      ) : selectedNote ? (
        <EmptyNote note={selectedNote} onUpdate={(value)=>updateNote(value)}/>
      ) : (
        <NoteForm />
      )}
    </>
  );
}

export default Note;
