import "./NavBarItem.css";
function NavBarItem({onClick,icon,text,selected}) {
  const style = {
    backgroundColor: selected ? "white" : "#F8EEE2",
  };
  return (
    <div className="nav-bar-item" style={style} onClick={onClick}>
      <img src={icon} className="docicon" />
      {text}
    </div>
  );
}

export default NavBarItem;
