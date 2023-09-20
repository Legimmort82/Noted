import { useState } from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import "./Folder.css";

const Folders = [
  {
    id: 1,
    name: "همه یاد‌داشت‌‌ها",
  },
  {
    id: 2,
    name: "کاری",
  },
  {
    id: 3,
    name: "مسافرت",
  },
  {
    id: 4,
    name: "رویدادها",
  },
  {
    id: 5,
    name: "باشگاه",
  },
];

function Folder() {
  const [selected, setSelected] = useState(null);
  return (
    <section className="title-Folder">
      <header>
        <h2>پوشه ها</h2>
        <button className="new-folder-button">
          <img src="./src/assets/images/addfolder.png" className="addf" />
        </button>
      </header>

      <div className="allfolder">
        {Folders.map((item) => {
          return(
          <NavBarItem
            key={item.name}
            text={item.name}
            selected={item.id === selected}
            onClick={() => setSelected(item.id)}
          />
        )})}
      </div>
    </section>
  );
}
export default Folder;
