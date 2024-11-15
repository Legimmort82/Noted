import "@/components/NavBar/Navbar.css";
import { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import Button from "@/components/UI/Button";
import addfolderimg from "@/assets/images/addfolder.png"
import folderimg from "@/assets/images/folder.png"

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
  const [newfoldervalue, setNewfoldervalue] = useState(null);
  const [Folders, setFolders] = useState(Folderss);

  const addfolderbtn = () => {
    setAddfolder(true);
  };
  const canceladdfolder = () => {
    setAddfolder(false);
  };
  const getinputvalue = (e) => {
    setNewfoldervalue(e.target.value);
  };

  const okfolder = () => {
    if (newfoldervalue !== null) {
      setFolders([{ name: newfoldervalue }, ...Folders]);
      setNewfoldervalue(null);
      setAddfolder(false);
    }
  };
  useEffect(() => {
    const handleFolder = (event) => {
      console.log(event.target);
      const closeInput = event.target.closest(".nav-bar-folder,header");
      if (!closeInput) {
        setAddfolder(false);
      }
    };
    if (addfolder) {
      setTimeout(()=>{
        document.body.addEventListener("click", handleFolder);
      })
      console.log(addfolder);
    }
    return () => {
      document.body.removeEventListener("click", handleFolder);
    };
  }, [addfolder]);

  return (
    <section className="title-Folder">
      <header>
        <h2>پوشه ها</h2>
        <button
          className="new-folder-button"
          name=""
          id=""
          onClick={addfolderbtn}
        >
          <img src={addfolderimg} className="addf" />
        </button>
      </header>
      {addfolder && (
        <form className="nav-bar-folder">
          <img src={folderimg} className="docicon" />
          <input
            type="text"
            name=""
            id=""
            onChange={getinputvalue}
            autoFocus
            className="inputfolder"
          />
          <Button onClick={okfolder} variant="green" type="submit">
            ok
          </Button>
          <Button onClick={canceladdfolder} variant="red">
            cancel
          </Button>
        </form>
      )}

      <div className="allfolder">
        {Folders.map((item) => {
          return (
            <NavBarItem
              key={item.name}
              text={item.name}
              selected={item.id === selected}
              onClick={() => setSelected(item.id)}
              icon={folderimg}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Folder;
