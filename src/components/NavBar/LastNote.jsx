import React, { useContext } from "react";
import "@/components/NavBar/NavBar.css";
import NavBarItem from "./NavBarItem";
import { noteProvide } from "@/providers/NoteProvider";


function LastNote() {
  const {notes}= useContext(noteProvide)
  const lastNotes = notes.slice(-3)
  return (
    <section className="last-note-container">
      <h5>آخرین یادداشت‌ها</h5>

      <div className="last-notes">
        {lastNotes.map((item) => {
          return (
            <NavBarItem
              key={item.id}
              text={item.title}
              icon="./src/assets/images/doc.png"
            />
          );
        })}
      </div>
    </section>
  );
}

export default LastNote;
