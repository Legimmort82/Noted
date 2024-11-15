import "@/components/NavBar/NavBar.css";
import NavBarItem from "./NavBarItem";
import doc from "@/assets/images/doc.png";
import { useContext } from "react";
import { noteProvide } from "@/providers/NoteProvider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function LastNote() {
  const { notes } = useContext(noteProvide);
  const { noteId } = useParams();
  const lastNotes = notes.slice(-3);
  return (
    <section className="last-note-container">
      <h5>آخرین یادداشت‌ها</h5>

      <div className="last-notes">
        {lastNotes.map((item) => {
          return (
            <Link to={`/note/${item.id}`} key={item.id}>
              <NavBarItem
                text={item.title}
                icon={doc}
                selected={item.id == noteId}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LastNote;
