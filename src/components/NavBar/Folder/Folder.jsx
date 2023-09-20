import { useState } from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import "./Folder.css";

const Folderss = [
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

  const [addfolder, setAddfolder] = useState(false);
  const [newfoldervalue,setNewfoldervalue] = useState()
  const [Folders, setFolders] = useState(Folderss)
  const addfolderbtn = () => {
    setAddfolder(true);
  };
  const canceladdfolder = () => {
    setAddfolder(false);
  };
  const getinputvalue = (e) => {
    setNewfoldervalue( e.target.value) 
  }
  const okfolder = () =>{
    setFolders([{name: newfoldervalue}, ...Folders])
    setNewfoldervalue(null)
    setAddfolder(false);
  }
  return (
    <section className="title-Folder">
      <header>
        <h2>پوشه ها</h2>
        <button className="new-folder-button" onClick={addfolderbtn}>
          <img src="./src/assets/images/addfolder.png" className="addf" />
        </button>
      </header>
      {addfolder && (
        <div className="nav-bar-item">
          <img src="./src/assets/images/folder.png" className="docicon" />
          <input type="text" name="" id="" onChange={getinputvalue} />
          <button onClick={okfolder}>ok</button>
          <button onClick={canceladdfolder}>cancel</button>
        </div>
      )}

      <div className="allfolder">
        {Folders.map((item) => {
          return (
            <NavBarItem
              key={item.name}
              text={item.name}
              selected={item.id === selected}
              onClick={() => setSelected(item.id)}
              icon="./src/assets/images/folder.png"
            />
          );
        })}
      </div>
    </section>
  );
}
export default Folder;
