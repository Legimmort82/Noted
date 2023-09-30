import React from "react";
import "./NoteList.css";
import Cards from './Cards';
function NoteList() {
  return (
    <div className="NoteList">
      <div className="HeadTitle">
        <span className="AllNotes">همه یادداشت ها</span>
      </div>
      <Cards/>
    </div>
  );
}

export default NoteList;
