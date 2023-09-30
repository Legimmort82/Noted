import "@/components/Note/Note.css";
import FolderIcon from "@/assets/images/folder.png";
import Calender from "@/assets/images/frame.svg";
function EmptyNote({note,onUpdate}) {
  return (
    <div className="NoteEmpty">
      <header className="headerempty">
        <h1>{note ?.title}</h1>
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
      <textarea className="content" value={note?.description || ""} onChange={(e)=>onUpdate(e.target.value)}/>
    </div>
  );
}

export default EmptyNote;
