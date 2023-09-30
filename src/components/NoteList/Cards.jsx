import { useContext, useState } from "react";
import "@/components/NoteList/NoteList.css"
import CardsItem from "./CardsItem";
import { noteProvide } from "@/providers/NoteProvider";
function Cards() {
    const {notes,selectedNoteId,setSelectedNoteId} = useContext(noteProvide)

  return (
    <div className="card-notess">
      {notes.map((item) => {
        return (
          <CardsItem
            key={item.title}
            selected={item.id === selectedNoteId}
            onClick={() => setSelectedNoteId(item.id)}
            title={item.title}
            description={item.description}
            date={item.date}
            color={item.color}
          />
        );
      })}
    </div>
  );
}

export default Cards;
