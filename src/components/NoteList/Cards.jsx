import { useContext, useState } from "react";
import "@/components/NoteList/NoteList.css";
import CardsItem from "./CardsItem";
import { noteProvide } from "@/providers/NoteProvider";
import { Link, useParams } from "react-router-dom";
function Cards() {
  const { noteId } = useParams();
  const { notes } = useContext(noteProvide);

  return (
    <div className="card-notess">
      {notes.map((item) => {
        return (
          <Link to={`/note/${item.id}`} key={item.title}>
            <CardsItem selected={item.id == noteId} {...item} />
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
