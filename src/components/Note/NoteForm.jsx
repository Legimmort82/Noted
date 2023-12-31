import "@/components/Note/Note.css";
import FolderIcon from "@/assets/images/folder.png";
import Calender from "@/assets/images/frame.svg";
function NoteForm({ note, onUpdate }) {
  return (
    <div className="NoteEmpty">
      <header className="headerempty">
        <input
        placeholder="یک عنوان برای یادداشت انتخاب کنید"
          className="content-input"
          value={note?.title || ""}
          onChange={(e) => onUpdate( "title", e.target.value)}
        />
        <div className="details">
          <div className="detail-r">
            <img src={FolderIcon} alt="" className="foldericon" />
            <span>پوشه</span>
            <span>شخصی</span>
          </div>
          <div className="detail-l">
            <img src={Calender} alt="" className="foldericon" />
            <span>زمان ایجاد</span>
            <span>{note?.date}</span>
          </div>
        </div>
      </header>
      <textarea
      placeholder="بنویس با عشق"
        className="content"
        value={note?.description || ""}
        onChange={(e) => onUpdate("description", e.target.value)}
      />
    </div>
  );
}

export default NoteForm;
