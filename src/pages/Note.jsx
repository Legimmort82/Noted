import NoteForm from "../components/Note/NoteForm";
import "@/components/Note/Note.css";
import { useContext } from "react";
import { noteProvide } from "@/providers/NoteProvider";
import { useParams } from "react-router-dom";
function Note() {
  const { noteId } = useParams();
  const { notes, updateNote } = useContext(noteProvide);
  const selectedNote = notes.find((n) => n.id == noteId);
  // console.log(selectedNote);
  return (
    <>
      <NoteForm note={selectedNote} onUpdate={updateNote} />
    </>
  );
}

export default Note;
